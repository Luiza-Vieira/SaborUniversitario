import "../../styles/carrinho.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

import { salvarPedido } from "../../services/pedidoService";

function ResumoPedido() {

  const navigate = useNavigate();

  // =====================================
  // SIDEBAR
  // =====================================

  const [sidebarAberta, setSidebarAberta] =
    useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {

    function fecharSidebar(event) {

      if (

        sidebarRef.current &&

        !sidebarRef.current.contains(
          event.target
        )

      ) {

        setSidebarAberta(false);

      }

    }

    document.addEventListener(
      "mousedown",
      fecharSidebar
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        fecharSidebar
      );

    };

  }, []);

  // =====================================
  // PEDIDO
  // =====================================

  const pedidoSalvo =
    localStorage.getItem("pedidoAtual");

  const pedido =

    pedidoSalvo

      ? JSON.parse(pedidoSalvo)

      : null;
      

  if (!pedido) {

    return (

      <h2
        style={{
          marginTop:80,
          textAlign:"center"
        }}
      >

        Nenhum pedido encontrado.

      </h2>

    );

  }

  // =====================================
  // STATES
  // =====================================

  const [itens,setItens]=useState(

    pedido.itens || []

  );

  const formaPagamento =
    pedido.formaPagamento;

  // =====================================
  // QUANTIDADE
  // =====================================

  const [

    quantidadeCarrinho,

    setQuantidadeCarrinho

  ] = useState(

    pedido.itens.reduce(

      (total,item)=>

        total+item.quantidade,

      0

    )

  );

  // =====================================
  // ATUALIZA DADOS
  // =====================================

  function atualizarDados(novosItens){

    setItens(novosItens);

    setQuantidadeCarrinho(

      novosItens.reduce(

        (t,item)=>t+item.quantidade,

        0

      )

    );

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify({

        ...pedido,

        itens:novosItens

      })

    );

    localStorage.setItem(

      "carrinho",

      JSON.stringify(novosItens)

    );

  }

    // =====================================
  // AUMENTAR
  // =====================================

  function aumentar(index) {

    const novosItens = [...itens];

    novosItens[index].quantidade++;

    atualizarDados(novosItens);

  }

  // =====================================
  // DIMINUIR
  // =====================================

  function diminuir(index) {

    let novosItens = [...itens];

    novosItens[index].quantidade--;

    novosItens = novosItens.filter(

      item => item.quantidade > 0

    );

    atualizarDados(novosItens);

  }

  // =====================================
  // TOTAL
  // =====================================

  const total = itens.reduce(

    (soma, item) => {

      const preco =

        typeof item.preco === "string"

          ? parseFloat(

              item.preco

                .replace("R$", "")

                .replace(",", ".")

                .trim()

            )

          : Number(item.preco);

      return soma +

        preco *

        Number(item.quantidade);

    },

    0

  );

  // =====================================
  // CONFIRMAR PEDIDO
  // =====================================

    async function confirmarPedido() {

  const pedidoSalvo = await salvarPedido(

    total,
    formaPagamento,
    itens

  );

  if (!pedidoSalvo) {

    alert("Erro ao salvar o pedido.");

    return;

  }

  // Atualiza o pedido no localStorage com o ID do banco
  const pedidoAtualizado = {

    ...pedido,

    id: pedidoSalvo.id,

    itens,

    total,

    formaPagamento

  };

  localStorage.setItem(

    "pedidoAtual",

    JSON.stringify(pedidoAtualizado)

  );

  // Limpa o carrinho
  localStorage.removeItem("carrinho");

  // PIX
  if (formaPagamento === 1) {

    navigate("/pix");

    return;

  }

  // Crédito, Débito ou Benefício
  navigate("/pedidofeito");

}

  // =====================================
  // JSX
  // =====================================

  return (

    <div className="pagina-resumo">
         <Sidebar
        sidebarAberta={sidebarAberta}
        sidebarRef={sidebarRef}
        navigate={navigate}
        setSidebarAberta={setSidebarAberta}
      />

      <Header
        sidebarAberta={sidebarAberta}
        setSidebarAberta={setSidebarAberta}
        carrinho={itens}
        navigate={navigate}
      />

      <div className="resumo-subtitulo">
        Restaurante universitário
      </div>

      <div className="resumo-titulo-box">
        <h2>
          Resumo do pedido
        </h2>
      </div>

      <div className="resumo-box">

        {

          itens.map((produto, index) => {

            const precoNumerico =

              typeof produto.preco === "string"

                ? parseFloat(

                    produto.preco
                      .replace("R$", "")
                      .replace(",", ".")
                      .trim()

                  )

                : Number(produto.preco);

            return (

              <div
                className="resumo-item"
                key={index}
              >

                <div className="resumo-esquerda">

                  <div
                    className="resumo-img"
                    style={{
                      backgroundImage:
                        `url(${produto.imagem})`
                    }}
                  ></div>

                  <div className="resumo-info">

                    <h3>

                      {produto.nome}

                    </h3>

                  </div>

                </div>

                <div className="resumo-direita">

                  <p className="resumo-preco">

                    R$

                    {

                      (

                        precoNumerico *

                        produto.quantidade

                      )

                        .toFixed(2)

                        .replace(".", ",")

                    }

                  </p>

                  <div className="resumo-controle">

                    <button
                      onClick={() =>
                        diminuir(index)
                      }
                    >

                      -

                    </button>

                    <span>

                      {produto.quantidade}

                    </span>

                    <button
                      onClick={() =>
                        aumentar(index)
                      }
                    >

                      +

                    </button>

                  </div>

                </div>

              </div>

            );

          })

        }

        <p className="resumo-observacao">

          Observação:

        </p>

        {

          itens.length > 0 && (

            <div className="resumo-total">

              Valor total: R$

              {

                total

                  .toFixed(2)

                  .replace(".", ",")

              }

            </div>

          )

        }

      </div>

      <div className="resumo-footer">

        <button

          className="btn-voltar"

          onClick={() => navigate("/carrinho")}

        >

          Voltar

        </button>

        <button

          className="resumo-btn"

          onClick={confirmarPedido}

        >

          CONFIRMAR PEDIDO

        </button>

      </div>


    </div>

  );

}

export default ResumoPedido;
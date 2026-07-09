import "../../styles/carrinho.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { buscarClientePorUsuario } from "../../services/clienteService";
function Carrinho() {

  // =====================================
  // NAVEGAÇÃO
  // =====================================

  const navigate = useNavigate();

  // =====================================
  // SIDEBAR
  // =====================================

  const [sidebarAberta, setSidebarAberta] =
    useState(false);

  const sidebarRef = useRef(null);

  // =====================================
  // FECHAR SIDEBAR
  // =====================================

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
  // CARRINHO
  // =====================================

  const [carrinho, setCarrinho] =
    useState(() => {

      const carrinhoSalvo =
        localStorage.getItem("carrinho");

      return carrinhoSalvo
        ? JSON.parse(carrinhoSalvo)
        : [];

    });

  // =====================================
  // FORMA DE PAGAMENTO
  // =====================================

  const [formaPagamento, setFormaPagamento] =
    useState(1);

  const [cliente, setCliente] = useState(null);

  useEffect(() => {

  async function carregarCliente() {

    const usuario = JSON.parse(
      localStorage.getItem("usuarioLogado")
    );

    if (!usuario) return;

    const dadosCliente =
      await buscarClientePorUsuario(usuario.id);

    setCliente(dadosCliente);
    console.table(dadosCliente);
  }

  carregarCliente();

}, []);

  // =====================================
  // SALVAR CARRINHO
  // =====================================

  useEffect(() => {

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

  }, [carrinho]);

  // =====================================
  // AUMENTAR
  // =====================================

  function aumentar(index) {

    const novoCarrinho = [...carrinho];

    novoCarrinho[index].quantidade++;

    setCarrinho(novoCarrinho);

  }

  // =====================================
  // DIMINUIR
  // =====================================

  function diminuir(index) {

    const novoCarrinho = [...carrinho];

    novoCarrinho[index].quantidade--;

    const filtrado =
      novoCarrinho.filter(

        item => item.quantidade > 0

      );

    setCarrinho(filtrado);

  }

  // =====================================
  // TOTAL
  // =====================================

  const total = carrinho.reduce(

    (soma, produto) => {

      const preco =

        typeof produto.preco === "string"

          ? parseFloat(

              produto.preco

                .replace("R$", "")

                .replace(",", ".")

                .trim()

            )

          : Number(produto.preco);

      return soma +

        preco *

        Number(produto.quantidade);

    },

    0

  );

  // =====================================
  // FINALIZAR PEDIDO
  // =====================================

  function finalizarPedido() {

    if (carrinho.length === 0) {

      alert("Seu carrinho está vazio!");

      return;

    }

    const pedidoAtual = {

      itens: carrinho,

      total,

      formaPagamento

    };

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify(pedidoAtual)

    );

    navigate("/resumo");

  }

  // =====================================
  // JSX
  // =====================================

  return (

    <>      <Sidebar
        sidebarAberta={sidebarAberta}
        sidebarRef={sidebarRef}
        navigate={navigate}
        setSidebarAberta={setSidebarAberta}
      />

      <Header
        sidebarAberta={sidebarAberta}
        setSidebarAberta={setSidebarAberta}
        carrinho={carrinho}
        navigate={navigate}
      />

      <h2 className="resumo-subtitulo">
        Restaurante universitário
      </h2>

      <div className="resumo-titulo-box">
        <h2>
          Resumo do pedido
        </h2>
      </div>

      <div className="box-carrinho">

        {

          carrinho.map((produto, index) => (

            <div
              className="item-carrinho"
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

                  {produto.preco}

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

          ))

        }

        {

          carrinho.length > 0 && (

            <div className="total">

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

      <div className="footer">

        <a href="/">

          Adicionar mais produtos ao carrinho

        </a>

        <div className="pagamento">

          <div className="pagamento-cartao-box">

             <select
                    className="select-pagamento"
                    value={formaPagamento}
                    onChange={(e) => {

                        const valor = Number(e.target.value);

                        if (valor === 99) {

                            navigate("/cartao");
                            return;

                        }

                        setFormaPagamento(valor);

                    }}
                >

                    <option value={1}>
                        Pix
                    </option>

                    <option value={2}>
                        Cartão de crédito
                    </option>

                    <option value={3}>
                        Cartão de débito
                    </option>

                    <option value={4}>
                        Dinheiro
                    </option>

                    <option value={99}>
                        + Adicionar novo cartão
                    </option>

                </select>
          </div>

          <button

            className="btn-proximo"

            onClick={finalizarPedido}

          >

            Finalizar Pedido

          </button>

        </div>

      </div>

    </>

  );

}

export default Carrinho;
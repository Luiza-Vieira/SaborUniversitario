import "../styles/carrinho.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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
  // SALVAR NO LOCALSTORAGE
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

    novoCarrinho[index].quantidade += 1;

    setCarrinho(novoCarrinho);

  }

  // =====================================
  // DIMINUIR
  // =====================================

  function diminuir(index) {

    const novoCarrinho = [...carrinho];

    novoCarrinho[index].quantidade -= 1;

    const carrinhoFiltrado =
      novoCarrinho.filter(
        (item) => item.quantidade > 0
      );

    setCarrinho(carrinhoFiltrado);

  }

  // =====================================
  // TOTAL
  // =====================================

  const total = carrinho.reduce(

    (soma, produto) => {

      let preco = 0;

      if (typeof produto.preco === "string") {

        preco = parseFloat(
          produto.preco
            .replace("R$", "")
            .replace(",", ".")
            .trim()
        );

      } else {

        preco = Number(produto.preco);

      }

      return soma +
        preco * Number(produto.quantidade);

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

    const novoPedido = {

      numero:
        Math.floor(
          1000 + Math.random() * 9000
        ),

      status: "Em preparo",

      total,

      data:
        new Date().toLocaleDateString(
          "pt-BR"
        ),

      itens: carrinho

    };

    localStorage.setItem(
      "pedidoAtual",
      JSON.stringify(novoPedido)
    );

    navigate("/resumo");

  }

  // =====================================
  // JSX
  // =====================================

  return (

    <>

      <Sidebar
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

      {/* CARRINHO */}

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
                  <h3>{produto.nome}</h3>
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

              Valor total: R$ {

                total
                  .toFixed(2)
                  .replace(".", ",")

              }

            </div>

          )

        }

      </div>

      {/* FOOTER */}

      <div className="footer">

        <a href="/">
          Adicionar mais produtos ao carrinho
        </a>

        <div className="pagamento">

          <div className="pagamento-cartao-box">

            <select
              className="select-pagamento"
              onChange={(e) => {

                if (
                  e.target.value === "novo-cartao"
                ) {
                  navigate("/cartao");
                }

              }}
            >

              <option value="dinheiro">
                Dinheiro
              </option>

              <option value="pix">
                Pix
              </option>

              <option value="credito">
                Cartão de crédito
              </option>

              <option value="debito">
                Cartão de débito
              </option>

              <option value="novo-cartao">
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
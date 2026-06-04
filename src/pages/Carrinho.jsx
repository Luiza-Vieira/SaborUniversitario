import "../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

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

  // =====================================
  // REF SIDEBAR
  // =====================================

  const sidebarRef = useRef(null);

  // =====================================
  // FECHAR SIDEBAR AO CLICAR FORA
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
  // STATE DO CARRINHO
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
  // SINCRONIZAR LOCALSTORAGE
  // =====================================

  useEffect(() => {

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

  }, [carrinho]);

  // =====================================
  // AUMENTAR QUANTIDADE
  // =====================================

  function aumentar(index) {

    setCarrinho((carrinhoAtual) => {

      return carrinhoAtual.map(
        (item, i) => {

          if (i === index) {

            return {

              ...item,

              quantidade:
                item.quantidade + 1

            };

          }

          return item;

        }

      );

    });

  }

  // =====================================
  // DIMINUIR QUANTIDADE
  // =====================================

  function diminuir(index) {

    setCarrinho((carrinhoAtual) => {

      let novoCarrinho =
        carrinhoAtual.map(

          (item, i) => {

            if (i === index) {

              return {

                ...item,

                quantidade:
                  item.quantidade - 1

              };

            }

            return item;

          }

        );

      novoCarrinho =
        novoCarrinho.filter(

          (item) =>
            item.quantidade > 0

        );

      return novoCarrinho;

    });

  }

  // =====================================
  // CALCULAR TOTAL
  // =====================================

  const total = carrinho.reduce(

    (soma, produto) => {

      const preco =
        typeof produto.preco === "string"

          ? parseFloat(

              produto.preco
                .replace("R$ ", "")
                .replace(",", ".")

            )

          : Number(produto.preco);

      return soma +
        (preco * produto.quantidade);

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

      total: total,

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

      {/* SIDEBAR */}

      <div

        ref={sidebarRef}

        className={
          sidebarAberta
            ? "sidebar ativo"
            : "sidebar"
        }

      >

        <div className="sidebar-header">

          <div className="foto"></div>

          <p className="nome">

            Usuário

          </p>

          <p className="fichas">

            Fichas: $ 0

          </p>

        </div>

        <ul>

          <li
            onClick={() => {

              navigate("/");

              setSidebarAberta(false);

            }}
          >

            Início

          </li>

          <li>

            Minha Conta

          </li>

          <li
            onClick={() => {

              navigate("/meuspedidos");

              setSidebarAberta(false);

            }}
          >

            Meus Pedidos

          </li>

        </ul>

      </div>

      {/* HEADER */}

      <header className="header">

        <div

          className="perfil"

          onClick={() =>

            setSidebarAberta(

              !sidebarAberta

            )

          }

        >

          <div className="foto"></div>

          <div>

            <p className="nome">
              Usuário
            </p>

            <p className="fichas">
              Fichas: $ 0
            </p>

          </div>

        </div>

        <h1>
          Sabor Universitário
        </h1>

        <button
          className="carrinho-btn"
        >

          🛒 {

            carrinho.reduce(

              (total, item) => {

                return (
                  total +
                  item.quantidade
                );

              },

              0

            )

          }

        </button>

      </header>

      {/* SUBTITULO */}

      <h2 className="resumo-subtitulo">

        Restaurante universitário

      </h2>

      {/* TITULO */}

      <div className="resumo-titulo-box">

        <h2>
          Resumo do pedido
        </h2>

      </div>

      {/* BOX DO CARRINHO */}

      <div className="box-carrinho">

        {

          carrinho.map((produto, index) => {

            return (

              <div
                className="item-carrinho"
                key={index}
              >

                {/* ESQUERDA */}

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

                {/* DIREITA */}

                <div className="resumo-direita">

                  <p className="resumo-preco">

                    {

                      typeof produto.preco === "number"

                        ? `R$ ${produto.preco
                            .toFixed(2)
                            .replace(".", ",")}`

                        : produto.preco

                    }

                  </p>

                  {/* CONTROLE */}

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

        {/* TOTAL */}

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

          {/* SELECT */}

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

          {/* BOTÃO */}

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
import "../index.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Carrinho() {

  // =====================================
  // NAVEGAÇÃO
  // =====================================

  const navigate = useNavigate();

  // =====================================
  // STATE DO CARRINHO
  // =====================================

  const [carrinho, setCarrinho] = useState(() => {

    const carrinhoSalvo =
      localStorage.getItem("carrinho");

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : [];

  });

  // =====================================
  // AUMENTAR QUANTIDADE
  // =====================================

  function aumentar(index) {

    const novoCarrinho = [...carrinho];

    novoCarrinho[index].quantidade++;

    setCarrinho(novoCarrinho);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );

  }

  // =====================================
  // DIMINUIR QUANTIDADE
  // =====================================

  function diminuir(index) {

    const novoCarrinho = [...carrinho];

    novoCarrinho[index].quantidade--;

    if (
      novoCarrinho[index].quantidade <= 0
    ) {

      novoCarrinho.splice(index, 1);

    }

    setCarrinho(novoCarrinho);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );

  }

  // =====================================
  // CALCULAR TOTAL
  // =====================================

  const total = carrinho.reduce(

    (soma, produto) => {

      const preco = parseFloat(

        produto.preco
          .replace("R$ ", "")
          .replace(",", ".")

      );

      return soma +
        (preco * produto.quantidade);

    },

    0

  );

  // =====================================
  // FINALIZAR PEDIDO
  // =====================================

  function finalizarPedido() {

    // impede pedido vazio

    if (carrinho.length === 0) {

      alert("Seu carrinho está vazio!");

      return;

    }

    // cria pedido

    const novoPedido = {

      numero:

        Math.floor(
          1000 + Math.random() * 9000
        ),

      status: "Em preparo",

      total: total.toFixed(2),

      data:

        new Date().toLocaleDateString(
          "pt-BR"
        ),

      itens: carrinho

    };

    // salva pedido temporário

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify(novoPedido)

    );

    // vai para resumo

    navigate("/resumo");

  }

  // =====================================
  // JSX
  // =====================================

  return (

    <>

      {/* HEADER */}

      <header className="header">

        <div
          className="perfil"
          onClick={() => navigate("/")}
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

      {/* TÍTULO */}

      <h2 className="titulo">

        Restaurante universitário

      </h2>

      {/* BOX DO CARRINHO */}

      <div className="box-carrinho">

        <h1>

          Resumo do pedido

        </h1>

        {

          carrinho.map((produto, index) => {

            return (

              <div
                className="item-carrinho"
                key={index}
              >

                {/* IMAGEM */}

                <div

                  className="img"

                  style={{

                    backgroundImage:
                      `url(${produto.imagem})`

                  }}

                ></div>

                {/* INFO */}

                <div className="info">

                  <h3>

                    {produto.nome}

                  </h3>

                  <p>

                    {produto.preco}

                  </p>

                </div>

                {/* CONTROLE */}

                <div className="controle">

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

            );

          })

        }

        {/* TOTAL */}

        {

          carrinho.length > 0 && (

            <div id="total">

              Valor total: R$ {

                total.toFixed(2)

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

          {/* BLOCO ESQUERDO */}

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

          {/* BOTÃO FINALIZAR */}

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
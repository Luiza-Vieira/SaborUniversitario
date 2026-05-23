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

          <select className="select-pagamento">

            <option>
              Dinheiro
            </option>

            <option>
              Pix
            </option>

            <option>
              Cartão de crédito
            </option>

            <option>
              Cartão de débito
            </option>

          </select>

          <button className="btn-proximo">

            Próximo {"›››"}

          </button>

        </div>

      </div>

    </>

  );

}

export default Carrinho;
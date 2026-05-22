import "../index.css";

import { useState } from "react";

function Carrinho() {

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
  // AUMENTAR
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
  // DIMINUIR
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
  // TOTAL
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

  return (

    <>

      {/* HEADER */}

      <header className="header">

        <h1>

          Sabor Universitário

        </h1>

      </header>

      {/* TÍTULO */}

      <h2 className="titulo">

        Resumo do Pedido

      </h2>

      {/* BOX */}

      <div className="box-pedido">

        {/* CABEÇALHO */}

        <div className="cabecalho-pedido">

          <span>Produto</span>

          <span>Qtd</span>

          <span>Preço</span>

        </div>

        {/* ITENS */}

        {

          carrinho.map((produto, index) => {

            const preco = parseFloat(

              produto.preco
                .replace("R$ ", "")
                .replace(",", ".")

            );

            const subtotal =
              preco * produto.quantidade;

            return (

              <div
                className="item-pedido"
                key={index}
              >

                {/* PRODUTO */}

                <div className="produto-info">

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

                </div>

                {/* QUANTIDADE */}

                <div className="qtd">

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

                {/* PREÇO */}

                <div className="preco">

                  R$ {

                    subtotal.toFixed(2)

                  }

                </div>

              </div>

            );

          })

        }

        {/* TOTAL */}

        <div className="total-container">

          <strong>Total:</strong>

          <span>

            R$ {total.toFixed(2)}

          </span>

        </div>

      </div>

    </>

  );

}

export default Carrinho;
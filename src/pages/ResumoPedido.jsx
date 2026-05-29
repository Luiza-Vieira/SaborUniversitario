import "../index.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumoPedido() {

  const navigate = useNavigate();

  const pedido = JSON.parse(
    localStorage.getItem("pedidoAtual")
  );

  const [itens, setItens] = useState(
    pedido.itens
  );

  // =====================================
  // AUMENTAR
  // =====================================

  function aumentar(index) {

    const novosItens = itens.map(
      (item, i) => {

        if (i === index) {

          return {
            ...item,
            quantidade: item.quantidade + 1
          };

        }

        return item;

      }
    );

    setItens(novosItens);

  }

  // =====================================
  // DIMINUIR
  // =====================================

  function diminuir(index) {

    const novosItens = itens.map(
      (item, i) => {

        if (
          i === index &&
          item.quantidade > 1
        ) {

          return {
            ...item,
            quantidade: item.quantidade - 1
          };

        }

        return item;

      }
    );

    setItens(novosItens);

  }

  // =====================================
  // TOTAL
  // =====================================

  const total = itens.reduce(

    (soma, item) => {

      const preco = parseFloat(

        item.preco
          .replace("R$ ", "")
          .replace(",", ".")

      );

      return soma +
        (preco * item.quantidade);

    },

    0

  );

  // =====================================
  // CONFIRMAR PEDIDO
  // =====================================

  function confirmarPedido() {

    const pedidosSalvos =

      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    const pedidoFinal = {

      ...pedido,

      itens,

      total: total.toFixed(2)

    };

    pedidosSalvos.push(pedidoFinal);

    localStorage.setItem(

      "pedidos",

      JSON.stringify(pedidosSalvos)

    );

    localStorage.removeItem(
      "carrinho"
    );

    navigate("/pedidofeito");

  }

  return (

    <>

      {/* HEADER */}

      <header className="header">

        <div></div>

        <h1>
          Sabor Universitário
        </h1>

        <div></div>

      </header>

      {/* SUBTITULO */}

      <h2 className="titulo">

        Restaurante universitário

      </h2>

      {/* BOX */}

      <div className="box-carrinho">

        <h1>
          Resumo do pedido
        </h1>

        {

          itens.map((produto, index) => (

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

              <div className="controle-resumo">

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

          ))

        }

        {/* OBSERVAÇÃO */}

        <p className="observacao">

          Observação:

        </p>

        {/* TOTAL */}

        <div id="total">

          Valor total: R$ {

            total.toFixed(2)

          }

        </div>

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
              Cartão
            </option>

          </select>

          <button

            className="btn-proximo"

            onClick={confirmarPedido}

          >

            CONFIRMAR

          </button>

        </div>

      </div>

    </>

  );

}

export default ResumoPedido;
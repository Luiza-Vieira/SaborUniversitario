import "../index.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumoPedido() {

  const navigate = useNavigate();

  // =====================================
  // PEGAR PEDIDO
  // =====================================

  const pedidoSalvo =
    localStorage.getItem("pedidoAtual");

  const pedido = pedidoSalvo
    ? JSON.parse(pedidoSalvo)
    : null;

  // =====================================
  // PROTEÇÃO
  // =====================================

  if (!pedido) {

    return (

      <div className="pagina-resumo">

        <h1
          style={{
            textAlign: "center",
            marginTop: "100px"
          }}
        >

          Nenhum pedido encontrado

        </h1>

      </div>

    );

  }

  // =====================================
  // STATE
  // =====================================

  const [itens, setItens] = useState(
    pedido.itens || []
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

            quantidade:
              item.quantidade + 1

          };

        }

        return item;

      }

    );

    setItens(novosItens);

    // atualiza pedidoAtual

    const pedidoAtualizado = {

      ...pedido,

      itens: novosItens

    };

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify(pedidoAtualizado)

    );

    // atualiza carrinho

    localStorage.setItem(

      "carrinho",

      JSON.stringify(novosItens)

    );

  }

  // =====================================
  // DIMINUIR
  // =====================================

  function diminuir(index) {

    let novosItens = itens.map(

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

    // remove itens zerados

    novosItens = novosItens.filter(

      (item) => item.quantidade > 0

    );

    setItens(novosItens);

    // atualiza pedidoAtual

    const pedidoAtualizado = {

      ...pedido,

      itens: novosItens

    };

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify(pedidoAtualizado)

    );

    // atualiza carrinho

    localStorage.setItem(

      "carrinho",

      JSON.stringify(novosItens)

    );

  }

  // =====================================
  // TOTAL
  // =====================================

  const total = itens.reduce(

    (soma, item) => {

      const preco = typeof item.preco === "string"

  ? parseFloat(

      item.preco
        .replace("R$ ", "")
        .replace(",", ".")

    )

  : Number(item.preco);

      return soma +
        (preco * item.quantidade);

    },

    0

  );

  // =====================================
  // CONFIRMAR
  // =====================================

  function confirmarPedido() {

    const pedidoFinal = {

      numero: Math.floor(
        10000 + Math.random() * 90000
      ),

      itens: itens.map((item) => {

        const precoNumerico = parseFloat(

          item.preco
            .replace("R$ ", "")
            .replace(",", ".")

        );

        return {

          ...item,

          preco: precoNumerico

        };

      }),

      total: total

    };

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify(pedidoFinal)

    );

    navigate("/pedidofeito");

  }

  // =====================================
  // JSX
  // =====================================

  return (

    <div className="pagina-resumo">

      {/* HEADER */}

      <header className="header">

        <h1>
          Sabor Universitário
        </h1>

      </header>

      {/* SUBTITULO */}

      <div className="resumo-subtitulo">

        Restaurante universitário

      </div>

      {/* TITULO */}

      <div className="resumo-titulo-box">

        <h2>
          Resumo do pedido
        </h2>

      </div>

      {/* BOX */}

      <div className="resumo-box">

        {

          itens.map((produto, index) => (

            <div
              className="resumo-item"
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

                  {produto.preco}

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

          ))

        }

        {/* OBSERVAÇÃO */}

        <p className="resumo-observacao">

          Observação:

        </p>

        {/* TOTAL */}

        {

          itens.length > 0 && (

            <div className="resumo-total">

              Valor total: R$ {

                total.toFixed(2)

              }

            </div>

          )

        }

      </div>

      {/* FOOTER */}

      <div className="resumo-footer">

        <a href="/">

          Adicionar mais produtos ao carrinho

        </a>

        <div className="resumo-pagamento">

          <select className="resumo-select">

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

            className="resumo-btn"

            onClick={confirmarPedido}

          >

            CONFIRMAR

          </button>

        </div>

      </div>

    </div>

  );

}

export default ResumoPedido;
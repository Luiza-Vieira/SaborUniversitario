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
  // STATES
  // =====================================

  const [itens, setItens] = useState(
    pedido.itens || []
  );

  const [quantidadeCarrinho, setQuantidadeCarrinho] =
    useState(

      pedido.itens.reduce(

        (total, item) => {

          return total + item.quantidade;

        },

        0

      )

    );

  // =====================================
  // ATUALIZAR DADOS
  // =====================================

  function atualizarDados(novosItens) {

    // atualiza itens
    setItens([...novosItens]);

    // atualiza carrinho badge

    const novaQuantidade = novosItens.reduce(

      (total, item) => {

        return total + item.quantidade;

      },

      0

    );

    setQuantidadeCarrinho(novaQuantidade);

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
  // AUMENTAR
  // =====================================

  function aumentar(index) {

    const novosItens = [...itens];

    novosItens[index].quantidade += 1;

    atualizarDados(novosItens);

  }

  // =====================================
  // DIMINUIR
  // =====================================

  function diminuir(index) {

    let novosItens = [...itens];

    novosItens[index].quantidade -= 1;

    novosItens = novosItens.filter(

      (item) => item.quantidade > 0

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

      numero:

        Math.floor(
          1000 + Math.random() * 9000
        ),

      status: "Pedido entregue",

      data:

        new Date().toLocaleDateString(
          "pt-BR"
        ),

      itens: itens.map((item) => {

        const precoNumerico =

          typeof item.preco === "string"

            ? parseFloat(

                item.preco
                  .replace("R$ ", "")
                  .replace(",", ".")

              )

            : Number(item.preco);

        return {

          ...item,

          preco: precoNumerico

        };

      }),

      total: total

    };

    // salva pedido atual

    localStorage.setItem(

      "pedidoAtual",

      JSON.stringify(pedidoFinal)

    );

    // pega pedidos antigos

    const pedidosAntigos =

      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    // adiciona novo pedido

    pedidosAntigos.push(pedidoFinal);

    // salva pedidos

    localStorage.setItem(

      "pedidos",

      JSON.stringify(pedidosAntigos)

    );

    // limpa carrinho

    localStorage.removeItem("carrinho");

    // navega

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

        {/* CARRINHO */}

        <button
          className="carrinho-btn"
        >

          🛒 {quantidadeCarrinho}

        </button>

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

          itens.map((produto, index) => {

            const precoNumerico =

              typeof produto.preco === "string"

                ? parseFloat(

                    produto.preco
                      .replace("R$ ", "")
                      .replace(",", ".")

                  )

                : Number(produto.preco);

            return (

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

                    R$ {

                      (
                        precoNumerico *
                        produto.quantidade
                      )

                        .toFixed(2)
                        .replace(".", ",")

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

        {/* OBSERVAÇÃO */}

        <p className="resumo-observacao">

          Observação:

        </p>

        {/* TOTAL */}

        {

          itens.length > 0 && (

            <div className="resumo-total">

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
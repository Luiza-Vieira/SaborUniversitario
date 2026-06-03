import "../index.css";

function PedidoFeito() {

  // =====================================
  // DADOS DO PEDIDO
  // =====================================

  const pedido = JSON.parse(
    localStorage.getItem("pedidoAtual")
  );

  // =====================================
  // PROTEÇÃO
  // =====================================

  if (!pedido) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >

        Pedido não encontrado

      </h1>

    );

  }

  // =====================================
  // TOTAL ITENS CARRINHO
  // =====================================

  const totalItens = pedido.itens.reduce(

    (soma, item) => {

      return soma + item.quantidade;

    },

    0

  );

  // =====================================
  // JSX
  // =====================================

  return (

    <div className="pagina-pedido-detalhe">

      {/* HEADER */}

      <header className="header">

        {/* PERFIL */}

        <div className="perfil">

          <div className="foto"></div>

          <div>

            <div className="nome">
              Usuário
            </div>

            <div className="fichas">
              Fichas: $ 0
            </div>

          </div>

        </div>

        {/* TITULO */}

        <h1>
          Sabor Universitário
        </h1>

        {/* CARRINHO */}

        <button className="carrinho-btn">

          🛒 {totalItens}

        </button>

      </header>

      {/* TOPO */}

      <div className="pedido-topo">

        <h1>
          Pedido #{pedido.numero}
        </h1>

        <h2>
          Restaurante universitário
        </h2>

      </div>

      {/* STATUS */}

      <div className="pedido-status">

        <span className="texto-status">
          Status do pedido:
        </span>

        <span className="status-verde">
          Pedido feito
        </span>

      </div>

      {/* TABELA */}

      <div className="pedido-box">

        <div className="pedido-header">

          <h3>
            Detalhes do pedido
          </h3>

          <div className="pedido-colunas">

            <span>
              Quantidade
            </span>

            <span>
              Preço unitário
            </span>

          </div>

        </div>

        {

          pedido.itens.map((item, index) => (

            <div
              className="pedido-item"
              key={index}
            >

              {/* ESQUERDA */}

              <div className="pedido-esquerda">

                <div
                  className="pedido-img"
                  style={{
                    backgroundImage:
                      `url(${item.imagem})`
                  }}
                />

                <p>
                  {item.nome}
                </p>

              </div>

              {/* DIREITA */}

              <div className="pedido-direita">

                <span>
                  {item.quantidade}
                </span>

                <span>

                  R$ {

                        Number(item.preco)
                          .toFixed(2)
                          .replace(".", ",")

                      }

                </span>

              </div>

            </div>

          ))

        }

      </div>

      {/* TOTAL */}

      <div className="pedido-total">

        <span>
          Valor Total:
        </span>

        <strong>

          R$ {

                Number(pedido.total)
                  .toFixed(2)
                  .replace(".", ",")

              }

        </strong>

      </div>

    </div>

  );

}

export default PedidoFeito;
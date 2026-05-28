import "../index.css";

import { useNavigate } from "react-router-dom";

function ResumoPedido() {

  const navigate = useNavigate();

  const pedido = JSON.parse(
    localStorage.getItem("pedidoAtual")
  );

  function confirmarPedido() {

    const pedidosSalvos =

      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    pedidosSalvos.push(pedido);

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

    <div className="pagina-resumo">

      <div className="container-resumo">

        {/* TOPO */}

        <div className="topo-resumo">

          <button
            className="seta-voltar"
            onClick={() =>
              navigate("/carrinho")
            }
          >
            ←
          </button>

          <h1>
            RESUMO DO PEDIDO
          </h1>

        </div>

        {/* DETALHES PEDIDO */}

        <div className="card-resumo">

          <h2>
            DETALHES DO PEDIDO
          </h2>

          {

            pedido.itens.map(
              (item, index) => (

                <div
                  className="linha-resumo"
                  key={index}
                >

                  <span>

                    {item.nome}

                  </span>

                  <span>

                    x{item.quantidade}

                  </span>

                </div>

              )
            )

          }

        </div>

        {/* PAGAMENTO */}

        <div className="card-resumo">

          <h2>
            DETALHES DE PAGAMENTO
          </h2>

          <div className="linha-resumo">

            <span>
              Método
            </span>

            <span>
              Cartão
            </span>

          </div>

          <div className="linha-resumo">

            <span>
              Total
            </span>

            <strong>

              R$ {pedido.total}

            </strong>

          </div>

        </div>

        {/* BOTÃO */}

        <button
          className="btn-confirmar-pedido"
          onClick={confirmarPedido}
        >

          CONFIRMAR PEDIDO

        </button>

      </div>

    </div>

  );

}

export default ResumoPedido;
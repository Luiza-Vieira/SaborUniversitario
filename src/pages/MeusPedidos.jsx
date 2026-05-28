import "../index.css";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function MeusPedidos() {

  // =====================================
  // NAVEGAÇÃO
  // =====================================

  const navigate = useNavigate();

  // =====================================
  // STATE DOS PEDIDOS
  // =====================================

  const [pedidos, setPedidos] =
    useState([]);

  // =====================================
  // CARREGAR PEDIDOS
  // =====================================

  useEffect(() => {

    const pedidosSalvos =

      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    // mais recentes primeiro

    setPedidos(

      pedidosSalvos.reverse()

    );

  }, []);

  // =====================================
  // JSX
  // =====================================

  return (

    <div className="pagina-pedidos">

      {/* HEADER */}

      <div className="topo-pedidos">

        <button

          className="btn-voltar-pedidos"

          onClick={() => navigate("/")}

        >

          ←

        </button>

        <h1>

          MEUS PEDIDOS

        </h1>

      </div>

      {/* LISTA */}

      <div className="lista-pedidos">

        {

          pedidos.length > 0 ? (

            pedidos.map(

              (pedido, index) => (

                <div

                  className="card-pedido"

                  key={index}

                >

                  {/* ESQUERDA */}

                  <div>

                    <h2>

                      Pedido #

                      {pedido.numero}

                    </h2>

                    <p>

                      {pedido.data}

                    </p>

                  </div>

                  {/* CENTRO */}

                  <div>

                    <span className="status-pedido-card">

                      {pedido.status}

                    </span>

                  </div>

                  {/* DIREITA */}

                  <div className="valor-pedido-card">

                    <strong>

                      R$ {pedido.total}

                    </strong>

                  </div>

                </div>

              )

            )

          ) : (

            <div className="sem-pedidos">

              Nenhum pedido encontrado.

            </div>

          )

        }

      </div>

    </div>

  );

}

export default MeusPedidos;
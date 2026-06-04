import "../index.css";

import {
  useEffect,
  useState
} from "react";

import { useNavigate } from "react-router-dom";

function MeusPedidos() {

  // =====================================
  // NAVEGAÇÃO
  // =====================================

  const navigate = useNavigate();

  // =====================================
  // STATE
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

    // MAIS RECENTES PRIMEIRO

    setPedidos(

      pedidosSalvos.reverse()

    );

  }, []);

  // =====================================
  // JSX
  // =====================================

  return (

    <div className="pagina-meus-pedidos">

      {/* HEADER */}

      <header className="header">

        {/* PERFIL */}

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

        {/* TITULO */}

        <h1>

          Sabor Universitário

        </h1>

        {/* CARRINHO */}

        <button
          className="carrinho-btn"
          onClick={() =>
            navigate("/carrinho")
          }
        >

          🛒

        </button>

      </header>

      {/* TITULO */}

      <h2 className="titulo-meus-pedidos">

        MEUS PEDIDOS

      </h2>

      {/* CABEÇALHO */}

      {

        pedidos.length > 0 && (

          <div className="cabecalho-pedidos">

            <span>

              Status do Pedido:

            </span>

            <span>

              Valor Total:

            </span>

          </div>

        )

      }

      {/* LISTA */}

      <div className="lista-meus-pedidos">

        {

          pedidos.length > 0 ? (

            pedidos.map(

              (pedido, index) => (

                 <div
                    className="linha-pedido"
                    key={index}

                    onClick={() => {

                      localStorage.setItem(

                        "pedidoSelecionado",

                        JSON.stringify(pedido)

                      );

                      navigate("/feedback");

                    }}
                  >

                  {/* NUMERO */}

                  <div className="pedido-numero">

                    Pedido #

                    {pedido.numero}

                  </div>

                  {/* STATUS */}

                  <div className="pedido-status-texto">

                    Pedido entregue

                  </div>

                  {/* TOTAL */}

                  <div className="pedido-valor">

                    R$

                    {

                      Number(
                        pedido.total
                      )

                      .toFixed(2)

                      .replace(".", ",")

                    }

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
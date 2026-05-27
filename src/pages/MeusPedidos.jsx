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
  // STATE DO CARRINHO
  // =====================================

  const [carrinho, setCarrinho] =
    useState([]);

  // =====================================
  // CARREGAR PEDIDOS
  // =====================================

  useEffect(() => {

    const pedidosSalvos =

      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    setPedidos(
      pedidosSalvos.reverse()
    );

    const carrinhoSalvo =

      JSON.parse(
        localStorage.getItem("carrinho")
      ) || [];

    setCarrinho(carrinhoSalvo);

  }, []);

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

        {/* CARRINHO */}

        <button
          className="carrinho-btn"
          onClick={() =>
            navigate("/carrinho")
          }
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

        MEUS PEDIDOS

      </h2>

      {/* BOX */}

      <div className="box-meus-pedidos">

        {/* CABEÇALHO */}

        <div className="cabecalho-meus-pedidos">

          <span></span>

          <span>
            Status do Pedido:
          </span>

          <span>
            Valor Total:
          </span>

        </div>

        {/* LISTA */}

        {

          pedidos.length > 0 ? (

            pedidos.map(

              (pedido, index) => (

                <div
                  className="pedido-item"
                  key={index}
                >

                  <div className="numero-pedido">

                    Pedido #
                    {pedido.numero}

                  </div>

                  <div className="status-pedido">

                    {pedido.status}

                  </div>

                  <div className="valor-pedido">

                    R$ {

                      pedido.total
                        .replace(".", ",")

                    }

                  </div>

                </div>

              )

            )

          ) : (

            <p>

              Nenhum pedido encontrado.

            </p>

          )

        }

      </div>

    </>

  );

}

export default MeusPedidos;
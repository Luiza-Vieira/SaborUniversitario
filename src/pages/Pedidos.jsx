import "../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

function Pedidos() {

  // =========================================
  // NAVEGAÇÃO
  // =========================================

  const navigate = useNavigate();

  // =========================================
  // SIDEBAR
  // =========================================

  const [sidebarAberta, setSidebarAberta] =
    useState(false);

  const sidebarRef = useRef(null);

  // =========================================
  // PEDIDOS
  // =========================================

  const [pedidos, setPedidos] =
    useState([]);

  // =========================================
  // CARRINHO
  // =========================================

  const [carrinho] = useState(() => {

    const carrinhoSalvo =
      localStorage.getItem("carrinho");

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : [];

  });

  // =========================================
  // CARREGAR PEDIDOS
  // =========================================

  useEffect(() => {

    const pedidosSalvos =

      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    setPedidos(

      [...pedidosSalvos].reverse()

    );

  }, []);

  // =========================================
  // FECHAR SIDEBAR
  // =========================================

  useEffect(() => {

    function fecharSidebar(event) {

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(
          event.target
        )
      ) {

        setSidebarAberta(false);

      }

    }

    document.addEventListener(
      "mousedown",
      fecharSidebar
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        fecharSidebar
      );

    };

  }, []);

  // =========================================
  // JSX
  // =========================================

  return (

    <>

      {/* SIDEBAR */}

      <div

        ref={sidebarRef}

        className={
          sidebarAberta
            ? "sidebar ativo"
            : "sidebar"
        }

      >

        <div className="sidebar-header">

          <div className="foto"></div>

          <p className="nome">

            Usuário

          </p>

          <p className="fichas">

            Fichas: $ 0

          </p>

        </div>

        <ul>

          <li onClick={() => navigate("/")}>

            Início

          </li>

          <li>

            Minha Conta

          </li>

          <li>

            Meus Pedidos

          </li>

        </ul>

      </div>

      {/* HEADER */}

      <header className="header">

        <div

          className="perfil"

          onClick={() =>

            setSidebarAberta(
              !sidebarAberta
            )

          }

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

            pedidos.map((pedido, index) => (

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

            ))

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

export default Pedidos;
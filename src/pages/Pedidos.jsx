import "../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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

      <Sidebar
        sidebarAberta={sidebarAberta}
        sidebarRef={sidebarRef}
        navigate={navigate}
        setSidebarAberta={setSidebarAberta}
      />

      {/* HEADER */}

      <Header
        sidebarAberta={sidebarAberta}
        setSidebarAberta={setSidebarAberta}
        carrinho={carrinho}
        navigate={navigate}
      />

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

                    Number(pedido.total)
                      .toFixed(2)
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
import "../../index.css";

import {
  useEffect,
  useState,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

function MeusPedidos() {

  // =====================================
  // NAVEGAÇÃO
  // =====================================

  const navigate = useNavigate();

  // =====================================
  // SIDEBAR
  // =====================================

  const [sidebarAberta, setSidebarAberta] =
    useState(false);

  const sidebarRef = useRef(null);

  // =====================================
  // FECHAR SIDEBAR
  // =====================================

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

  // =====================================
  // PEDIDOS
  // =====================================

  const [pedidos, setPedidos] =
    useState([]);

  // =====================================
  // CARRINHO
  // =====================================

  const [carrinho] =
    useState(() => {

      const carrinhoSalvo =
        localStorage.getItem("carrinho");

      return carrinhoSalvo
        ? JSON.parse(carrinhoSalvo)
        : [];

    });

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

  }, []);

  // =====================================
  // JSX
  // =====================================

  return (

    <div className="pagina-meus-pedidos">

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
      <h2 className="titulo-meus-pedidos">
        MEUS PEDIDOS
      </h2>

      {/* CABEÇALHO */}
      {pedidos.length > 0 && (

        <div className="cabecalho-pedidos">

          <span>
            Status do Pedido:
          </span>

          <span>
            Valor Total:
          </span>

        </div>

      )}

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

                  {/* NÚMERO */}
                  <div className="pedido-numero">

                    Pedido #

                    {pedido.numero}

                  </div>

                  {/* STATUS */}
                  <div className="pedido-status-texto">

                    {pedido.status}

                  </div>

                  {/* VALOR */}
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
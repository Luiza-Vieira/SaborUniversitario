import "../styles/pedidofeito.css";

import {
  useState,
  useRef,
  useEffect
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function PedidoFeito() {

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
  // FECHAR SIDEBAR AO CLICAR FORA
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
  // PEDIDO
  // =====================================

  const pedido = JSON.parse(
    localStorage.getItem("pedidoAtual")
  );

  // =====================================
  // CARRINHO
  // =====================================

  const [carrinho] = useState(() => {

    const carrinhoSalvo =
      localStorage.getItem("carrinho");

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : [];

  });

  // =====================================
  // VALIDAÇÃO
  // =====================================

  if (!pedido) {

    return <h1>Pedido não encontrado</h1>;

  }

  // =====================================
  // FUNÇÃO PARA CONVERTER PREÇO
  // =====================================

  function converterPreco(preco) {

    if (typeof preco === "string") {

      return parseFloat(

        preco
          .replace("R$", "")
          .replace(",", ".")
          .trim()

      );

    }

    return Number(preco);

  }

  // =====================================
  // JSX
  // =====================================

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

      <div className="pagina-pedido-detalhe">

        {/* TOPO */}

        <div className="pedido-topo">

          <h1>

            Pedido #

            {pedido.numero}

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

          {pedido.itens.map((item, index) => (

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

                  R$

                  {converterPreco(item.preco)
                    .toFixed(2)
                    .replace(".", ",")}

                </span>

              </div>

            </div>

          ))}

        </div>

        {/* TOTAL */}

        <div className="pedido-total">

          <span>

            Valor Total:

          </span>

          <strong>

            R$

            {Number(pedido.total)
              .toFixed(2)
              .replace(".", ",")}

          </strong>

        </div>

      </div>

    </>

  );

}

export default PedidoFeito;
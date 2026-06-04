import "../index.css";

import {
  useState,
  useRef,
  useEffect
} from "react";

import { useNavigate } from "react-router-dom";

function Feedback() {

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
  // FEEDBACK
  // =====================================

  const [feedback, setFeedback] =
    useState("");

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
  // PEDIDO
  // =====================================

  const pedido = JSON.parse(

    localStorage.getItem(
      "pedidoSelecionado"
    )

  );

  // =====================================
  // CARRINHO
  // =====================================

  const carrinho = JSON.parse(

    localStorage.getItem(
      "carrinho"
    )

  ) || [];

  // =====================================
  // VALIDAÇÃO
  // =====================================

  if (!pedido) {

    return <h1>Pedido não encontrado</h1>;

  }

  // =====================================
  // ENVIAR FEEDBACK
  // =====================================

  function enviarFeedback() {

    alert(
      "Feedback enviado com sucesso!"
    );

    setFeedback("");

  }

  // =====================================
  // JSX
  // =====================================

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

          <li
            onClick={() => navigate("/")}
          >

            Início

          </li>

          <li>

            Minha Conta

          </li>

          <li
            onClick={() =>
              navigate("/meuspedidos")
            }
          >

            Meus Pedidos

          </li>

        </ul>

      </div>

      {/* PÁGINA */}

      <div className="pagina-feedback">

        {/* HEADER */}

        <header className="header">

          {/* PERFIL */}

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

        {/* TOPO */}

        <div className="pedido-topo">

          <h2>

            Restaurante universitário

          </h2>

          <h1>

            Pedido #

            {pedido.numero}

          </h1>

        </div>

        {/* STATUS */}

        <div className="pedido-status">

          <span className="texto-status">

            Status do pedido:

          </span>

          <span className="status-verde">

            Pedido entregue

          </span>

        </div>

        {/* BOX */}

        <div className="pedido-box">

          {/* HEADER */}

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

          {/* ITENS */}

          {

            pedido.itens.map(

              (item, index) => (

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

                      R${

                        item.preco
                          .toFixed(2)
                          .replace(".", ",")

                      }

                    </span>

                  </div>

                </div>

              )

            )

          }

        </div>

        {/* TOTAL */}

        <div className="pedido-total">

          <span>

            Valor Total:

          </span>

          <strong>

            R$

            {

              pedido.total
                .toFixed(2)
                .replace(".", ",")

            }

          </strong>

        </div>

        {/* FEEDBACK */}

       <div className="feedback-container">

  <h2 className="feedback-titulo">

    Deseja avaliar a sua compra?

  </h2>

  <div className="feedback-box">

    <textarea

      className="feedback-textarea"

      value={feedback}

      onChange={(e) =>

        setFeedback(
          e.target.value
        )

      }

      placeholder="Digite aqui sua avaliação..."

    />

  </div>

  <button

    className="btn-feedback"

    onClick={enviarFeedback}

  >

    Enviar avaliação

  </button>

</div>

      </div>

    </>

  );

}

export default Feedback;
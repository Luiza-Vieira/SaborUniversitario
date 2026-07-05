import "../index.css";

import {
  useState,
  useRef,
  useEffect
} from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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
    return (
      <h1>
        Pedido não encontrado
      </h1>
    );
  }

  // =====================================
  // CONVERTER PREÇO
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
  // ENVIAR FEEDBACK
  // =====================================

  function enviarFeedback() {

    if (feedback.trim() === "") {

      alert(
        "Digite uma avaliação antes de enviar."
      );

      return;

    }

    const feedbacks =

      JSON.parse(
        localStorage.getItem(
          "feedbacks"
        )
      ) || [];

    const novoFeedback = {

      pedido: pedido.numero,

      comentario: feedback,

      data:
        new Date().toLocaleDateString(
          "pt-BR"
        )

    };

    feedbacks.push(
      novoFeedback
    );

    localStorage.setItem(
      "feedbacks",
      JSON.stringify(
        feedbacks
      )
    );

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

      {/* PÁGINA */}

      <div className="pagina-feedback">

        {/* TOPO */}

        <div className="pedido-topo">

          <h2>
            Restaurante universitário
          </h2>

          <h1>
            Pedido #{pedido.numero}
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
                      R$

                      {
                        converterPreco(
                          item.preco
                        )
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
              Number(pedido.total)
                .toFixed(2)
                .replace(".", ",")
            }

          </strong>

        </div>

        {/* FEEDBACK */}

        <div className="feedback-container">

          <div className="feedback-titulo">
            Deseja avaliar a sua compra?
          </div>

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
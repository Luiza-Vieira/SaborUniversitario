import "../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

function Cartao() {

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
  // STATES DOS INPUTS
  // =====================================

  const [nome, setNome] =
    useState("");

  const [numero, setNumero] =
    useState("");

  const [validade, setValidade] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  // =====================================
  // MÁSCARA NÚMERO CARTÃO
  // =====================================

  function formatarNumero(valor) {

    valor =
      valor.replace(/\D/g, "");

    valor =
      valor.replace(/(.{4})/g, "$1 ");

    return valor.trim();

  }

  // =====================================
  // MÁSCARA VALIDADE
  // =====================================

  function formatarValidade(valor) {

    valor =
      valor.replace(/\D/g, "");

    if (valor.length > 2) {

      valor =
        valor.substring(0, 2)
        +
        "/"
        +
        valor.substring(2, 4);

    }

    return valor;

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

          <li onClick={() => navigate("/")}>
            Início
          </li>

          <li>
            Minha conta
          </li>

          <li>
            Meus pedidos
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

      {/* CONTAINER */}

      <div className="container-cartao">

        {/* TOPO */}

        <div className="topo-cartao">

          <button

            className="btn-voltar"

            onClick={() =>
              navigate("/carrinho")
            }

          >

            ←

          </button>

          <span className="texto-voltar">

            Voltar

          </span>

        </div>

        {/* FORMULÁRIO */}

        <div className="form-cartao">

          {/* NOME */}

          <div className="campo-cartao">

            <label>

              Nome do titular

            </label>

            <input

              type="text"

              placeholder="Digite o nome"

              value={nome}

              onChange={(e) =>
                setNome(e.target.value)
              }

            />

            <span className="obrigatorio">

              *campo obrigatório

            </span>

          </div>

          {/* NÚMERO */}

          <div className="campo-cartao">

            <label>

              Número do cartão

            </label>

            <input

              type="text"

              placeholder="0000 0000 0000 0000"

              maxLength={19}

              value={numero}

              onChange={(e) =>

                setNumero(

                  formatarNumero(
                    e.target.value
                  )

                )

              }

            />

            <span className="obrigatorio">

              *campo obrigatório

            </span>

          </div>

          {/* LINHA */}

          <div className="linha-cartao">

            {/* VALIDADE */}

            <div className="campo-cartao pequeno">

              <label>

                Data de validade

              </label>

              <input

                type="text"

                placeholder="MM/AA"

                maxLength={5}

                value={validade}

                onChange={(e) =>

                  setValidade(

                    formatarValidade(
                      e.target.value
                    )

                  )

                }

              />

              <span className="obrigatorio">

                *campo obrigatório

              </span>

            </div>

            {/* CVV */}

            <div className="campo-cartao pequeno">

              <label>

                CVV

              </label>

              <input

                type="password"

                placeholder="123"

                maxLength={3}

                value={cvv}

                onChange={(e) =>

                  setCvv(

                    e.target.value
                      .replace(/\D/g, "")
                      .substring(0, 3)

                  )

                }

              />

              <span className="obrigatorio">

                *campo obrigatório

              </span>

            </div>

          </div>

          {/* BOTÃO */}

          <button className="btn-adicionar-cartao">

            Adicionar novo cartão

          </button>

        </div>

      </div>

    </>

  );

}

export default Cartao;
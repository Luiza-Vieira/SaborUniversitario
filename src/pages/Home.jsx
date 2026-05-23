import "../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import { produtos } from "../data/produtos";

function Home() {

  // =========================================
  // NAVEGAÇÃO ENTRE PÁGINAS
  // =========================================

  const navigate = useNavigate();

  // =========================================
  // STATE DA SIDEBAR
  // controla se está aberta ou fechada
  // =========================================

  const [sidebarAberta, setSidebarAberta] =
    useState(false);

  // =========================================
  // REFERÊNCIA DA SIDEBAR
  // useRef permite acessar HTML diretamente
  // =========================================

  const sidebarRef = useRef(null);

  // =========================================
  // STATE DAS QUANTIDADES
  // guarda quantidade de cada produto
  // =========================================

  const [quantidades, setQuantidades] =
    useState({});

  // =========================================
  // STATE DO CARRINHO
  // começa lendo localStorage
  // =========================================

  const [carrinho, setCarrinho] =
    useState(() => {

      const carrinhoSalvo =
        localStorage.getItem("carrinho");

      return carrinhoSalvo
        ? JSON.parse(carrinhoSalvo)
        : [];

    });

  // =========================================
  // FECHAR SIDEBAR AO CLICAR FORA
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

    // limpeza automática

    return () => {

      document.removeEventListener(
        "mousedown",
        fecharSidebar
      );

    };

  }, []);

  // =========================================
  // AUMENTAR QUANTIDADE
  // =========================================

  function aumentar(nomeProduto) {

    setQuantidades((prev) => ({

      ...prev,

      [nomeProduto]:
        (prev[nomeProduto] || 1) + 1

    }));

  }

  // =========================================
  // DIMINUIR QUANTIDADE
  // =========================================

  function diminuir(nomeProduto) {

    setQuantidades((prev) => ({

      ...prev,

      [nomeProduto]:

        prev[nomeProduto] > 1
          ? prev[nomeProduto] - 1
          : 1

    }));

  }

  // =========================================
  // ADICIONAR AO CARRINHO
  // =========================================

  function adicionarCarrinho(produto) {

    // pega quantidade atual

    const quantidadeAtual =

      quantidades[produto.nome] || 1;

    // cria produto completo

    const novoProduto = {

      ...produto,

      quantidade: quantidadeAtual

    };

    // cria novo array

    const novoCarrinho = [

      ...carrinho,

      novoProduto

    ];

    // atualiza state

    setCarrinho(novoCarrinho);

    // salva localStorage

    localStorage.setItem(

      "carrinho",

      JSON.stringify(novoCarrinho)

    );

    alert("Produto adicionado!");

  }

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

          <li>Início</li>

          <li>Minha Conta</li>

          <li>Meus Pedidos</li>

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

        {/* BOTÃO CARRINHO */}

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

        Restaurante Universitário

      </h2>

      {/* ========================= */}
      {/* BEBIDAS */}
      {/* ========================= */}

      <section>

        <h3 className="categoria">

          • Bebidas

        </h3>

        <div className="grid">

          {

            produtos.bebidas.map(

              (produto, index) => (

                <div

                  className="card"

                  key={index}

                >

                <div

                  className="img-produto"

                  style={{

                    backgroundImage:
                      `url(${produto.imagem})`

                  }}

                  onClick={() =>

                    navigate(

                      `/detalhe/bebidas/${index}`

                    )

                  }

                ></div>

                  <h4>

                    {produto.nome}

                  </h4>

                  <p>

                    {produto.preco}

                  </p>

                  {/* CONTROLE */}

                  <div className="controle">

                    <button

                      onClick={() =>

                        diminuir(

                          produto.nome

                        )

                      }

                    >

                      -

                    </button>

                    <span>

                      {

                        quantidades[
                          produto.nome
                        ] || 1

                      }

                    </span>

                    <button

                      onClick={() =>

                        aumentar(

                          produto.nome

                        )

                      }

                    >

                      +

                    </button>

                  </div>

                  {/* BOTÃO */}

                  <button

                    className="btn"

                    onClick={() =>

                      adicionarCarrinho(

                        produto

                      )

                    }

                  >

                    Adicionar

                  </button>

                </div>

              )

            )

          }

        </div>

      </section>

      {/* ========================= */}
      {/* SALGADOS */}
      {/* ========================= */}

      <section>

        <h3 className="categoria">

          • Salgados

        </h3>

        <div className="grid">

          {

            produtos.salgados.map(

              (produto, index) => (

                <div

                  className="card"

                  key={index}

                >

                  <div

                    className="img-produto"

                    style={{

                      backgroundImage:
                        `url(${produto.imagem})`

                    }}

                    onClick={() =>

                      navigate(

                        `/detalhe/salgados/${index}`

                      )

                    }

                  ></div>

                  <h4>

                    {produto.nome}

                  </h4>

                  <p>

                    {produto.preco}

                  </p>

                  {/* CONTROLE */}

                  <div className="controle">

                    <button

                      onClick={() =>

                        diminuir(

                          produto.nome

                        )

                      }

                    >

                      -

                    </button>

                    <span>

                      {

                        quantidades[
                          produto.nome
                        ] || 1

                      }

                    </span>

                    <button

                      onClick={() =>

                        aumentar(

                          produto.nome

                        )

                      }

                    >

                      +

                    </button>

                  </div>

                  {/* BOTÃO */}

                  <button

                    className="btn"

                    onClick={() =>

                      adicionarCarrinho(

                        produto

                      )

                    }

                  >

                    Adicionar

                  </button>

                </div>

              )

            )

          }

        </div>

      </section>

    </>

  );

}

export default Home;
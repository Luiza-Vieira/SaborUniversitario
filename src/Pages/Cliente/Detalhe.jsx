import "../../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import { produtos } from "../../data/produtos";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Detalhe() {

  // =====================================
  // NAVEGAÇÃO
  // =====================================

  const navigate = useNavigate();

  // =====================================
  // PEGAR PARÂMETROS DA URL
  // =====================================

  const { categoria, id } = useParams();

  // =====================================
  // BUSCAR PRODUTO
  // =====================================

  const produto =
    produtos[categoria][id];

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

  const [carrinho, setCarrinho] =
    useState(() => {

      const carrinhoSalvo =
        localStorage.getItem("carrinho");

      return carrinhoSalvo
        ? JSON.parse(carrinhoSalvo)
        : [];

    });

  // =====================================
  // SINCRONIZAR LOCALSTORAGE
  // =====================================

  useEffect(() => {

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

  }, [carrinho]);

  // =====================================
  // ADICIONAR AO CARRINHO
  // =====================================

  function adicionarCarrinho() {

    setCarrinho((carrinhoAtual) => {

      const produtoExiste =
        carrinhoAtual.find(

          (item) =>
            item.nome === produto.nome

        );

      // se já existe
      if (produtoExiste) {

        return carrinhoAtual.map(
          (item) => {

            if (
              item.nome === produto.nome
            ) {

              return {

                ...item,

                quantidade:
                  item.quantidade + 1

              };

            }

            return item;

          }
        );

      }

      // se não existe
      return [

        ...carrinhoAtual,

        {
          ...produto,
          quantidade: 1
        }

      ];

    });

    alert("Produto adicionado!");

  }

  // =====================================
  // JSX
  // =====================================

  return (

    <>

      {/* SIDEBAR COMPONENTE */}

      <Sidebar
        sidebarAberta={sidebarAberta}
        sidebarRef={sidebarRef}
        navigate={navigate}
        setSidebarAberta={setSidebarAberta}
      />

      {/* HEADER COMPONENTE */}

      <Header
        sidebarAberta={sidebarAberta}
        setSidebarAberta={setSidebarAberta}
        carrinho={carrinho}
        navigate={navigate}
      />

      {/* TÍTULO */}

      <h2 className="titulo">

        Restaurante universitário

      </h2>

      {/* BOX DETALHE */}

      <div className="detalhe-box">

        {/* IMAGEM */}

        <div

          className="imagem-produto"

          style={{

            backgroundImage:
              `url(${produto.imagem})`

          }}

        ></div>

        {/* INFO */}

        <div className="detalhe-info">

          <h2>

            {produto.nome}

          </h2>

          <h3 className="preco-detalhe">

            {produto.preco}

          </h3>

          {/* BOTÕES */}

          <div className="botoes">

            <button

              className="btn"

              onClick={
                adicionarCarrinho
              }

            >

              Adicionar ao carrinho

            </button>

            <button className="btn-comprar">

              Comprar

            </button>

          </div>

          {/* DESCRIÇÃO */}

          <h4>

            Detalhes do produto

          </h4>

          <p className="descricao-produto">

            Produto preparado com
            ingredientes frescos.
            Validade e informações
            completas serão
            integradas futuramente
            no backend.

          </p>

          {/* OBSERVAÇÃO */}

          <h4>

            Alguma observação?

          </h4>

          <input

            className="input-observacao"

            type="text"

            placeholder="Digite aqui..."

          />

          <br />
          <br />

          {/* VOLTAR */}

          <button

            className="btn"

            onClick={() =>
              navigate("/")
            }

          >

            Voltar

          </button>

        </div>

      </div>

    </>

  );

}

export default Detalhe;
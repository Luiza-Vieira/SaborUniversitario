import "../../index.css";

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import { produtos } from "../../data/produtos.js";

import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

function Home() {

  // =========================================
  // NAVEGAÇÃO ENTRE PÁGINAS
  // =========================================

  const navigate = useNavigate();

  // =========================================
  // STATE DA SIDEBAR
  // =========================================

  const [sidebarAberta, setSidebarAberta] =
    useState(false);

  // =========================================
  // REFERÊNCIA DA SIDEBAR
  // =========================================

  const sidebarRef = useRef(null);

  // =========================================
  // STATE DAS QUANTIDADES
  // =========================================

  const [quantidades, setQuantidades] =
    useState({});

  // =========================================
  // STATE DO CARRINHO
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

    const quantidadeAtual =

      quantidades[produto.nome] || 1;

    const novoProduto = {

      ...produto,

      quantidade: quantidadeAtual

    };

    const novoCarrinho = [

      ...carrinho,

      novoProduto

    ];

    setCarrinho(novoCarrinho);

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

        Restaurante Universitário

      </h2>

      {/* BEBIDAS */}
      <section>

        <h3 className="categoria">

          • Bebidas

        </h3>

        <div className="grid">

          {

            produtos.bebidas.map(

              (produto, index) => (

                <ProductCard
                  key={index}
                  produto={produto}
                  index={index}
                  categoria="bebidas"
                  quantidades={quantidades}
                  aumentar={aumentar}
                  diminuir={diminuir}
                  adicionarCarrinho={adicionarCarrinho}
                  navigate={navigate}
                />

              )

            )

          }

        </div>

      </section>

      {/* SALGADOS */}
      <section>

        <h3 className="categoria">

          • Salgados

        </h3>

        <div className="grid">

          {

            produtos.salgados.map(

              (produto, index) => (

                <ProductCard
                  key={index}
                  produto={produto}
                  index={index}
                  categoria="salgados"
                  quantidades={quantidades}
                  aumentar={aumentar}
                  diminuir={diminuir}
                  adicionarCarrinho={adicionarCarrinho}
                  navigate={navigate}
                />

              )

            )

          }

        </div>

      </section>

    </>

  );

}

export default Home;
import "../../index.css";
import { FiHeart } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { produtos } from "../../data/produtos";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Detalhe() {

    const navigate = useNavigate();

    const { categoria, id } = useParams();

    const produto = produtos?.[categoria]?.[id];

    if (!produto) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                Produto não encontrado.
            </h2>
        );
    }

    // ==========================
    // SIDEBAR
    // ==========================

    const [sidebarAberta, setSidebarAberta] = useState(false);

    const sidebarRef = useRef(null);

    useEffect(() => {

        function fecharSidebar(event) {

            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSidebarAberta(false);
            }

        }

        document.addEventListener("mousedown", fecharSidebar);

        return () => {

            document.removeEventListener(
                "mousedown",
                fecharSidebar
            );

        };

    }, []);

    // ==========================
    // CARRINHO
    // ==========================

    const [carrinho, setCarrinho] = useState(() => {

        const salvo = localStorage.getItem("carrinho");

        return salvo ? JSON.parse(salvo) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

    }, [carrinho]);

    function adicionarCarrinho() {

        const existe = carrinho.find(
            item => item.nome === produto.nome
        );

        if (existe) {

            const novoCarrinho = carrinho.map(item => {

                if (item.nome === produto.nome) {

                    return {

                        ...item,
                        quantidade: item.quantidade + 1

                    };

                }

                return item;

            });

            setCarrinho(novoCarrinho);

        }

        else {

            setCarrinho([

                ...carrinho,

                {
                    ...produto,
                    quantidade: 1
                }

            ]);

        }

        alert("Produto adicionado ao carrinho!");

    }

    return (

        <>

            <Sidebar

                sidebarAberta={sidebarAberta}
                sidebarRef={sidebarRef}
                navigate={navigate}
                setSidebarAberta={setSidebarAberta}

            />

            <Header

                sidebarAberta={sidebarAberta}
                setSidebarAberta={setSidebarAberta}
                carrinho={carrinho}
                navigate={navigate}

            />

            <h2 className="titulo">

                Restaurante Universitário

            </h2>

            <div className="detalhe-box">

                {/* FOTO */}

                <div className="detalhe-imagem">

                    <img
                        src={produto.imagem}
                        alt={produto.nome}
                    />

                </div>

                {/* INFORMAÇÕES */}

                <div className="detalhe-info">

                    <div className="topo-detalhe">

                        <h1>

                            {produto.nome}

                        </h1>

                        <button
                              className="btn-favorito"
                              title="Favoritar"
                          >

                              <FiHeart />

                        </button>

                    </div>

                    <h2 className="preco-detalhe">

                        {produto.preco}

                    </h2>

                    <div className="botoes-detalhe">

                        <button

                            className="btn-detalhe"

                            onClick={adicionarCarrinho}

                        >

                            Adicionar ao carrinho

                        </button>

                        <button

                            className="btn-comprar"

                        >

                            Comprar

                        </button>

                    </div>

                    <h3 className="titulo-detalhe">

                        Detalhes do produto

                    </h3>

                    <p className="descricao-produto">

                        {produto.descricao}

                    </p>

                    <h3 className="titulo-observacao">

                        Alguma Observação?

                    </h3>

                    <textarea

                        className="input-observacao"

                        placeholder="Digite aqui..."

                    />

                </div>

            </div>

        </>

    );

}

export default Detalhe;
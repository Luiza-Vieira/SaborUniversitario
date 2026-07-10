import "../../index.css";
import "../../styles/MeuPerfil.css";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

import { buscarClientePorUsuario } from "../../services/clienteService";
import { buscarCartoes } from "../../services/cartaoService";

function MeuPerfil() {

    const navigate = useNavigate();

    // ============================
    // Sidebar
    // ============================

    const [sidebarAberta, setSidebarAberta] = useState(false);

    const sidebarRef = useRef(null);

    // ============================
    // Carrinho
    // ============================

    const [carrinho] = useState(() => {

        const salvo = localStorage.getItem("carrinho");

        return salvo ? JSON.parse(salvo) : [];

    });

    // ============================
    // Usuário
    // ============================

    const usuario = JSON.parse(
        localStorage.getItem("usuarioLogado")
    );

    const [cliente, setCliente] = useState(null);

    const [cartoes, setCartoes] = useState([]);

    // ============================
    // Carregar dados
    // ============================

    useEffect(() => {

        async function carregarDados() {

            const idUsuario = usuario?.id || 1;

            const dadosCliente =
                await buscarClientePorUsuario(idUsuario);

            setCliente(dadosCliente);

            if (dadosCliente) {

                const listaCartoes =
                    await buscarCartoes(dadosCliente.id);

                setCartoes(listaCartoes);

            }

        }

        carregarDados();

    }, []);

    // ============================
    // JSX
    // ============================

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

            <div className="perfil-container">

                <div className="perfil-conteudo">

                    {/* FOTO */}

                    <div className="perfil-esquerda">

                        <div className="foto-perfil"></div>

                    </div>

                    {/* DADOS */}

                    <div className="perfil-direita">

                        <div className="titulo-faixa">

                            <h1>

                                Meu perfil

                            </h1>

                        </div>

                        <div className="dados-cliente">

                            <div className="linha-dado">

                                <span className="titulo-dado">

                                    Nome completo

                                </span>

                                <span className="valor-dado">

                                    {cliente?.nome}

                                </span>

                            </div>

                            <div className="linha-dado">

                                <span className="titulo-dado">

                                    Email

                                </span>

                                <span className="valor-dado">

                                    {cliente?.email}

                                </span>

                            </div>

                        </div>

                        <h2 className="titulo-cartoes">

                            Meus cartões

                        </h2>

                        <div className="lista-cartoes">

                            {

                                cartoes.length > 0 ?

                                    cartoes.map((cartao) => (

                                        <div
                                            key={cartao.id}
                                            className="cartao-item"
                                        >

                                            <div className="cartao-info">

                                                <div className="bandeira">

                                                    {cartao.bandeira.toUpperCase()}

                                                </div>

                                                <div className="numero-cartao">

                                                    **** **** **** {cartao.ultimos_4_digitos}

                                                </div>

                                            </div>

                                            <button
                                                className="btn-excluir"
                                            >

                                                Excluir cartão

                                            </button>

                                        </div>

                                    ))

                                    :

                                    <p>

                                        Nenhum cartão cadastrado.

                                    </p>

                            }

                        </div>

                        <button

                            className="btn-adicionar"

                            onClick={() =>
                                navigate("/adicionar-cartao")
                            }

                        >

                            Adicionar novo cartão

                        </button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default MeuPerfil;
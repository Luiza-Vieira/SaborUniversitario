import "../../index.css";
import "../../styles/AdicionarCartao.css";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { cadastrarCartao } from "../../services/cartaoService";
import { buscarClientePorUsuario } from "../../services/clienteService";

function AdicionarCartao() {

    const navigate = useNavigate();

    //-------------------------
    // Sidebar
    //-------------------------

    const [sidebarAberta, setSidebarAberta] = useState(false);

    const sidebarRef = useRef(null);

    useEffect(() => {

        function fecharSidebar(e){

            if(
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target)
            ){

                setSidebarAberta(false);

            }

        }

        document.addEventListener(
            "mousedown",
            fecharSidebar
        );

        return ()=>{

            document.removeEventListener(
                "mousedown",
                fecharSidebar
            );

        }

    }, []);

    //-------------------------
    // Carrinho
    //-------------------------

    const [carrinho] = useState(() => {

        const salvo =
            localStorage.getItem("carrinho");

        return salvo
            ? JSON.parse(salvo)
            : [];

    });

    //-------------------------
    // Campos
    //-------------------------

    const [titular,setTitular] = useState("");

    const [numero,setNumero] = useState("");

    const [validade,setValidade] = useState("");

    const [cvv,setCvv] = useState("");

    const [bandeira, setBandeira] = useState("");

    function formatarNumero(valor){

            let numero = valor.replace(/\D/g,"");

            numero = numero.substring(0,16);

            numero = numero.replace(/(.{4})/g,"$1 ").trim();

            setNumero(numero);

            detectarBandeira(numero);

    }

      function formatarValidade(valor){

                let texto = valor.replace(/\D/g,"");

                texto = texto.substring(0,4);

                if(texto.length > 2){

                    texto =
                        texto.substring(0,2)
                        + "/"
                        + texto.substring(2);

                }

                setValidade(texto);

       }


       function formatarCVV(valor){

            let texto = valor.replace(/\D/g,"");

            texto = texto.substring(0,3);

            setCvv(texto);

        }

        function detectarBandeira(numero){

                const n = numero.replace(/\s/g,"");

                if(n.startsWith("4")){

                    setBandeira("Visa");

                }

                else if(n.startsWith("5")){

                    setBandeira("Mastercard");

                }

                else if(n.startsWith("3")){

                    setBandeira("American Express");

                }

                else if(n.startsWith("6")){

                    setBandeira("Elo");

                }

                else{

                    setBandeira("");

                }

}

            async function salvarCartao() {

    // Validação

    if (
        !titular ||
        !numero ||
        !validade ||
        !cvv
    ) {

        alert("Preencha todos os campos.");

        return;

    }

    // Usuário logado (temporariamente usuário 1)

    const usuario = JSON.parse(
        localStorage.getItem("usuarioLogado")
    );

    const idUsuario = usuario?.id || 1;

    // Buscar cliente

    const cliente =
        await buscarClientePorUsuario(idUsuario);

    if (!cliente) {

        alert("Cliente não encontrado.");

        return;

    }

    // Separar validade

    const partes =
        validade.split("/");

    const mes = partes[0];

    const ano = "20" + partes[1];

    // Últimos quatro números

    const somenteNumeros =
        numero.replace(/\D/g, "");

    const ultimos4 =
        somenteNumeros.slice(-4);

    // Objeto que será salvo

    const novoCartao = {

        idcliente: cliente.id,

        idformapagamento: 1,

        nome_titular: titular,

        ultimos_4_digitos: ultimos4,

        bandeira: bandeira,

        validade_mes: Number(mes),

        validade_ano: Number(ano),

        token_pagamento:
            crypto.randomUUID()

    };

    // Salvar

    const resultado =
        await cadastrarCartao(novoCartao);

    if (resultado) {

        alert("Cartão cadastrado com sucesso!");

        navigate("/meuperfil");

    }

    else {

        alert("Erro ao cadastrar cartão.");

    }

}

    return(

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

            <div className="novo-cartao-container">

                <div className="perfil-faixa">

                    Meu perfil

                </div>

                <div className="novo-cartao-topo">

                    <div className="foto-perfil-grande"></div>

                </div>

                <div className="form-cartao">

                    <label>

                        Nome do titular

                    </label>

                    <input
                        value={titular}
                        onChange={(e)=>setTitular(e.target.value)}
                    />

                    <span>*campo obrigatório</span>

                    <label>

                        Número do cartão

                    </label>

                    <input
                        value={numero}
                        onChange={(e)=>formatarNumero(e.target.value)}
                    />

                    <span>*campo obrigatório</span>

                    <div className="linha">

                        <div>

                            <label>

                                Data de validade

                            </label>

                            <input
                                value={validade}
                                onChange={(e)=>formatarValidade(e.target.value)}
                            />

                            <span>*campo obrigatório</span>

                        </div>

                        <div>

                            <label>

                                CVV

                            </label>

                            <input
                                    value={cvv}
                                    onChange={(e)=>formatarCVV(e.target.value)}
                             />

                             {
                                bandeira && (

                                    <p className="bandeira-cartao">

                                        Bandeira: <strong>{bandeira}</strong>

                                    </p>

                                )
                            }
                            <span>*campo obrigatório</span>

                        </div>

                    </div>

                      <button
                        onClick={salvarCartao}
                    >

                        Adicionar novo cartão

                    </button>

                </div>

            </div>

        </>

    );

}

export default AdicionarCartao;
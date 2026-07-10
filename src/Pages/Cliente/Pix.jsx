import "../../styles/Pix.css";

import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

import { useRef, useState } from "react";

function Pix() {

    const navigate = useNavigate();

    const sidebarRef = useRef(null);

    const [sidebarAberta, setSidebarAberta] =
        useState(false);

    const pedido = JSON.parse(
        localStorage.getItem("pedidoAtual")
    );

    const total = pedido?.total || 0;

    const numeroPedido = pedido?.id || pedido?.numero || "----";

    function confirmarPagamento() {

        navigate("/pedidofeito");

    }

    function copiarPix() {

        navigator.clipboard.writeText(

            "00020126360014BR.GOV.BCB.PIX0114ru@unifei.edu.br520400005303986540510.005802BR5913RU UNIFEI6008ITABIRA62070503***6304ABCD"

        );

        alert("Código PIX copiado!");

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

                carrinho={[]}

                navigate={navigate}

            />

            <div className="pix-container">

    <div className="pix-topo">

        <button
            className="btn-voltar-pix"
            onClick={() => navigate("/resumo")}
        >
            ← Voltar
        </button>

        <h2>
            Restaurante universitário
        </h2>

    </div>

    <div className="pix-status">

        Pagamento realizado ✔

    </div>

    <div className="pix-conteudo">

        <div className="pix-esquerda">

            <h1>PIX</h1>

            <div className="qrcode">

                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=RUUNIFEI"
                    alt="QR Code"
                />

            </div>

            <h3>

                Pix válido até 23h10

            </h3>

        </div>

        <div className="pix-direita">

            <p>

                Aponte a sua câmera para o QR Code ao lado
                ou utilize o código Pix Copia e Cola abaixo.

            </p>

        </div>

    </div>

    <div className="pix-codigo">

        <input
            readOnly
            value="00020101021126580014br.gov.bcb.pix013631597ff4-c90e-470b-b8d6-b767f1f85a1e5204000053039865802BR5915RestauranteUni6013RIO DE JANEIRO62070503***630436C2"
        />

    </div>

    <button
        className="copiar-pix"
        onClick={copiarPix}
    >

        Copiar código pix

    </button>

    <button
        className="btn-pago"
        onClick={confirmarPagamento}
    >

        Já realizei o pagamento

    </button>

</div>
                

            

        </>

    );

}

export default Pix;
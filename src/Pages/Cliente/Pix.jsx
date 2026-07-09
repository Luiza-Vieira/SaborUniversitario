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

                <div className="pix-card">

                    <h1>

                        Pagamento via PIX

                    </h1>

                    <p className="pedido-numero">

                        Pedido nº {numeroPedido}

                    </p>

                    <p>

                        Escaneie o QR Code abaixo

                    </p>

                    <div className="qrcode">

                        <img

                            src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=RUUNIFEI"

                            alt="QR Code"

                        />

                    </div>

                    <div className="pix-codigo">

                        <input

                            readOnly

                            value="00020126360014BR.GOV.BCB.PIX0114ru@unifei.edu.br520400005303986540510.005802BR5913RUUNIFEI6008ITABIRA62070503***6304ABCD"

                        />

                        <button

                            onClick={copiarPix}

                        >

                            Copiar

                        </button>

                    </div>

                    <div className="pix-total">

                        Valor:

                        <strong>

                            R$

                            {" "}

                            {total.toFixed(2).replace(".", ",")}

                        </strong>

                    </div>

                    <button

                        className="btn-pago"

                        onClick={confirmarPagamento}

                    >

                        Já realizei o pagamento

                    </button>

                </div>

            </div>

        </>

    );

}

export default Pix;
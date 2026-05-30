import "./EsqueceuSenha.css"
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";


export default function EsqueceuSenha() {
    const navega = useNavigate();
    function verificarSenha() {

        navega = useNavigate();
        event.preventDefault();
        if (true) { navega("/SenhaSucesso"); }
    }
    return (
        <>
            <header>
                <h1>Sabor Universitário</h1>
            </header>
            <form id="espacamento" onSubmit={verificarSenha}>
                <div className="login">
                    <h2>Redefinir Senha</h2> <br />

                    <h3 id="aumentar">Preencha com o código de segurança recebido pelo e-mail</h3>
                    <div>
                        <input type="text" placeholder="Código de segurança" />
                        <button type="submit" className="entrar">Verificar</button>
                    </div>
                </div>
            </form>
        </>
    )

}


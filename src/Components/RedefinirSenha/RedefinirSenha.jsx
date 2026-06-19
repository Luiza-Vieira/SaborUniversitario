import './RedefinirSenha.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function RedefinirSenha() {
    const navega = useNavigate();
    function Enviar(event) {
        event.preventDefault();
        navega('/SenhaSucesso');
    }
    return (
        <>
            <header className='head'>
                <h1>Sabor Universitário</h1>
            </header>
            <main>
                <form onSubmit={Enviar}>
                    <div class="login">
                        <h2>Redefinir Senha</h2>
                        <br />
                        <h3>Preencha a sua nova senha</h3>
                        <div>
                            <input type="password" placeholder="Senha" />
                            <input type="password" placeholder="Confirme sua Senha" />
                            <button type="submit" class="entrar">Enviar</button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )

}

export default RedefinirSenha;

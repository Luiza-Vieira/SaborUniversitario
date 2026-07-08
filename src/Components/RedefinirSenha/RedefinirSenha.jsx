import './RedefinirSenha.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { atualizarSenha } from "../../services/usuarioService";

function RedefinirSenha() {
    const navega = useNavigate();
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
     async function Enviar(event) {

                event.preventDefault();

                if (senha !== confirmarSenha) {

                    alert("As senhas não coincidem.");
                    return;

                }

                const email = localStorage.getItem("emailRecuperacao");

                if (!email) {

                    alert("Nenhum e-mail encontrado para recuperação.");
                    return;

                }

                const sucesso = await atualizarSenha(email, senha);

                if (!sucesso) {

                    alert("Erro ao atualizar a senha.");
                    return;

                }

                localStorage.removeItem("emailRecuperacao");

                navega("/SenhaSucesso");

            }
    return (
        <>
            <header className='head'>
                <h1>Sabor Universitário</h1>
            </header>
            <main>
                <form className='form' onSubmit={Enviar}>
                    <div className="login">
                        <h2>Redefinir Senha</h2>
                        <br />
                        <h3>Preencha a sua nova senha</h3>
                        <div>
                             <input
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                />
                             <input
                                type="password"
                                placeholder="Confirme sua Senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                            <button type="submit" className="entrar">Enviar</button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )

}

export default RedefinirSenha;

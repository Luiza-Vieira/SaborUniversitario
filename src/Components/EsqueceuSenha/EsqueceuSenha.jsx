import "./EsqueceuSenha.css"
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";


export default function EsqueceuSenha() {
    const navega = useNavigate();
    const [segundos, setSegundos] = useState(60);
    const [newCodigo, setnewCodigo] = useState();

    useEffect(() => {
        if (segundos != 0) {
            setTimeout(() => {
                setSegundos(segundos - 1);
            }, 1000);
        }
        else if (segundos == 0) { }
    }
    )

    function codigo() {
        setSegundos(60);

    }



    function verificarSenha() {

        navega('/RedefinirSenha');
        event.preventDefault();

    }

    return (
        <>
            <header className="head">
                <h1>Sabor Universitário</h1>
            </header>
            <form id="espacamento" onSubmit={verificarSenha}>
                <div className="login">
                    <h2>Redefinir Senha</h2> <br />

                    <h3 id="aumentar">Preencha com o código de segurança recebido pelo e-mail</h3>
                    <div>
                        <input type="text" placeholder="Código de segurança" />
                        {segundos > 0 ? (
                            <p>Código válido por {segundos} segundos</p>)
                            :
                            (<Link onClick={codigo} id="espaco">Novo código de acesso</Link>)}
                        <button type="submit" className="entrar">Verificar</button>



                    </div>
                </div>
            </form>
        </>
    )

}


import "./SenhaSucesso.css"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function SenhaSucesso() {

    return (
        <>
            <header className="head">
                <h1>Sabor Universitário</h1>
            </header>
            <main>
                <form>
                    <div class="login">
                        <h2>Redefinir Senha</h2>
                        <br />
                        <div>
                            <p>Sua Senha foi redefinida com sucesso <FontAwesomeIcon icon={faCheck} /> </p>

                            <br />
                            <Link to={"/"}><button type="submit" class="entrar">Acessar minha conta</button></Link>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )



}

export default SenhaSucesso;
import "./SenhaSucesso.css"
import { Link } from "react-router-dom";

function SenhaSucesso() {

    return (
        <>
            <header>
                <h1 class="user">Sabor Universitário</h1>
            </header>
            <main>
                <form>
                    <div class="login">
                        <h2>Redefinir Senha</h2>
                        <br />
                        <div>
                            <p>Sua Senha foi redefinida com sucesso <img
                                src="https://emojical.net/wp-content/uploads/2023/02/check-mark-13.png" alt="check"
                                id="check" /></p>
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
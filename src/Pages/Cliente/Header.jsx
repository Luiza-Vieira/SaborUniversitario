import "../../styles/header.css";

import {
  useEffect,
  useState
} from "react";

import { buscarClientePorUsuario } from "../../services/clienteService";

function Header({
  sidebarAberta,
  setSidebarAberta,
  carrinho,
  navigate
}) 

  



{

  const [cliente, setCliente] =
  useState(null);

useEffect(() => {

  async function carregarCliente() {

    const usuario = JSON.parse(

      localStorage.getItem(
        "usuarioLogado"
      )

    );

    if (!usuario) return;

    const dadosCliente =

      await buscarClientePorUsuario(
        usuario.id
      );

    setCliente(dadosCliente);

  }

  carregarCliente();

}, []);


  return (
    <header className="header">

      <div
        className="perfil"
        onClick={() =>
          setSidebarAberta(!sidebarAberta)
        }
      >
        <div className="foto"></div>

        <div>
          <p className="nome">

              {cliente?.nome || "Usuário"}

            </p>

            <p className="fichas">

              Fichas: {cliente?.fichas ?? 0}

            </p>
        </div>
      </div>

      <h1>
        Sabor Universitário
      </h1>

      <button
        className="carrinho-btn"
        onClick={() =>
          navigate("/carrinho")
        }
      >
        🛒 {
          carrinho.reduce(
            (total, item) =>
              total + item.quantidade,
            0
          )
        }
      </button>

    </header>
  );
}

export default Header;
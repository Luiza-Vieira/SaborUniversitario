import "../styles/sidebar.css";

import {
  useEffect,
  useState
} from "react";

import {
  buscarClientePorUsuario
} from "../services/clienteService";

function Sidebar({
  sidebarAberta,
  sidebarRef,
  navigate,
  setSidebarAberta
}) {

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

    <div
      ref={sidebarRef}
      className={
        sidebarAberta
          ? "sidebar ativo"
          : "sidebar"
      }
    >

      <div className="sidebar-header">

        <div className="foto"></div>

        <p className="nome">

            {cliente?.nome || "Usuário"}

          </p>

          <p className="fichas">

            Fichas: {cliente?.fichas ?? 0}

          </p>

      </div>

      <ul>

        <li
          onClick={() => {

            navigate("/home");
            setSidebarAberta(false);

          }}
        >
          Início
        </li>

        <li
          onClick={() => {

            navigate("/meuperfil");
            setSidebarAberta(false);

          }}
        >
          Minha Conta
        </li>

        <li
          onClick={() => {

            navigate("/meuspedidos");
            setSidebarAberta(false);

          }}
        >
          Meus Pedidos
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;
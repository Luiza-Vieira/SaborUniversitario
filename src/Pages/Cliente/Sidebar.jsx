import "../../styles/sidebar.css";

function Sidebar({
  sidebarAberta,
  sidebarRef,
  navigate,
  setSidebarAberta
}) {
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
          Usuário
        </p>

        <p className="fichas">
          Fichas: $ 0
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

        <li>
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
import "../../styles/header.css";

function Header({
  sidebarAberta,
  setSidebarAberta,
  carrinho,
  navigate
}) {
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
            Usuário
          </p>

          <p className="fichas">
            Fichas: $ 0
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
          carrinho?.reduce(
            (total, item) =>
              total + item.quantidade,
            0
          ) || 0
        }
      </button>

    </header>
  );
}

export default Header;
import "./HeaderSaldo.css";

function HeaderSaldo() {
  return (
    <header className="lista-cat-header">
      <div className="empresa-saldo-badge">
        <div className="avatar-container">
          <span role="img" aria-label="avatar">👩‍🍳</span>
        </div>
          <div className="empresa-info">
            <span className="nome-empresa">Empresa Fulana</span>
            <span className="saldo-empresa">Saldo R$1428,50</span>
          </div>
        </div>
         <h1 className="logo-compartilhada">Sabor Universitário</h1>
    </header>
  );
}

export default HeaderSaldo;
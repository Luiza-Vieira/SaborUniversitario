import "./HeaderEmpresa.css";

function HeaderEmpresa() {
  return (
    <header className="componente-header-escuro">
      <div className="empresa-badge-compartilhado">
        <div className="avatar-compartilhado">
          <span role="img" aria-label="avatar">👩‍🍳</span>
        </div>
        <div className="empresa-info-compartilhada">
          <span className="nome-empresa-compartilhada">Empresa Fulana</span>
        </div>
      </div>
      <h1 className="logo-compartilhada">Sabor Universitário</h1>
    </header>
  );
}

export default HeaderEmpresa;
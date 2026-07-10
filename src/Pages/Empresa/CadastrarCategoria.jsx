import "./CadastrarCategoria.css";
import HeaderEmpresa from "./HeaderEmpresa";


function CadastrarCategoria() {
  return (
    <div className="categoria-page">
      <HeaderEmpresa />

      {/* CARD DO FORMULÁRIO */}
      <div className="categoria-container">
        <main className="categoria-card">
          <h2 className="categoria-titulo">Cadastrar Categoria</h2>

          <form onSubmit={(e) => e.preventDefault()} className="categoria-form">

            {/* LINHA 1: Código e Descrição */}
            <div className="form-row">
              <div className="form-group">
                <label>Código:<span className="asterisco">*</span></label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Descrição:<span className="asterisco">*</span></label>
                <input type="text" />
              </div>
            </div>

            {/* LINHA 2: Nome e Estado */}
            <div className="form-row">
              <div className="form-group">
                <label>Nome da categoria:<span className="asterisco">*</span></label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Estado da categoria:<span className="asterisco">*</span></label>
                <select defaultValue="">
                  <option value="" disabled hidden></option>
                  <option value="ativo">Ativa</option>
                  <option value="inativo">Inativa</option>
                </select>
              </div>
            </div>

            {/* BOTÃO SALVAR */}
            <div className="categoria-action">
              <button type="submit" className="btn-salvar">
                Salvar
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}

export default CadastrarCategoria;
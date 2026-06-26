import "./CadastrarBeneficio.css";
import HeaderEmpresa from "./HeaderEmpresa";

function CadastrarBeneficio() {
  return (
    <div className="beneficio-page">
      <HeaderEmpresa />

      {/* CARD DO FORMULÁRIO */}
      <div className="beneficio-container">
        <main className="beneficio-card">
          <h2 className="beneficio-titulo">Cadastrar Benefício</h2>

          <form onSubmit={(e) => e.preventDefault()} className="beneficio-form">
            
            {/* LINHA 1: Código e Nome */}
            <div className="form-row">
              <div className="form-group campo-codigo">
                <label>Código: <span className="obrigatorio">*</span></label>
                <input type="text" />
              </div>

              <div className="form-group campo-nome">
                <label>Nome: <span className="obrigatorio">*</span></label>
                <input type="text" />
              </div>
            </div>

            {/* LINHA 2: Descrição e Estado */}
            <div className="form-row">
              <div className="form-group campo-descricao">
                <label>Descrição: <span className="obrigatorio">*</span></label>
                <input type="text" />
              </div>

              <div className="form-group campo-estado">
                <label>Estado do benefício: <span className="obrigatorio">*</span></label>
                <select defaultValue="">
                  <option value="" disabled hidden></option>
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>
              </div>
            </div>

            {/* CONTAINER DO BOTÃO */}
            <div className="beneficio-action">
              <button type="submit" className="beneficio-btn-salvar">
                Salvar
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}

export default CadastrarBeneficio;
import "./cliente.css";
import Header from "./Header";

function Cliente() {
  return (
    <div className="container">
      <Header/>

      <div className="content">
        <h2>Cadastrar Cliente</h2>
        <hr />

        <form>
          <div className="row">
            <div className="field">
              <label>Código *</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Matrícula *</label>
              <input type="text" />
            </div>
          </div>

          <div className="field full-width">
            <label>Nome Completo *</label>
            <input type="text" />
          </div>

          <div className="row">
            <div className="field">
              <label>E-mail *</label>
              <input type="email" />
            </div>

            <div className="field">
              <label>Senha *</label>
              <input type="password" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Estado *</label>
              <select>
                <option></option>
              </select>
            </div>

            <div className="field">
              <label>Benefício *</label>
              <select>
                <option></option>
              </select>
            </div>
          </div>

          <div className="button-container">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cliente;
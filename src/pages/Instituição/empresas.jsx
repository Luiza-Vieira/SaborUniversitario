import "./empresas.css";
import Header from "./Header";

function Empresas() {
  return (
    <div className="empresas">
      <Header/>

      {/* Esse container vai centralizar o card sem afetar outras páginas */}
      <div className="container-centro-empresas">
        <main className="contentempresas">
          
          <section className="section-empresas">
            <h2>Cadastrar Empresa</h2>
          </section>

          <section className="opcoes-empresas">
            <h3>Código *</h3>
            <input type="text" />
          </section>

          <section className="opcoes-empresas">
            <h3>Nome Fantasia *</h3>
            <input type="text" />
          </section>

          <section className="opcoes-empresas">
            <h3>Razão Social *</h3>
            <input type="text" />
          </section>

          <section className="opcoes-empresas">
            <h3>Senha do Usuário *</h3>
            <input type="password" />
          </section>

          <section className="opcoes-empresas">
            <h3>CNPJ *</h3>
            <input type="text" />
          </section>

          <div className="container-botao-salvar">
            <button className="botao-salvar">Salvar</button>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Empresas;
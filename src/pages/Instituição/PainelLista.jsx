import { Link } from "react-router-dom";
import "./PainelLista.css";


function PainelLista({ titulo, placeholder, itens, linkDestino, textoBotao }) {
  return (
    <section className="section">
      <h2>{titulo}</h2>
      
      <input type="text" placeholder={placeholder} />

      {/* Mapeia a lista de itens recebida por propriedade */}
      {itens.map((item, index) => (
        <div className="item" key={index}>
          <span>{item}</span>
          <div className="icons">
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </div>
      ))}

      <Link to={linkDestino} style={{ textDecoration: 'none' }}>
        <button className="add-btn">{textoBotao}</button>
      </Link>
    </section>
  );
}

export default PainelLista;
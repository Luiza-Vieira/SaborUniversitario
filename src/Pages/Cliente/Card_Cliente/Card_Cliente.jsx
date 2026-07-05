import "./Card_Cliente.css";
import { useNavigate } from "react-router-dom";

function Card_Cliente({ rest, img }) {

  const navigate = useNavigate();

  function abrirRestaurante() {

    if (rest === "Restaurante Universitário") {
      navigate("/home");
    } else {
      alert("Esse restaurante ainda não possui página.");
    }

  }

  return (

    <div
      className="card-restaurante"
      onClick={abrirRestaurante}
    >

      <img
        src={img}
        alt={rest}
        className="img-card"
      />

      <h2 className="nome-restaurante">
        {rest}
      </h2>

    </div>

  );

}

export default Card_Cliente;
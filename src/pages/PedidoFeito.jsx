import "../index.css";

import { useNavigate } from "react-router-dom";

function PedidoFeito() {

  const navigate = useNavigate();

  function irParaPedidos() {

    localStorage.removeItem(
      "pedidoAtual"
    );

    navigate("/meuspedidos");

  }

  return (

    <div className="pagina-final">

      <div className="card-final">

        {/* CHECK */}

        <div className="circulo-check">

          ✓

        </div>

        {/* TEXOS */}

        <h1>
          Pedido Confirmado!
        </h1>

        <p>

          Seu pedido foi realizado
          com sucesso.

        </p>

        {/* BOTÃO */}

        <button
          className="btn-acompanhar-pedido"
          onClick={irParaPedidos}
        >

          ACOMPANHAR PEDIDO

        </button>

      </div>

    </div>

  );

}

export default PedidoFeito;
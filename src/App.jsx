import {
  Routes,
  Route
} from "react-router-dom";

// PÁGINAS

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Detalhe from "./pages/Detalhe";
import Cartao from "./pages/Cartao";
import MeusPedidos from "./pages/MeusPedidos";
import Feedback from "./pages/Feedback";

// NOVAS

import ResumoPedido from "./pages/ResumoPedido";
import PedidoFeito from "./pages/PedidoFeito";

function App() {

  return (

    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* CARRINHO */}
      <Route
        path="/carrinho"
        element={<Carrinho />}
      />

      {/* DETALHE */}
      <Route
        path="/detalhe/:categoria/:id"
        element={<Detalhe />}
      />

      {/* CARTÃO */}
      <Route
        path="/cartao"
        element={<Cartao />}
      />

      {/* MEUS PEDIDOS */}
      <Route
        path="/meuspedidos"
        element={<MeusPedidos />}
      />

      {/* RESUMO */}
      <Route
        path="/resumo"
        element={<ResumoPedido />}
      />

      {/* PEDIDO FEITO */}
      <Route
        path="/pedidofeito"
        element={<PedidoFeito />}
      />

      <Route
        path="/feedback"
        element={<Feedback />}
      />

    </Routes>

  );

}

export default App;
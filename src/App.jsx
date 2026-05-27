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


      <Route
        path="/cartao"
        element={<Cartao />}
      />

      <Route
        path="/meuspedidos"
        element={<MeusPedidos />}
      />

    </Routes>

  );

}

export default App;
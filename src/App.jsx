import {

  Routes,
  Route

} from "react-router-dom";

// PÁGINAS

import Home from "./pages/Home";

import Carrinho from "./pages/Carrinho";

import Detalhe from "./pages/Detalhe";

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

    </Routes>

  );

}

export default App;
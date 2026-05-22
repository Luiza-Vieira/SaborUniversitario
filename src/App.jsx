import {

  Routes,
  Route

} from "react-router-dom";

// IMPORTAÇÃO DAS PÁGINAS

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";

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

    </Routes>

  );

}

export default App;
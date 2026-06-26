import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Header_Empresa.css";

function Header_Empresa() {
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <Sidebar
        sidebarAberta={sidebarAberta}
        sidebarRef={sidebarRef}
        navigate={navigate}
        setSidebarAberta={setSidebarAberta}
      />

      <header className="header-empresa">
        {/* Botão hamburguer */}
        <button
          className="btn-hamburguer"
          onClick={() => setSidebarAberta(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <h1>Sabor Universitário</h1>
      </header>
    </>
  );
}

export default Header_Empresa;

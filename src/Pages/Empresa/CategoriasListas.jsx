import React, { useState } from "react";
import "./CategoriasLista.css";
import { Link } from "react-router-dom";
import HeaderEmpresa from "./HeaderSaldo";

function CategoriasLista() {
  // Estado para simular os toggles (ligado/desligado) das categorias
  const [categorias, setCategorias] = useState([
    { id: 1, nome: "Bebidas", ativo: false },
    { id: 2, nome: "Salgados Assados", ativo: true },
    { id: 3, nome: "Salgados Fritos", ativo: true },
    { id: 4, nome: "", ativo: false }, // Linha em branco conforme o Figma
  ]);

  const handleToggle = (id) => {
    setCategorias(
      categorias.map((cat) =>
        cat.id === id ? { ...cat, ativo: !cat.ativo } : cat
      )
    );
  };

  return (
    <div className="lista-cat-page">
      <HeaderEmpresa />

      {/* CONTEÚDO */}
      <div className="lista-cat-container">
        <main className="lista-cat-card">
          <h2 className="lista-cat-titulo">Categorias</h2>

          <div className="categorias-wrapper">
            {categorias.map((categoria) => (
              <div key={categoria.id} className="categoria-item">

                {/* Lado Esquerdo: Switch Toggle + Nome */}
                <div className="categoria-left">
                  <button
                    type="button"
                    className={`switch-toggle ${categoria.ativo ? "active" : ""}`}
                    onClick={() => handleToggle(categoria.id)}
                  >
                    <div className="switch-circle"></div>
                  </button>
                  <span className="categoria-nome">{categoria.nome}</span>
                </div>

                {/* Lado Direito: Ações */}
                <div className="categoria-actions">
                  <button className="btn-action">🖋️</button>
                  <button className="btn-action">🗑️</button>
                </div>

              </div>
            ))}
          </div>

          {/* RODAPÉ DO CARD COM OS BOTÕES */}
          <footer className="lista-cat-footer">
            <Link to="/cadastrar-categoria" style={{ textDecoration: 'none' }}>
              <button className="btn-adicionar">Adicionar Categoria</button>
            </Link>
            <button className="btn-salvar-lista">Salvar</button>
          </footer>

        </main>
      </div>
    </div>
  );
}

export default CategoriasLista;
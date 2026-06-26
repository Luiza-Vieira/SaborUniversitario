import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_Empresa from '../../Empresa/Header_Empresa/Header_Empresa';

export default function ProdutoIndex() {
  const navigate = useNavigate();
  
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Suco de maça', estoque: 18, ativo: false, imagem: '/coxinha.png' },
    { id: 2, nome: 'Coxinha', estoque: 12, ativo: true, imagem: '/coxinha.png' },
    { id: 3, nome: 'Mini pizza', estoque: 8, ativo: true, imagem: '/coxinha.png' },
    { id: 4, nome: '', estoque: 6, ativo: false, imagem: '/coxinha.png' },
  ]);

  const toggleAtivo = (id) => {
    setProdutos(produtos.map(p => 
      p.id === id ? { ...p, ativo: !p.ativo } : p
    ));
  };

  const aumentarEstoque = (id) => {
    setProdutos(produtos.map(p => 
      p.id === id ? { ...p, estoque: p.estoque + 1 } : p
    ));
  };

  const diminuirEstoque = (id) => {
    setProdutos(produtos.map(p => 
      p.id === id && p.estoque > 0 ? { ...p, estoque: p.estoque - 1 } : p
    ));
  };

  const excluirProduto = (id) => {
    if (window.confirm('Deseja realmente excluir este produto?')) {
      setProdutos(produtos.filter(p => p.id !== id));
    }
  };

  const containerStyle = {
    backgroundColor: '#f5f5f5',
    minHeight: 'calc(100vh - 80px)',
    padding: '30px 50px',
  };

  const tituloStyle = {
    fontFamily: "'Gabriela', serif",
    color: '#e67e22',
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const linhaStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #ddd',
    gap: '20px',
  };

  const toggleStyle = (ativo) => ({
    width: '50px',
    height: '26px',
    borderRadius: '13px',
    backgroundColor: ativo ? '#2ecc71' : '#ccc',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  });

  const toggleBolinha = (ativo) => ({
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '2px',
    left: ativo ? '26px' : '2px',
    transition: 'left 0.3s',
  });

  const btnEstoqueStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#e67e22',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  };

  const btnAcaoStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    padding: '5px',
  };

  const btnAdicionarStyle = {
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '12px 25px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const btnSalvarStyle = {
    backgroundColor: '#ffd9b3',
    color: '#e67e22',
    border: '1px solid #f5c6a0',
    borderRadius: '20px',
    padding: '12px 50px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <>
      <Header_Empresa />

      <div style={containerStyle}>
        <h2 style={tituloStyle}>Produtos</h2>

        <div style={{ marginBottom: '30px' }}>
          {produtos.map((produto) => (
            <div key={produto.id} style={linhaStyle}>
              
              <div 
                style={toggleStyle(produto.ativo)} 
                onClick={() => toggleAtivo(produto.id)}
              >
                <div style={toggleBolinha(produto.ativo)} />
              </div>

              <img 
                src={produto.imagem} 
                alt={produto.nome}
                style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
                onError={(e) => {
                  e.target.src = '[via.placeholder.com](https://via.placeholder.com/50x50?text=Img)';
                }}
              />

              <span style={{ flex: 1, fontSize: '16px', fontWeight: '500', minWidth: '150px' }}>
                {produto.nome}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Estoque:</span>
                <button style={btnEstoqueStyle} onClick={() => diminuirEstoque(produto.id)}>−</button>
                <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 'bold' }}>
                  {produto.estoque}
                </span>
                <button style={btnEstoqueStyle} onClick={() => aumentarEstoque(produto.id)}>+</button>
              </div>

              <button style={btnAcaoStyle} onClick={() => navigate(`/cadastrar-produto/${produto.id}`)}>
                ✏️
              </button>

              <button style={btnAcaoStyle} onClick={() => excluirProduto(produto.id)}>
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={btnAdicionarStyle} onClick={() => navigate('/cadastrar-produto')}>
            Adicionar Produto
          </button>
          <button style={btnSalvarStyle}>Salvar</button>
        </div>
      </div>
    </>
  );
}

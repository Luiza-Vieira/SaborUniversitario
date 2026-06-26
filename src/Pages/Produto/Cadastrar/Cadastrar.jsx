import React, { useState } from 'react';
import Header_Empresa from '../../Empresa/Header_Empresa/Header_Empresa';

export default function Cadastrar() {
  const [produto, setProduto] = useState({
    nome: '',
    codigo: '',
    preco: '',
    estoque: '',
    descricao: '',
    tipoBeneficio: '',
    estadoProduto: '',
    categoriaProduto: '',
    imagem: null
  });

  const [imagemPreview, setImagemPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduto({ ...produto, imagem: file });
      setImagemPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando para o banco de dados:", produto);

    try {
      const response = await fetch('[localhost](http://localhost:5000/api/produtos)', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setProduto({
          nome: '', codigo: '', preco: '', estoque: '',
          descricao: '', tipoBeneficio: '', estadoProduto: '',
          categoriaProduto: '', imagem: null
        });
        setImagemPreview(null);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
    }
  };

  // Estilos
  const inputStyle = {
    backgroundColor: '#d9d9d9',
    border: 'none',
    borderRadius: '20px',
    height: '38px',
    paddingLeft: '15px',
    fontSize: '14px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '5px',
  };

  return (
    <>
      <Header_Empresa />

      <div
        style={{
          backgroundColor: '#f5f5f5',
          minHeight: 'calc(100vh - 80px)',
          padding: '30px 50px',
        }}
      >
        {/* Título */}
        <h2
          style={{
            fontFamily: "'Gabriela', serif",
            color: '#e67e22',
            fontSize: '28px',
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          Cadastrar Produto
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '40px' }}>
            
            {/* Coluna Esquerda - Upload de Imagem */}
            <div
              onClick={() => document.getElementById('inputImagem').click()}
              style={{
                width: '250px',
                height: '280px',
                backgroundColor: '#c0c0c0',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              {imagemPreview ? (
                <img
                  src={imagemPreview}
                  alt="Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <span style={{ color: '#666', fontSize: '13px', textAlign: 'center', padding: '20px' }}>
                  UPLOAD IMAGEM DO PRODUTO
                </span>
              )}
              <input
                type="file"
                id="inputImagem"
                accept="image/*"
                onChange={handleImagemChange}
                style={{ display: 'none' }}
              />
            </div>

            {/* Coluna Direita - Campos */}
            <div style={{ flex: 1 }}>
              
              {/* Linha 1: Código e Descrição */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Código:<span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="codigo"
                    value={produto.codigo}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Descrição: <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="descricao"
                    value={produto.descricao}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
              </div>

              {/* Linha 2: Nome e Tipo de Benefício */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Nome: <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={produto.nome}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Tipo de benefício:<span style={{ color: 'red' }}>*</span>
                  </label>
                  <select
                    name="tipoBeneficio"
                    value={produto.tipoBeneficio}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  >
                    <option value=""></option>
                    <option value="beneficio1">Benefício 1</option>
                    <option value="beneficio2">Benefício 2</option>
                  </select>
                </div>
              </div>

              {/* Linha 3: Preço e Estado do Produto */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Preço: <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="preco"
                    value={produto.preco}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Estado do produto:<span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="estadoProduto"
                    value={produto.estadoProduto}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
              </div>

              {/* Linha 4: Estoque e Categoria */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Estoque Inicial: <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="estoque"
                    value={produto.estoque}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>
                    Categoria do produto: <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="categoriaProduto"
                    value={produto.categoriaProduto}
                    onChange={handleChange}
                    style={{ ...inputStyle, width: '100%' }}
                    required
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Botão Salvar */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#ffd9b3',
                color: '#e67e22',
                border: '1px solid #f5c6a0',
                borderRadius: '20px',
                padding: '10px 40px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

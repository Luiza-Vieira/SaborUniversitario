import './ConfirmarEntrega.css';
import HeaderF from './HeaderF';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiClock, FiCheck, FiSearch } from 'react-icons/fi'; //Usando react-icons

import { produtos } from "../../data/produtos";



function ConfirmarEntrega() {

  const { id } = useParams();
  const [pedidoEntregue, setPedidoEntregue] = useState(false);
  const navigate = useNavigate();

  // Função que será chamada ao clicar no botão para confirmar a entrega
  const confirmarEntrega = () => {
    setPedidoEntregue(true);
  };


  // Função para o botão voltar
  const handleVoltar = () => {
    navigate('/home-funcionario');
  };


  return (
    <div className="container-tela">
      <HeadeF />

      <main className="conteudo-pedido">

        <button className="btn-voltar" onClick={handleVoltar}>← Voltar</button>

        <h2 className="titulo-pedido">Pedido #{id}</h2>

        <div className="detalhes-pedido">
          <p className="subtitulo">• Detalhes do pedido</p>
          <ul className="lista-itens">
            <li>
              <span>Pão de queijo</span>
              <span className="pontilhados"></span>
              <span>x2</span>
            </li>
            <li className="item-com-obs">
              <div className="linha-principal">
                <span>Café</span>
                <span className="pontilhados"></span>
                <span>x1</span>
              </div>
              <span className="observacao">Obs: sem açúcar</span>
            </li>
            <li>
              <span>Bolo de chocolate</span>
              <span className="pontilhados"></span>
              <span>x1</span>
            </li>
          </ul>
        </div>

        {/* 2. RENDERIZAÇÃO CONDICIONAL DO BOTÃO */}
        {/* O botão só aparece SE pedidoEntregue for falso (!) */}
        {!pedidoEntregue && (
          <div className="area-botao">
            <button className="btn-confirmar" onClick={confirmarEntrega}>
              Confirmar entrega do pedido
            </button>
          </div>
        )}

        {/* 3. RENDERIZAÇÃO CONDICIONAL DO STATUS */}
        <div className="area-status">
          <span className="label-status">Status do pedido:</span>

          {pedidoEntregue ? (
            // Se for TRUE, mostra verde
            <span className="status-entregue">Pedido entregue ✓</span>
          ) : (
            // Se for FALSE, mostra laranja
            <span className="status-andamento">Pedido em andamento 🕒</span>
          )}
        </div>
      </main>
    </div>
  );
}

export default ConfirmarEntrega;
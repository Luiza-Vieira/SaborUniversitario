import ".Funcionario./HeadeF";
import HeaderF from '.Funcionario./HeaderF';
import { useNavigate } from 'react-router-dom';

import {
  useState,
  useEffect,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";
import { FiClock, FiCheck, FiSearch } from 'react-icons/fi'; //Usando react-icons

import { produtos } from "../data/produtos";

import React, { useState } from 'react';
import './ConfirmarEntrega.css';

function HeadeF({ }) {

  const navega = useNavigate();
  return (
    <header className='head'>
      <h1 >Sabor Universitário</h1>
    </header>
  )
}

export default HeaderF;

function ConfirmarEntrega() {
  
  const [pedidoEntregue, setPedidoEntregue] = useState(false);
  const navigate = useNavigate();

  // Função que será chamada ao clicar no botão
  const confirmarEntrega = () => {
    setPedidoEntregue(true);

   
  // 2. Função para o botão voltar
  const handleVoltar = () => {
    navigate('/home-funcionario'); 
  };

  };

  return (
    <div className="container-tela">
      <header/>

      <main className="conteudo-pedido">
        
        <button className="btn-voltar" onClick={handleVoltar}>← Voltar</button>
        
        <h2 className="titulo-pedido">Pedido #23486</h2>

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

export default ConfirmarEntrega
// Componente cartão do pedido

import "./indexFuncionario.css";
import HeaderF from './HeaderF';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiClock, FiCheck, FiSearch } from 'react-icons/fi'; //Usando react-icons


function OrderCard({ pedido }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ConfirmarEntrega/${pedido.id}');
    };

    return (
        <div className="card-pedido-funcionario" on onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="info-pedido">
                <h3>Pedido - #{pedido.id}</h3>
                <p>Cliente: {pedido.cliente}</p>
            </div>
            <div className="icone-status">
                {pedido.status === 'pendente' ? <FiClock /> : <FiCheck />}
            </div>
        </div>
    );
};

export default OrderCard;

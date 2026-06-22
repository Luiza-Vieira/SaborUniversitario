import './TipoDeFormaPagamento.css'
import Header_Empresa from '../Header_Empresa/Header_Empresa';
import { useState } from 'react';
import Switch from '../../../Components/Switch/Switch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDollarSign, faCreditCard, faKey } from '@fortawesome/free-solid-svg-icons'; //Pra criar os icons

function TipoDeFormaPagamento() {
    return (

        <>
            <Header_Empresa />
            <h2 id='formapag'>Forma de Pagamento</h2>
            <div className='flex items-center gap-3 mb-6 ml-14'>
                <Switch />
                <h3 className='pagamento'>Dinheiro</h3>
                <FontAwesomeIcon icon={faDollarSign} size='xl' style={{ color: "rgb(0, 0, 0)", }} />
            </div>
            <div className='flex items-center gap-3 mb-6 ml-14 mt-11'>
                <Switch />
                <h3 className='pagamento'>Cartão de Débito/Crédito</h3>
                <FontAwesomeIcon icon={faCreditCard} size='xl' style={{ color: "rgb(0, 0, 0)", }} />
            </div>
            <div className='flex items-center gap-3 mt-10 mb-6 ml-14'>
                <Switch />
                <h3 className='pagamento'>Pix</h3>
                <FontAwesomeIcon icon={faKey} style={{ color: "rgb(0, 0, 0)", }} size='xl' />
            </div>

        </>
    )
}
export default TipoDeFormaPagamento;

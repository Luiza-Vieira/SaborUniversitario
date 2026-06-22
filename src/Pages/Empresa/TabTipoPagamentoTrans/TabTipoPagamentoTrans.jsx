import { useState } from "react";
import { Link } from "react-router-dom";
import './TabTipoPagamentoTrans.css'
import Forma_de_RecebimentoTrans from '../Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans';

//Já o "Forma de Recebimento Transferência" é pra preencher os dados do tipo transferência 

function TabTipoPagamentoTrans() {
    return (
        <>
            <div className="tab">
                <h3>Contas Cadastradas</h3>
                <div className="cadastrou">
                    <h4>Titular</h4>
                    <h4>Banco</h4>
                    <h4>Número da Conta</h4>
                </div>
            </div>
            <Link to="/Forma_de_RecebimentoTrans" className="CadastroRecebimento">Cadastrar nova conta</Link>
        </>
    );

}
export default TabTipoPagamentoTrans;

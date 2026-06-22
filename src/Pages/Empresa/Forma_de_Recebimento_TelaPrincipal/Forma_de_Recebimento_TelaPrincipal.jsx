import './Forma_de_Recebimento_TelaPrincipal.css'
import Header_Empresa from '../Header_Empresa/Header_Empresa';
import Forma_de_RecebimentoTrans from '../Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans';

import TabTipoPagamentoPix from '../TabTipoPagamentoPix/TabTipoPagamentoPix';
import TabTipoPagamentoTrans from '../TabTipoPagamentoTrans/TabTipoPagamentoTrans';
import { useState } from 'react'

//Essas duas tabs (Tab - Tipo de Pagamento Pix) e (Tab - Tipo de Pagamento Transferência) são duas abas pra cada tipo de pagamento pra receber

//Aprendi a usar o Tab Component Aqui nesse site: https://blog.soaresdev.com/reactjs-tab-component/




function Forma_de_Recebimento_TelaPrincipal() {
    const [TabAtivo, setTabAtivo] = useState("tab1");

    const handleTab1 = () => {
        // update the state to tab1
        setTabAtivo("tab1");
    };

    const handleTab2 = () => {
        // update the state to tab2
        setTabAtivo("tab2");
    };

    return (
        <>
            <Header_Empresa />
            <div className='BoxFormaRecebi'>
                <h2 className='FormaRecebiH2'>Forma de Recebimento</h2>
                <ul className='nav'>
                    <li className={TabAtivo === "tab1" ? "active" : ""} onClick={handleTab1}>Pix</li>
                    <li className={TabAtivo === "tab2" ? "active" : ""} onClick={handleTab2}>Transferência</li>
                </ul>
                <div className='outlet'>
                    {TabAtivo === "tab1" ? <TabTipoPagamentoPix /> : <TabTipoPagamentoTrans />}
                </div>
            </div>
        </>
    );
}

export default Forma_de_Recebimento_TelaPrincipal;
import './TipoDeFormaPagamento.css'
import Header_Empresa from '../Header_Empresa/Header_Empresa';
import { useState } from 'react';

function TipoDeFormaPagamento() {
    const [ativo, setAtivo] = useState(false);
    return (

        <>
            <Header_Empresa />
            <h2 id='formapag'>Forma de Pagamento</h2>
            <div className='flex w-20 h-10 bg-gray-600 m-10 rounded-full'>
                <span className='h-10 w-10 bg-white rounded-full' />
            </div>
        </>
    )
}
export default TipoDeFormaPagamento;

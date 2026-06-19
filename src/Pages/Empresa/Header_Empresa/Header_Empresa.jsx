import './Header_Empresa.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../TipoDeFormaPagamento/TipoDeFormaPagamento';
import TipoDeFormaPagamento from '../TipoDeFormaPagamento/TipoDeFormaPagamento';

function Header_Empresa() {

    const navega = useNavigate();
    return (
        <>
            <header className='h'>
                <h1>Sabor Universitário</h1>
            </header>
            <TipoDeFormaPagamento />
        </>
    )
}
export default Header_Empresa;
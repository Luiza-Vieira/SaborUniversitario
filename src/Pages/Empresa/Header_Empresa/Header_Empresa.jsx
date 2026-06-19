import './Header_Empresa.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header_Empresa() {

    const navega = useNavigate();
    return (
        <>

            <header className='h'>
                <h1>Sabor Universitário</h1>
            </header>

        </>
    )
}
export default Header_Empresa;

import './Header_Cliente.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header_Cliente({ user }) {

  const navega = useNavigate();
  return (
    <header>
      <h1>Sabor Universitário</h1>
    </header>
  )
}
export default Header_Cliente;
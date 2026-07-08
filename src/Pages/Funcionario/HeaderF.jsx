import './HeaderF.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HeadeF({ }) {

  const navega = useNavigate();
  return (
    <header className='head'>
      <h1 >Sabor Universitário</h1>
    </header>
  )
}
export default HeaderF;
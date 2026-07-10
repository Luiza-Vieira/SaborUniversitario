

import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ setUser }) {

  const [email, SetEmail] = useState();
  const [senha, SetSenha] = useState();
  const [erro, SetErro] = useState(null);

  const navega = useNavigate();

  const Perfis = [
    { id: 1, idPerfil: "cliente", nome: "Agatha Junqueira", email: "agatha21@gmail.com", senha: "gatinha123", quantficha: 5, foto: "https://images.pexels.com/photos/15254860/pexels-photo-15254860.jpeg" },
    { id: 2, idPerfil: "empresa", nome: "Restaurante Universitário", senha: "betinho59", foto: "https://international.unifei.edu.br/wp-content/uploads/2022/02/unifei-itabira.jpg" },
    { id: 3, idPerfil: "empresa", nome: "Cantina da Maria", email: "gabiroba2009@gmail.com", senha: "dadinho53", foto: "https://static.wixstatic.com/media/ce3e5c_fc0ac53c0e074c609e64aa7574ac28f4~mv2.png" }];

  function fazendologin(event) {

    event.preventDefault(); //Usamos essa função pra evitar da página recarregar enquanto preenchemos os dados;

    const usuario = Perfis.find(
      (user) => user.email == email && user.senha == senha);
    if (!usuario) {
      SetErro("*Ocorreu um erro ao preencher o email/senha. Tente novamente");
      return;

    }
    else {
      switch (usuario.idPerfil) {
        case "cliente":
          navega('/PaginaInicial');
          break;
        case "empresa":
          navega('/Forma_de_Recebimento_TelaPrincipal');
          break;
        case "instituição":
          navega("/Inicial")
          break;
        case "funcionário":
          break;
          navega("/HomeFuncionario")
      }
    }
  }


  return (
    <>
      <header className='head'>
        <h1>Sabor Universitário</h1>
      </header>
      <form className='form' onSubmit={fazendologin}>
        <div className='login'>
          <h2>Acesse a sua conta</h2>
          <div>
            <h3>Entre com o seu email e a sua senha</h3>
            {erro && <p className="alerta">{erro}</p>}
            <input type="email" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => SetSenha(e.target.value)} />
            <button type="submit" className='entrar' >Entrar</button>
          </div>
          <Link to="/EsqueceuSenha">Esqueceu a senha?</Link>
          <p>Ao clicar em Entrar, você concorda com os termos de serviço e de uso.</p>
        </div>
      </form>
    </>
  )
}

export default Login;


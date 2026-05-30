

import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ setUser }) {

  const [email, SetEmail] = useState();
  const [senha, SetSenha] = useState();
  const [erro, SetErro] = useState(null);

  const navega = useNavigate();

  const Perfis = [{ id: 1, idPerfil: "cliente", nome: "Agatha Junqueira", email: "agatha21@gmail.com", senha: "gatinha123" }, { id: 2, idPerfil: "Empresa", nome: "Roberto Carvalho", senha: "betinho59" }];

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
          navega('/Card_Cliente');
          break;
        case "empresa":
          break;
        case "instituição":
          break;
        case "funcionário":
          break;
      }
    }
  }


  return (
    <>
      <header>
        <h1>Sabor Universitário</h1>
      </header>
      <form onSubmit={fazendologin}>
        <div className='login'>
          <h2>Acesse a sua conta</h2>
          <div>
            <h3>Entre com o seu email e a sua senha</h3>
            <p className="alerta">{erro}</p>
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


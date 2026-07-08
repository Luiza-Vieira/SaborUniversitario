

import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { buscarUsuarios } from "../../services/usuarioService";

function Login({ setUser }) {

  const [email, SetEmail] = useState();
  const [senha, SetSenha] = useState();
  const [erro, SetErro] = useState(null);

  const navega = useNavigate();

  //const Perfis = [
  //  { id: 1, idPerfil: "cliente", nome: "Agatha Junqueira", email: "agatha21@gmail.com", senha: "gatinha123", quantficha: 5, foto: "https://images.pexels.com/photos/15254860/pexels-photo-15254860.jpeg" },
   // { id: 2, idPerfil: "empresa", nome: "Restaurante Universitário", senha: "betinho59", foto: "https://international.unifei.edu.br/wp-content/uploads/2022/02/unifei-itabira.jpg" },
   // { id: 3, idPerfil: "empresa", nome: "Cantina da Maria", email: "gabiroba2009@gmail.com", senha: "dadinho53", foto: "https://static.wixstatic.com/media/ce3e5c_fc0ac53c0e074c609e64aa7574ac28f4~mv2.png" }];

  async function fazendologin(event) {

  event.preventDefault();

  // Busca os usuários cadastrados no Supabase
  const usuarios = await buscarUsuarios();

  const usuario = usuarios.find(

    (user) =>

      user.email === email &&
      user.senha === senha &&
      user.estado === 1

  );

  if (!usuario) {

    SetErro("*Email ou senha inválidos.");
    return;

  }

  // Guarda o usuário logado (vamos usar depois)
  localStorage.setItem(
    "usuarioLogado",
    JSON.stringify(usuario)
  );

  // Por enquanto todo usuário cadastrado é cliente
  navega("/PaginaInicial");

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
           <Link
              to="/EsqueceuSenha"
              onClick={() => {

                localStorage.setItem(
                  "emailRecuperacao",
                  email || ""
                );

              }}
            >
              Esqueceu a senha?
            </Link>
          <p>Ao clicar em Entrar, você concorda com os termos de serviço e de uso.</p>
        </div>
      </form>
    </>
  )
}

export default Login;


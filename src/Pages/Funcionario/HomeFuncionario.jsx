import "./indexFuncionario.css";
import HeaderF from './HeaderF';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiClock, FiCheck, FiSearch } from 'react-icons/fi'; //Usando react-icons


const pedidosMock = [
  { id: 26457, cliente: "Maria Luiza Silva", status: "pendente" },
  { id: 23486, cliente: "Maria Luiza Silva", status: "pendente" },
  { id: 26458, cliente: "Maria Luiza Silva", status: "concluido" },
  { id: 26457, cliente: "Maria Luiza Silva", status: "pendente" },
  { id: 23486, cliente: "Maria Luiza Silva", status: "pendente" },
  { id: 26458, cliente: "Maria Luiza Silva", status: "concluido" },
  { id: 26457, cliente: "Maria Luiza Silva", status: "pendente" },
  { id: 23486, cliente: "Maria Luiza Silva", status: "pendente" },
  { id: 26458, cliente: "Maria Luiza Silva", status: "concluido" },
  // ... adicionar mais para preencher a tela
];

/*function HomeFuncionario({ }) {

  const navega = useNavigate();
  return (
    <header className='head'>
      <h1 >Sabor Universitário</h1>
    </header>
  )
}
export default HeaderF;*/



function HomeFuncionario() {

  const navigate = useNavigate();

  // Estados da página
  const [pedidos, setPedidos] = useState(pedidosMock);
  const [busca, setBusca] = useState("");

  return (

    <div className="pagina-pedidos-funcionario">
      {/* HEADER */}

      <header className="headerfuncionario">
        <div className="perfilfuncionario">
          <div className="fotofuncionario"></div>
          <div>
            <p className="nomefuncionario">Usuário</p>
            <p className="funcionario">Funcionário</p>
          </div>
        </div>
        <h1>Sabor Universitário</h1>
      </header>

      {/*Conteudo principal (Busca e Grid)*/}

      <main className="conteudo-principal-funcionario">

        {/*Barra de busca*/}
        <div className="search-bar-funcionario">
          <input
            type="text"
            placeholder="Número do pedido ou nome do cliente"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <FiSearch className="icone-busca" />
        </div>

        {/*Grid de pedidos*/}
        <div className="grid-pedidos-funcionario">
          {pedidos.map((pedido, index) => (
            <OrderCard key={index} pedido={pedido} />
          ))}
        </div>

      </main>

    </div>
  )
}

export default HomeFuncionario;
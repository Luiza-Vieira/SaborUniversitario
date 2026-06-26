import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'


//COMPONENTES CRIADOS

//PRA TODOS

import Login from './Components/Login/Login'
import EsqueceuSenha from './Components/EsqueceuSenha/EsqueceuSenha'
import RedefinirSenha from './Components/RedefinirSenha/RedefinirSenha'
import SenhaSucesso from './Components/SenhaSucesso/SenhaSucesso'
import Switch from './Components/Switch/switch'



//CLIENTE

import Home from "./Pages/Cliente/Home";
import Header from './Pages/Cliente/Header'
import PaginaInicial from './Pages/Cliente/PaginaInicialCliente/PaginaInicial'
import Card_Cliente from './Pages/Cliente/Card_Cliente/Card_Cliente'
import Carrinho from "./Pages/Cliente/Carrinho";
import Detalhe from "./Pages/Cliente/Detalhe";
import Cartao from "./Pages/Cliente/Cartao";
import MeusPedidos from "./Pages/Cliente/MeusPedidos";
import Feedback from "./Pages/Cliente/Feedback";
import ResumoPedido from "./Pages/Cliente/ResumoPedido";
import PedidoFeito from "./Pages/Cliente/PedidoFeito";


//INSTITUIÇÃO


//EMPRESA

import Header_Empresa from './Pages/Empresa/Header_Empresa/Header_Empresa'
import TipoDeFormaPagamento from './Pages/Empresa/TipoDeFormaPagamento/TipoDeFormaPagamento'
import Forma_de_RecebimentoTrans from './Pages/Empresa/Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans'
import Forma_de_Recebimento_TelaPrincipal from './Pages/Empresa/Forma_de_Recebimento_TelaPrincipal/Forma_de_Recebimento_TelaPrincipal'
import TabTipoPagamentoPix from './Pages/Empresa/TabTipoPagamentoPix/TabTipoPagamentoPix'
import TabTipoPagamentoTrans from './Pages/Empresa/TabTipoPagamentoTrans/TabTipoPagamentoTrans'

//FUNCIONARIO

function App() {

  const [user, SetUser] = useState();

  return (
    <>
      <Routes>
        {/*Todos*/}
        <Route path='/' element={<Login />} />
        <Route path='/EsqueceuSenha' element={<EsqueceuSenha />} />
        <Route path='/RedefinirSenha' element={<RedefinirSenha />} />
        <Route path='/SenhaSucesso' element={<SenhaSucesso />} />
        <Route path='/Switch' element={<Switch />} />

        {/*CLIENTE*/}
        <Route path='/Card_Cliente' element={<Card_Cliente />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/PaginaInicial' element={<PaginaInicial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/detalhe/:categoria/:id"
          element={<Detalhe />} />
        <Route path="/cartao" element={<Cartao />} />
        <Route path="/meuspedidos" element={<MeusPedidos />} />
        <Route path="/resumo" element={<ResumoPedido />} />
        <Route path="/pedidofeito" element={<PedidoFeito />} />
        <Route path="/feedback" element={<Feedback />} />

        {/*EMPRESA*/}
        <Route path='/Header_Empresa' element={<Header_Empresa />} />
        <Route path='/TipodeFormaPagamento' element={<TipoDeFormaPagamento />} />
        <Route path='/Forma_de_RecebimentoTrans' element={<Forma_de_RecebimentoTrans />} />
        <Route path='/Forma_de_Recebimento_TelaPrincipal' element={<Forma_de_Recebimento_TelaPrincipal />} />
        <Route path='/TabTipoPagamentoPix' element={<TabTipoPagamentoPix />} />
        <Route path='/TabTipoPagamentoTrans' element={<TabTipoPagamentoTrans />} />
        {/*INSTITUIÇÃO*/}

        {/*FUNCIONÁRIO*/}
      </Routes >
    </>
  )
}

export default App;
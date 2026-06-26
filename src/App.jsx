
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

import Header_Cliente from './Pages/Cliente/Header_Cliente/Header_Cliente'
import Card_Cliente from './Pages/Cliente/Card_Cliente/Card_Cliente'
import PaginaInicial from './Pages/Cliente/PaginaInicialCliente/PaginaInicial'

//INSTITUIÇÃO


//EMPRESA

import Header_Empresa from './Pages/Empresa/Header_Empresa/Header_Empresa'
import TipoDeFormaPagamento from './Pages/Empresa/TipoDeFormaPagamento/TipoDeFormaPagamento'
import Forma_de_RecebimentoTrans from './Pages/Empresa/Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans'
import Forma_de_Recebimento_TelaPrincipal from './Pages/Empresa/Forma_de_Recebimento_TelaPrincipal/Forma_de_Recebimento_TelaPrincipal'
import TabTipoPagamentoPix from './Pages/Empresa/TabTipoPagamentoPix/TabTipoPagamentoPix'
import TabTipoPagamentoTrans from './Pages/Empresa/TabTipoPagamentoTrans/TabTipoPagamentoTrans'
import ProdutoIndex from './Pages/Produto/Index/Index';
import CadastrarProduto from './Pages/Produto/Cadastrar/Cadastrar';
import Dashboard from './Pages/Empresa/Dashboard/Dashboard';


//FUNCIONARIO

function App() {

  const [user, SetUser] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Todos*/}
          <Route path='/' element={<Login />} />
          <Route path='/EsqueceuSenha' element={<EsqueceuSenha />} />
          <Route path='/RedefinirSenha' element={<RedefinirSenha />} />
          <Route path='/SenhaSucesso' element={<SenhaSucesso />} />
          <Route path='/Switch' element={<Switch />} />
          {/*CLIENTE*/}
          <Route path='/Card_Cliente' element={<Card_Cliente />} />
          <Route path='/Header_Cliente' element={<Header_Cliente />} />
          <Route path='/PaginaInicial' element={<PaginaInicial />} />
          {/*EMPRESA*/}
          <Route path='/Header_Empresa' element={<Header_Empresa />} />
          <Route path='/TipodeFormaPagamento' element={<TipoDeFormaPagamento />} />
          <Route path='/Forma_de_RecebimentoTrans' element={<Forma_de_RecebimentoTrans />} />
          <Route path='/formas-recebimento' element={<Forma_de_Recebimento_TelaPrincipal />} />
          <Route path='/TabTipoPagamentoPix' element={<TabTipoPagamentoPix />} />
          <Route path='/TabTipoPagamentoTrans' element={<TabTipoPagamentoTrans />} />
          <Route path="/produtos" element={<ProdutoIndex />} />
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
          <Route path="/cadastrar-produto/:id" element={<CadastrarProduto />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes >

      </BrowserRouter >

    </>
  )
}

export default App


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
import Forma_de_Recebimento2 from './Pages/Empresa/Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans'
import Forma_de_RecebimentoTrans from './Pages/Empresa/Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans'

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
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

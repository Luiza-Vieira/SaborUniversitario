
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



//CLIENTE

import Header_Cliente from './Pages/Cliente/Header_Cliente/Header_Cliente'
import Card_Cliente from './Pages/Cliente/Card_Cliente/Card_Cliente'
import PaginaInicial from './Pages/Cliente/PaginaInicialCliente/PaginaInicial'

//INSTITUIÇÃO


//EMPRESA

import Header_Empresa from './Pages/Empresa/Header_Empresa/Header_Empresa'
import TipoDeFormaPagamento from './Pages/Empresa/TipoDeFormaPagamento/TipoDeFormaPagamento'

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
          {/*CLIENTE*/}
          <Route path='/Card_Cliente' element={<Card_Cliente />} />
          <Route path='/Header_Cliente' element={<Header_Cliente />} />
          <Route path='/PaginaInicial' element={<PaginaInicial />} />
          {/*EMPRESA*/}
          <Route path='/Header_Empresa' element={<Header_Empresa />} />
          <Route path='/TipodeFormaPagamento' element={<TipoDeFormaPagamento />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

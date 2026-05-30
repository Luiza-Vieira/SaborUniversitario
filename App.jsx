
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'



//COMPONENTES CRIADOS

//PRA TODOS

import Login from './Components/Login/Login'
import EsqueceuSenha from './Components/EsqueceuSenha/EsqueceuSenha'
import SenhaSucesso from './Components/SenhaSucesso/SenhaSucesso'


//CLIENTE

import Header_Cliente from './Pages/Cliente/Header_Cliente/Header_Cliente'
import Card_Cliente from './Pages/Cliente/Card_Cliente/Card_Cliente'

//INSTITUIÇÃO


//EMPRESA

//FUNCIONARIO

function App() {

  const [user, SetUser] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/EsqueceuSenha' element={<EsqueceuSenha />} />
          <Route path='/SenhaSucesso' element={<SenhaSucesso />} />
        </Routes>
        <Routes> //CLIENTE
          <Route path='/Card_Cliente' element={<Card_Cliente />} />
          <Route path='/Header_Cliente' element={<Header_Cliente />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

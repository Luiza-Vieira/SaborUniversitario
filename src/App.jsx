import { Route, Routes } from "react-router-dom";
import "./App.css";

// =====================================
// TODOS
// =====================================

import Login from "./Components/Login/Login";
import EsqueceuSenha from "./Components/EsqueceuSenha/EsqueceuSenha";
import RedefinirSenha from "./Components/RedefinirSenha/RedefinirSenha";
import SenhaSucesso from "./Components/SenhaSucesso/SenhaSucesso";
import Switch from "./Components/Switch/switch";

// =====================================
// CLIENTE
// =====================================

import Home from "./Pages/Cliente/Home";
import Header from "./Pages/Cliente/Header";
import PaginaInicial from "./Pages/Cliente/PaginaInicialCliente/PaginaInicial";
import Card_Cliente from "./Pages/Cliente/Card_Cliente/Card_Cliente";
import Carrinho from "./Pages/Cliente/Carrinho";
import Detalhe from "./Pages/Cliente/Detalhe";
import Cartao from "./Pages/Cliente/Cartao";
import MeusPedidos from "./Pages/Cliente/MeusPedidos";
import Feedback from "./Pages/Cliente/Feedback";
import ResumoPedido from "./Pages/Cliente/ResumoPedido";
import PedidoFeito from "./Pages/Cliente/PedidoFeito";

// =====================================
// EMPRESA
// =====================================

import Header_Empresa from "./Pages/Empresa/Header_Empresa/Header_Empresa";
import TipoDeFormaPagamento from "./Pages/Empresa/TipoDeFormaPagamento/TipoDeFormaPagamento";
import Forma_de_RecebimentoTrans from "./Pages/Empresa/Forma_de_RecebimentoTrans/Forma_de_RecebimentoTrans";
import Forma_de_Recebimento_TelaPrincipal from "./Pages/Empresa/Forma_de_Recebimento_TelaPrincipal/Forma_de_Recebimento_TelaPrincipal";
import TabTipoPagamentoPix from "./Pages/Empresa/TabTipoPagamentoPix/TabTipoPagamentoPix";
import TabTipoPagamentoTrans from "./Pages/Empresa/TabTipoPagamentoTrans/TabTipoPagamentoTrans";
import CadastrarCategoria from "./Pages/Empresa/CadastrarCategoria";
import CategoriasListas from "./Pages/Empresa/CategoriasListas";
import CadastrarBeneficio from "./Pages/Empresa/CadastrarBeneficio";


// =====================================
// FUNCIONÁRIO
// =====================================
import HeaderF from "./Pages/Funcionario/HeaderF";
import HomeFuncionario from "./Pages/Funcionario/HomeFuncionario";
import ConfirmarEntrega from "./Pages/Funcionario/ConfirmarEntrega";
import OrderCard from "./Pages/Funcionario/OrderCard";


// =====================================
// INSTITUIÇÃO
// =====================================

import Inicial from "./Pages/Instituição/Inicial";
import AddEmpresa from "./Pages/Instituição/empresas";
import AddCliente from "./Pages/Instituição/clientes";


// =====================================
// ROTAS
// =====================================

function App() {

  return (

    <Routes>

      {/* TODOS */}

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/EsqueceuSenha"
        element={<EsqueceuSenha />}
      />

      <Route
        path="/RedefinirSenha"
        element={<RedefinirSenha />}
      />

      <Route
        path="/SenhaSucesso"
        element={<SenhaSucesso />}
      />

      <Route
        path="/Switch"
        element={<Switch />}
      />

      {/* CLIENTE */}

      <Route
        path="/Card_Cliente"
        element={<Card_Cliente />}
      />

      <Route
        path="/Header"
        element={<Header />}
      />

      <Route
        path="/PaginaInicial"
        element={<PaginaInicial />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/carrinho"
        element={<Carrinho />}
      />

      <Route
        path="/detalhe/:categoria/:id"
        element={<Detalhe />}
      />

      <Route
        path="/cartao"
        element={<Cartao />}
      />

      <Route
        path="/meuspedidos"
        element={<MeusPedidos />}
      />

      <Route
        path="/resumo"
        element={<ResumoPedido />}
      />

      <Route
        path="/pedidofeito"
        element={<PedidoFeito />}
      />

      <Route
        path="/feedback"
        element={<Feedback />}
      />

      {/* EMPRESA */}

      <Route
        path="/Header_Empresa"
        element={<Header_Empresa />}
      />

      <Route
        path="/TipodeFormaPagamento"
        element={<TipoDeFormaPagamento />}
      />

      <Route
        path="/Forma_de_RecebimentoTrans"
        element={<Forma_de_RecebimentoTrans />}
      />

      <Route
        path="/Forma_de_Recebimento_TelaPrincipal"
        element={<Forma_de_Recebimento_TelaPrincipal />}
      />

      <Route
        path="/TabTipoPagamentoPix"
        element={<TabTipoPagamentoPix />}
      />

      <Route
        path="/TabTipoPagamentoTrans"
        element={<TabTipoPagamentoTrans />}
      />

      <Route path="/cadastrar-beneficio" element={<CadastrarBeneficio />} />

      <Route path="/" element={<CategoriasListas />} />

      <Route path="/cadastrar-categoria" element={<CadastrarCategoria />} />

      {/* FUNCIONÁRIO */}

      <Route
        path="/HeaderF"
        element={<HeaderF />}
      />

      <Route
        path="/OrderCard"
        element={<OrderCard />}
      />

      <Route
        path="/HomeFuncionario"
        element={<HomeFuncionario />}
      />

      <Route
        path="/ConfirmarEntrega/:id"
        element={<ConfirmarEntrega />}
      />

      {/* INSTITUIÇÃO */}

      <Route path="/" element={<Inicial />} />
      {/* Telas de cadastro */}

      <Route path="/cadastrar-empresa" element={<AddEmpresa />} />

      <Route path="/cadastrar-cliente" element={<AddCliente />} />


    </Routes>

  );

}

export default App;
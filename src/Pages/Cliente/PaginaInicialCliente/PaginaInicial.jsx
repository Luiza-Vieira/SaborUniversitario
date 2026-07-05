import "./PaginaInicial.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ru from "../../../assets/restaurantes/ru.png";
import maria from "../../../assets/restaurantes/cantina_maria.png";
import anexo3 from "../../../assets/restaurantes/anexo3.jpg";
import chiquinho from "../../../assets/restaurantes/chiquinho.jpg";
import juice from "../../../assets/restaurantes/juice.png";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Card_Cliente from "../Card_Cliente/Card_Cliente";

function PaginaInicial() {

  const navigate = useNavigate();

  const [sidebarAberta, setSidebarAberta] = useState(false);

  const sidebarRef = useRef(null);

  const [carrinho] = useState(() => {

    const carrinhoSalvo =
      localStorage.getItem("carrinho");

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : [];

  });

  useEffect(() => {

    function fecharSidebar(event) {

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {

        setSidebarAberta(false);

      }

    }

    document.addEventListener(
      "mousedown",
      fecharSidebar
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        fecharSidebar
      );

    };

  }, []);

        const restaurantes = [
        {
          nome: "Restaurante Universitário",
          img: ru
        },
        {
          nome: "Cantina da Maria",
          img: maria
        },
        {
          nome: "Cantina Anexo 3",
          img: anexo3
        },
        {
          nome: "Chiquinho",
          img: chiquinho
        },
        {
          nome: "Juice Fruit Mix",
          img: juice
        }
      ];

  return (

    <>

      <Sidebar
        sidebarAberta={sidebarAberta}
        sidebarRef={sidebarRef}
        navigate={navigate}
        setSidebarAberta={setSidebarAberta}
      />

      <Header
        sidebarAberta={sidebarAberta}
        setSidebarAberta={setSidebarAberta}
        carrinho={carrinho}
        navigate={navigate}
      />

      <div className="grad_card">

        {

          restaurantes.map((item) => (

            <Card_Cliente
              key={item.nome}
              rest={item.nome}
              img={item.img}
            />

          ))

        }

      </div>

    </>

  );

}

export default PaginaInicial;

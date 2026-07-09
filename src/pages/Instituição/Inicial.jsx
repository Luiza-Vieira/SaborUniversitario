import "./Inicial.css";
import Header from "./Header";
import PainelLista from "./PainelLista";

function Inicial() {
  // Criamos as listas de dados separadas
  const empresasFicticias = ["Cantina & Cia", "Saboreando"];
  const clientesFicticios = ["Débora Guanabara", "Guilherme Junqueira"];

  return (
    <div className="app">
      <Header />

      <main className="content">
        {/* Renderiza o painel de Empresas */}
        <PainelLista 
          titulo="Empresas"
          placeholder="Pesquise aqui o nome da empresa"
          itens={empresasFicticias}
          linkDestino="/cadastrar-empresa"
          textoBotao="Adicionar empresa"
        />

        {/* Renderiza o painel de Clientes usando o mesmo componente, só mudando os dados */}
        <PainelLista 
          titulo="Clientes"
          placeholder="Pesquise aqui o nome do cliente"
          itens={clientesFicticios}
          linkDestino="/cadastrar-cliente"
          textoBotao="Adicionar Cliente"
        />
      </main>
    </div>
  );
}

export default Inicial;
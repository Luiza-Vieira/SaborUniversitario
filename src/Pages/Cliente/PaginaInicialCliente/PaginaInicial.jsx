import './PaginaInicial.css'
import Header from '../Header';
import Card_Cliente from '../Card_Cliente/Card_Cliente';

//Aqui fica a página inicial do Cliente, o react entende e pega as informações que estão no vetor (o que seria nosso banco de dados) e envia pro componente Card_Cliente, pegando cada nome + img e enviando por vez, pra nao ter que ter 1392848 divs 

function PaginaInicial() {
    const restaurantes = [
        { nome: 'Restaurante Universitário', img: "https://s2.glbimg.com/XWjgVSDP1Qna4HD8N1No8yz2cvo=/1200x630/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/33/65/4006533" },
        { nome: 'Cantina da Maria', img: "https://static.wixstatic.com/media/ce3e5c_fc0ac53c0e074c609e64aa7574ac28f4~mv2.png" },
        { nome: 'Cantina Anexo 3', img: "https://international.unifei.edu.br/wp-content/uploads/2022/02/unifei-itabira.jpg" },
        { nome: 'Chiquinho', img: "https://static.wixstatic.com/media/ce3e5c_fc0ac53c0e074c609e64aa7574ac28f4~mv2.png" },
        { nome: "Juice Fruit Mix", img: "https://international.unifei.edu.br/wp-content/uploads/2022/02/unifei-itabira.jpg" }]

    return (
        <>
            <Header />
            <div className="grad_card">
                {restaurantes.map((item) =>
                (<Card_Cliente
                    key={item.nome}
                    rest={item.nome}
                    img={item.img}
                />
                ))}
            </div>
        </>
    );
}

export default PaginaInicial;

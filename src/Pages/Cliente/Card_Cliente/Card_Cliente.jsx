import './Card_Cliente.css'
import Header from '../Header';

//Usamos props quando queremos que a informação seja repassada 

//Criada para mostrar os restaurantes 

function Card_Cliente({ rest, img }) {
    return (
        <>
            <div className="card">
                <img src={img} alt={rest} className="img-card" />
                <h2 className="nome">{rest}</h2>
            </div>
        </>
    );
}

export default Card_Cliente;


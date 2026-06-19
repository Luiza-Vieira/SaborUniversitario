import './TipoDeFormaPagamento.css'

function TipoDeFormaPagamento() {
    const [toggled, setToggled] = useState(false);
    return (

        <>

            <h2>Forma de Pagamento</h2>
            <button className='SwitchPagamento'>
                <div>
                    <button className={'toggle-btn ${toggled ? "toggled" : ""}'} onClick={() => setToggled(!toggled)}
                    >
                        <div className='capa'></div>
                    </button>
                </div>
            </button>
            <div></div>
            <div></div>

        </>
    )
}
export default TipoDeFormaPagamento;

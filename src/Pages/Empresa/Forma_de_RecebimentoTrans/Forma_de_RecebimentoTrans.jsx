import './Forma_de_RecebimentoTrans.css'
import Header_Empresa from '../Header_Empresa/Header_Empresa';



function Forma_de_RecebimentoTrans() {
    return (
        <>
            <Header_Empresa />
            <div id="h2">
                <h2 className="h2pag">Pix</h2>
                <h2 className="h2pag">Transferência</h2>
            </div>
            <form action="." method="POST" className='formTrans'>
                <div>
                    <div >
                        <label htmlFor="titular">Nome do Titular <span className="text-red-500">*</span></label>
                        <input type="text" name="titular" id="titular" required />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF <span className="text-red-500">*</span></label >
                        <input type="number" name="cpf" id="cpf" required />
                    </div>
                </div>
                <div className='bloco'>
                    <div>
                        <label htmlFor="banco">Banco <span className="text-red-500">*</span>
                        </label>
                        <select name="banco" id="banco" required>
                            <span className="text-red-500">*</span>
                            <option value="" disabled selected>Selecione um banco</option>
                            <option value="001 - Banco do Brasil S.A.">001 - Banco do Brasil S.A.</option>
                            <option value="003 - Banco da Amazônia S.A.">003 - Banco da Amazônia S.A.</option>
                            <option value="004 - Banco do Nordeste do Brasil S.A.">004 - Banco do Nordeste do Brasil S.A.</option>
                            <option value="007 - Banco Nacional de Desenvolvimento Econômico e Social (BNDES)">007 - Banco Nacional de Desenvolvimento Econômico e Social (BNDES)</option>
                            <option value="012 - Banco Inbursa S.A.">012 - Banco Inbursa S.A.</option>
                            <option value="021 - Banco do Estado do Espírito Santo (Banestes)">021 - Banco do Estado do Espírito Santo (Banestes)</option>
                            <option value="024 - Banco de Pernambuco (BANDEPE)">024 - Banco de Pernambuco (BANDEPE)</option>
                            <option value="025 - Banco Alfa S.A.">025 - Banco Alfa S.A.</option>
                            <option value="029 - Banco Itaú Consignado S.A.">029 - Banco Itaú Consignado S.A.</option>
                            <option value="033 - Banco Santander (Brasil) S.A.">033 - Banco Santander (Brasil) S.A.</option>
                            <option value="036 - Banco Bradesco BBI S.A.">036 - Banco Bradesco BBI S.A.</option>
                            <option value="037 - Banco do Estado do Pará (Banpará)">037 - Banco do Estado do Pará (Banpará)</option>
                            <option value="040 - Banco Cargill S.A.">040 - Banco Cargill S.A.</option>
                            <option value="041 - Banrisul — Banco do Estado do Rio Grande do Sul">041 - Banrisul — Banco do Estado do Rio Grande do Sul</option>
                            <option value="047 - Banese — Banco do Estado de Sergipe S.A.">047 - Banese — Banco do Estado de Sergipe S.A.</option>
                            <option value="062 - Hipercard Banco Múltiplo S.A.">062 - Hipercard Banco Múltiplo S.A.</option>
                            <option value="063 - Bradescard S.A.">063 - Bradescard S.A.</option>
                            <option value="064 - Goldman Sachs do Brasil Banco Múltiplo S.A.">064 - Goldman Sachs do Brasil Banco Múltiplo S.A.</option>
                            <option value="065 - Banco Andbank (Brasil) S.A.">065 - Banco Andbank (Brasil) S.A.</option>
                            <option value="066 - Banco Morgan Stanley S.A.">066 - Banco Morgan Stanley S.A.</option>
                            <option value="069 - Banco Crefisa S.A.">069 - Banco Crefisa S.A.</option>
                            <option value="070 - BRB — Banco de Brasília S.A.">070 - BRB — Banco de Brasília S.A.</option>
                            <option value="074 - Banco J. Safra S.A.">074 - Banco J. Safra S.A.</option>
                            <option value="075 - Banco ABN AMRO S.A.">075 - Banco ABN AMRO S.A.</option>
                            <option value="076 - Banco KDB do Brasil S.A.">076 - Banco KDB do Brasil S.A.</option>
                            <option value="077 - Banco Inter S.A.">077 - Banco Inter S.A.</option>
                            <option value="082 - Banco Topázio S.A.">082 - Banco Topázio S.A.</option>
                            <option value="083 - Banco da China Brasil S.A.">083 - Banco da China Brasil S.A.</option>
                            <option value="094 - Banco Finaxis S.A.">094 - Banco Finaxis S.A.</option>
                            <option value="095 - Banco Travelex S.A.">095 - Banco Travelex S.A.</option>
                            <option value="096 - Banco B3 S.A.">096 - Banco B3 S.A.</option>
                            <option value="102 - XP Investimentos S.A.">102 - XP Investimentos S.A.</option>
                            <option value="104 - Caixa Econômica Federal">104 - Caixa Econômica Federal</option>
                            <option value="107 - BOCOM BBM S.A.">107 - BOCOM BBM S.A.</option>
                            <option value="117 - Advanced Corretora de Câmbio Ltda">117 - Advanced Corretora de Câmbio Ltda</option>
                            <option value="120 - Banco Rodobens S.A.">120 - Banco Rodobens S.A.</option>
                            <option value="121 - Banco Agibank S.A.">121 - Banco Agibank S.A.</option>
                            <option value="128 - Braza Bank S.A.">128 - Braza Bank S.A.</option>
                            <option value="172 - Albatross CCV S.A.">172 - Albatross CCV S.A.</option>
                            <option value="184 - Itaú BBA S.A.">184 - Itaú BBA S.A.</option>
                            <option value="204 - Bradesco Cartões S.A.">204 - Bradesco Cartões S.A.</option>
                            <option value="208 - BTG Pactual S.A.">208 - BTG Pactual S.A.</option>
                            <option value="217 - Banco John Deere S.A.">217 - Banco John Deere S.A.</option>
                            <option value="222 - Crédit Agricole Brasil S.A.">222 - Crédit Agricole Brasil S.A.</option>
                            <option value="233 - Banco Cifra S.A.">233 - Banco Cifra S.A.</option>
                            <option value="241 - Banco Clássico">241 - Banco Clássico</option>
                            <option value="254 - Paraná Banco S.A.">254 - Paraná Banco S.A.</option>
                            <option value="260 - Nu Pagamentos S.A. (Nubank)">260 - Nu Pagamentos S.A. (Nubank)</option>
                            <option value="265 - Banco Fator S.A.">265 - Banco Fator S.A.</option>
                            <option value="269 - HSBC Bank Brasil S.A.">269 - HSBC Bank Brasil S.A.</option>
                            <option value="280 - Avista S.A. Crédito">280 - Avista S.A. Crédito</option>
                            <option value="299 - Sorocred Crédito">299 - Sorocred Crédito</option>
                            <option value="313 - Amazônia Corretora de Câmbio Ltda">313 - Amazônia Corretora de Câmbio Ltda</option>
                            <option value="323 - Mercado Pago – Conta do Mercado Livre">323 - Mercado Pago – Conta do Mercado Livre</option>
                            <option value="336 - Banco C6 S.A.">336 - Banco C6 S.A.</option>
                            <option value="341 - Itaú Unibanco S.A.">341 - Itaú Unibanco S.A.</option>
                            <option value="349 - AL5 S.A. Crédito">349 - AL5 S.A. Crédito</option>
                            <option value="366 - Société Générale Brasil S.A.">366 - Société Générale Brasil S.A.</option>
                            <option value="367 - Vitreo Distribuidora de Títulos e Valores Mobiliários S.A.">367 - Vitreo Distribuidora de Títulos e Valores Mobiliários S.A.</option>
                            <option value="370 - Banco Mizuho do Brasil S.A.">370 - Banco Mizuho do Brasil S.A.</option>
                            <option value="376 - Banco J. P. Morgan S.A.">376 - Banco J. P. Morgan S.A.</option>
                            <option value="389 - Banco Mercantil do Brasil S.A.">389 - Banco Mercantil do Brasil S.A.</option>
                            <option value="394 - Bradesco Financiamentos S.A.">394 - Bradesco Financiamentos S.A.</option>
                            <option value="422 - Banco Safra S.A.">422 - Banco Safra S.A.</option>
                            <option value="456 - Banco MUFG Brasil S.A.">456 - Banco MUFG Brasil S.A.</option>
                            <option value="464 - Banco Sumitomo Mitsui Brasileiro S.A.">464 - Banco Sumitomo Mitsui Brasileiro S.A.</option>
                            <option value="473 - Caixa Geral – Brasil S.A.">473 - Caixa Geral – Brasil S.A.</option>
                            <option value="479 - ItaúBank S.A.">479 - ItaúBank S.A.</option>
                            <option value="487 - Deutsche Bank S.A. – Banco Alemão">487 - Deutsche Bank S.A. – Banco Alemão</option>
                            <option value="505 - Credit Suisse (Brasil) S.A.">505 - Credit Suisse (Brasil) S.A.</option>
                            <option value="610 - Banco VR S.A.">610 - Banco VR S.A.</option>
                            <option value="611 - Banco Paulista S.A.">611 - Banco Paulista S.A.</option>
                            <option value="612 - Banco Guanabara S.A.">612 - Banco Guanabara S.A.</option>
                            <option value="613 - Omni Banco S.A.">613 - Omni Banco S.A.</option>
                            <option value="623 - Banco Pan S.A.">623 - Banco Pan S.A.</option>
                            <option value="630 - Letsbank / Smartbank S.A.">630 - Letsbank / Smartbank S.A.</option>
                            <option value="633 - Banco Rendimento S.A.">633 - Banco Rendimento S.A.</option>
                            <option value="634 - Banco Triângulo S.A.">634 - Banco Triângulo S.A.</option>
                            <option value="643 - Banco Pine S.A.">643 - Banco Pine S.A.</option>
                            <option value="654 - Banco Digimais S.A.">654 - Banco Digimais S.A.</option>
                            <option value="655 - Banco Votorantim S.A.">655 - Banco Votorantim S.A.</option>
                            <option value="712 - Banco Ourinvest S.A.">712 - Banco Ourinvest S.A.</option>
                            <option value="741 - Banco Ribeirão Preto">741 - Banco Ribeirão Preto</option>
                            <option value="743 - Banco Semear S.A.">743 - Banco Semear S.A.</option>
                            <option value="746 - Banco Modal S.A.">746 - Banco Modal S.A.</option>
                            <option value="747 - Banco Rabobank International do Brasil S.A.">747 - Banco Rabobank International do Brasil S.A.</option>
                            <option value="748 - Sicredi – Sistema de Crédito Cooperativo">748 - Sicredi – Sistema de Crédito Cooperativo</option>
                            <option value="751 - Scotiabank Brasil S.A.">751 - Scotiabank Brasil S.A.</option>
                            <option value="755 - Bank of America Merrill Lynch Banco Múltiplo S.A.">755 - Bank of America Merrill Lynch Banco Múltiplo S.A.</option>
                            <option value="756 - Sicoob – Sistema de Cooperativas de Crédito">756 - Sicoob – Sistema de Cooperativas de Crédito</option>
                            <option value="757 - Banco KEB Hana do Brasil S.A.">757 - Banco KEB Hana do Brasil S.A.</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="tipodeconta">Tipo de Conta <span className="text-red-500">*</span>
                        </label>
                        <select name="tipodeconta" id="tipodeconta" required>
                            <span className="text-red-500">*</span>
                            <option value="" disabled selected>Selecione o tipo de conta</option>
                            <option value="contaCorrente">Conta Corrente</option>
                            <option value="ContaPoupança">Conta Poupança</option>
                        </select>
                    </div>
                </div>
                <div className='bloco'>
                    <div>
                        <label htmlFor="agencia">Agência <span className="text-red-500">*</span>
                        </label>
                        <input type="number" name="agencia" id="agencia" required />
                    </div>
                    <div>
                        <label htmlFor="numerodaConta">Número da Conta <span className="text-red-500">*</span>
                        </label>
                        <input type="number" name="numerodaConta" id="numerodaConta" required />
                    </div>
                </div>

                <button type='submit' className='salva'>Salvar</button>

            </form>
        </>
    );
}
export default Forma_de_RecebimentoTrans;
# Como Implementar Navegação por Abas (Tab Components)

Este guia prático descreve o procedimento para criar uma interface de abas dinâmicas, permitindo alternar visualizações sem a necessidade de criar novas rotas no navegador.

## Problema
A tela de **Forma de Recebimento da Empresa** precisa exibir diferentes formulários de configuração dependendo do tipo selecionado (PIX ou Transferência Bancária), sem sobrecarregar a tela principal com múltiplos inputs simultâneos.

## Solução
Implementou-se um estado controlador (`TabAtivo`) através do hook `useState`. O estado armazena um identificador textual da aba ativa e renderiza condicionalmente o componente visual correspondente por meio de operadores ternários no escopo do retorno do React (padrão conhecido como *Renderização Condicional*).

Abaixo está a implementação oficial aplicada na tela de gerenciamento dos tipos de recebimento do perfil empresa:

```jsx
import { useState } from 'react';
import Header_Empresa from '../Header_Empresa/Header_Empresa';
import TabTipoPagamentoPix from '../TabTipoPagamentoPix/TabTipoPagamentoPix';
import TabTipoPagamentoTrans from '../TabTipoPagamentoTrans/TabTipoPagamentoTrans';
import './Forma_de_Recebimento_TelaPrincipal.css';

function Forma_de_Recebimento_TelaPrincipal() {
    // Estado que governa qual identificador de aba está ativo
    const [TabAtivo, setTabAtivo] = useState("tab1");

    const handleTab1 = () => setTabAtivo("tab1");
    const handleTab2 = () => setTabAtivo("tab2");

    return (
        <>
            <Header_Empresa />
            <div className='BoxFormaRecebi'>
                <h2 className='FormaRecebiH2'>Forma de Recebimento</h2>
                
                {/* Abas de Navegação */}
                <ul className='nav'>
                    <li className={TabAtivo === "tab1" ? "active" : ""} onClick={handleTab1}>Pix</li>
                    <li className={TabAtivo === "tab2" ? "active" : ""} onClick={handleTab2}>Transferência</li>
                </ul>
                
                {/* Área de Renderização Dinâmica */}
                <div className='outlet'>
                    {TabAtivo === "tab1" ? <TabTipoPagamentoPix /> : <TabTipoPagamentoTrans />}
                </div>
            </div>
        </>
    );
}

export default Forma_de_Recebimento_TelaPrincipal;```

## Links Úteis e Referência

A lógica de estados para a alternância de abas neste componente foi baseada nas práticas recomendadas documentadas em:

* **Artigo Base:** [ReactJS Tab Component - SoaresDev](https://blog.soaresdev.com/reactjs-tab-component/)
* **Documentação Oficial:** [Gerenciamento de Estado no React (react.dev)](https://react.dev/learn/sharing-state-between-components)
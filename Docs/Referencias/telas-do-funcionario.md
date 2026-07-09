# Área do Funcionário - Sabor Universitário

Este documento detalha a estrutura técnica e os componentes desenvolvidos para a interface de gestão de pedidos dos funcionários.

## Telas e Componentes

### 1. `HomeFuncionario.jsx`
Página principal do painel do funcionário, responsável por listar os pedidos ativos e finalizados.
* **Estado (State):** 
  * `pedidos`: Gerencia a lista de pedidos (atualmente consumindo `pedidosMock`).
  * `busca`: Armazena o termo digitado na barra de pesquisa superior.
* **Componente Auxiliar (`OrderCard`):** Recebe os dados de um pedido via *props* e renderiza um cartão individual. Ao ser clicado, utiliza o hook `useNavigate` do `react-router-dom` para redirecionar o usuário para a rota dinâmica `/confirmar-entrega/:id`.
* **Estilização:** Utiliza CSS Grid no arquivo `indexFuncionario.css` para responsividade dos cartões (3 colunas no desktop, adaptando para 2 e 1 em telas menores).

### 2. `ConfirmarEntrega.jsx`
Página de detalhes de um pedido específico, responsável por exibir os itens e permitir a alteração de status.
* **Rotas Dinâmicas:** Utiliza o hook `useParams` para extrair o `id` do pedido diretamente da URL, permitindo buscar dinamicamente os dados no banco futuramente.
* **Renderização Condicional:** Utiliza o estado booleano `pedidoEntregue`.
  * Quando `false`: Exibe o botão de confirmação e a tag laranja de "Pedido em andamento".
  * Quando `true`: Oculta o botão e altera a tag para verde ("Pedido entregue").
* **Navegação:** O botão voltar utiliza a função `navigate('/home-funcionario')` para retornar à listagem sem recarregar a aplicação (SPA).
* **Estilização:** Isolada no arquivo `ConfirmarEntrega.css`.

### 3. Componentes Globais Utilizados
* `HeaderF.jsx`: Cabeçalho simples importado no topo das telas.

# Como Gerenciar Pedidos e Entregas

Este guia explica como os funcionários do Sabor Universitário devem utilizar o sistema para visualizar e dar baixa nas entregas dos clientes.

## 1. Acessando o Painel
Ao fazer login como funcionário, você será direcionado para a **Página Inicial de Pedidos**. 
Nesta tela, você verá:
* Uma barra de busca para encontrar pedidos específicos (por número ou nome do cliente).
* Uma grade de cartões contendo todos os pedidos do dia.
* Ícones indicativos: O relógio indica que o pedido está pendente, enquanto o visto verde indica que já foi concluído.

## 2. Visualizando os Detalhes de um Pedido
1. Na lista principal, clique sobre o cartão do pedido que você deseja visualizar.
2. Você será direcionado para a tela de **Detalhes do Pedido**, onde constará o número de identificação exato no topo da tela.
3. Confira a lista de itens solicitados (ex: Pão de queijo, Café) e atente-se às **observações** destacadas abaixo de cada item (ex: "sem açúcar").

## 3. Confirmando a Entrega
Após separar os itens e entregar o pedido ao cliente:
1. Na tela de Detalhes do Pedido, localize o botão laranja **"Confirmar entrega do pedido"** no centro da tela.
2. Ao clicar, o sistema registrará a entrega automaticamente.
3. O status na parte inferior da tela mudará imediatamente para **"Pedido entregue"** (em verde).

## 4. Retornando à Lista
Para voltar e atender o próximo cliente, clique no botão **"<- Voltar"** no canto superior esquerdo da tela. Você retornará ao painel inicial.
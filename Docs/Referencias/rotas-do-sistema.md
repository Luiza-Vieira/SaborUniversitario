# Rotas do sistema

| Rota         | Página               |
| ------------ | -------------------- |
| /            | Home                 |
| /carrinho    | Carrinho             |
| /cartao      | Cadastro de Cartão   |
| /resumo      | Resumo do Pedido     |
| /pedidofeito | Pedido Finalizado    |
| /meuspedidos | Histórico de Pedidos |


### Área do Funcionário
As rotas abaixo são de acesso restrito ao perfil de funcionário:

* `/home-funcionario`: Renderiza o componente `<HomeFuncionario />`. É o painel principal com a listagem em grade de todos os pedidos.
* `/confirmar-entrega/:id`: Rota dinâmica que renderiza o componente `<ConfirmarEntrega />`. O parâmetro `:id` na URL representa o número único de identificação do pedido selecionado para detalhamento.
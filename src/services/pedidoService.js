import { supabase } from "./supabase";
import { buscarClientePorUsuario } from "./clienteService";

export async function salvarPedido(
  valorTotal,
  formaPagamento,
  carrinho
) {

  // ==========================
  // Usuário logado
  // ==========================

  const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
  );

  if (!usuarioLogado) {

    alert("Nenhum usuário está logado.");
    return null;

  }

  // ==========================
  // Busca cliente
  // ==========================

  const cliente = await buscarClientePorUsuario(
    usuarioLogado.id
  );

  if (!cliente) {

    alert("Cliente não encontrado.");
    return null;

  }

  // ==========================
  // Salva pedido
  // ==========================

  const { data: pedido, error } =
    await supabase

      .from("pedidos")

      .insert([
        {

          idforma_pagamento: formaPagamento,

          data_hora: new Date().toISOString(),

          valor_total: valorTotal,

          idcliente: cliente.id

        }

      ])

      .select()

      .single();

  if (error) {

    console.log(error);

    return null;

  }

  // ==========================
  // Salva produtos do pedido
  // ==========================

  const itens = carrinho.map((produto) => ({

    idpedido: pedido.id,

    idproduto: produto.id,

    quantidade: produto.quantidade

  }));

  const { error: erroItens } =
    await supabase

      .from("pedidos_produtos")

      .insert(itens);

  if (erroItens) {

    console.log(erroItens);

  }

  return pedido;

}

// ==========================================
// BUSCAR PEDIDOS DO CLIENTE
// ==========================================

export async function buscarPedidosCliente() {

  const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
  );

  if (!usuarioLogado) return [];

  const cliente = await buscarClientePorUsuario(
    usuarioLogado.id
  );

  if (!cliente) return [];

  const { data, error } = await supabase

    .from("pedidos")

    .select("*")

    .eq("idcliente", cliente.id)

    .order("data_hora", {
      ascending: false
    });

  if (error) {

    console.log(error);

    return [];

  }

  return data;

}

// ==========================================
// BUSCAR ITENS DO PEDIDO
// ==========================================

export async function buscarItensPedido(idPedido) {

  // Busca os itens do pedido
  const { data: itensPedido, error } = await supabase
    .from("pedidos_produtos")
    .select("*")
    .eq("idpedido", idPedido);

  if (error) {

    console.log(error);

    return [];

  }

  // Se não houver itens
  if (itensPedido.length === 0) {

    return [];

  }

  const idsProdutos = itensPedido.map(

    item => item.idproduto

  );

  // Busca os produtos
  const { data: produtos, error: erroProdutos } =
    await supabase

      .from("produtos")

      .select("*")

      .in("id", idsProdutos);

  if (erroProdutos) {

    console.log(erroProdutos);

    return [];

  }

  // Junta produto + quantidade
  const itens = itensPedido.map(item => {

    const produto = produtos.find(

      p => p.id === item.idproduto

    );

    return {

      ...produto,

      quantidade: item.quantidade

    };

  });

  return itens;

}
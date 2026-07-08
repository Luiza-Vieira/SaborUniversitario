import { supabase } from "./supabase";
import { buscarClientePorUsuario } from "./clienteService";

export async function salvarPedido(valorTotal, formaPagamento) {

  // Usuário logado
  const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
  );

  if (!usuarioLogado) {

    alert("Nenhum usuário está logado.");
    return null;

  }

  // Busca o cliente correspondente ao usuário
  const cliente = await buscarClientePorUsuario(
    usuarioLogado.id
  );

  if (!cliente) {

    alert("Cliente não encontrado.");
    return null;

  }

  // Salva o pedido
  const { data, error } = await supabase
    .from("pedidos")
    .insert([
      {
        idforma_pagamento: formaPagamento,
        data_hora: new Date().toISOString(),
        valor_total: valorTotal,
        idcliente: cliente.id
      }
    ])
    .select();

  if (error) {

    console.log(error);
    alert(error.message);
    return null;

  }

  return data;

}
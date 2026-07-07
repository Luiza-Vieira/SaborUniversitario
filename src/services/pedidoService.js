import { supabase } from "./supabase";

export async function salvarPedido(valorTotal, formaPagamento) {

  const { data, error } = await supabase
    .from("pedidos")
    .insert([
      {
        idforma_pagamento: formaPagamento,
        data_hora: new Date(),
        valor_total: valorTotal,
        idcliente: 1
      }
    ])
    .select();

   if (error) {

    console.log("ERRO SUPABASE:");
    console.log(error);

    alert(error.message);

    return null;

    }

  return data;

}
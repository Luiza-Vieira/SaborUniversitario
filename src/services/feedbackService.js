import { supabase } from "./supabase";

// =====================================
// SALVAR FEEDBACK
// =====================================

export async function salvarFeedback(
  idPedido,
  comentario
) {

  const { data, error } = await supabase

    .from("feedbacks")

    .insert([
      {

        idpedido: idPedido,

        comentario: comentario,

        data_hora: new Date().toISOString(),

        estado: true

      }

    ])

    .select()

    .single();

  if (error) {

    console.error("ERRO AO SALVAR FEEDBACK:");

    console.error(error);

    alert(error.message);

    return null;

  }

  console.log("Feedback salvo:", data);

  return data;

}

// =====================================
// BUSCAR FEEDBACK DO PEDIDO
// =====================================

export async function buscarFeedbackPedido(
  idPedido
) {

  const { data, error } = await supabase

    .from("feedbacks")

    .select("*")

    .eq("idpedido", idPedido)

    .eq("estado", true)

    .order("data_hora", {
      ascending: false
    })

    .limit(1)

    .maybeSingle();

  if (error) {

    console.error("ERRO AO BUSCAR FEEDBACK:");

    console.error(error);

    return null;

  }

  console.log("Feedback encontrado:", data);

  return data;

}
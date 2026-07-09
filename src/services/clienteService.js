import { supabase } from "./supabase";

export async function buscarClientePorUsuario(idUsuario) {

    const { data: cliente, error } = await supabase
        .from("clientes")
        .select("*")
        .eq("idusuario", idUsuario)
        .single();

    if (error) {
        console.log(error);
        return null;
    }

    const { data: usuario } = await supabase
        .from("usuarios")
        .select("nome,email")
        .eq("id", idUsuario)
        .single();

    return {
        ...cliente,
        nome: usuario?.nome,
        email: usuario?.email
    };

}

// =====================================
// ATUALIZAR FICHAS
// =====================================

export async function atualizarFichas(
  idCliente,
  quantidade
) {

  const { error } = await supabase

    .from("clientes")

    .update({

      fichas: quantidade

    })

    .eq("id", idCliente);

  if (error) {

    console.log(error);

    return false;

  }

  return true;

}
import { supabase } from "./supabase";

export async function buscarUsuarios() {

  const { data, error } = await supabase
    .from("usuarios")
    .select("*");

  if (error) {

    console.log(error);
    return [];

  }

  return data;

}

export async function buscarUsuarioPorEmail(email) {

  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {

    console.log(error);
    return null;

  }

  return data;

}

export async function atualizarSenha(email, novaSenha) {

  const { error } = await supabase
    .from("usuarios")
    .update({
      senha: novaSenha
    })
    .eq("email", email);

  if (error) {

    console.log(error);

    return false;

  }

  return true;

}
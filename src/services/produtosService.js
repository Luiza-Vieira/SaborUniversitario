import { supabase } from "./supabase";

export async function buscarProdutos() {

  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .order("id");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    return [];
  }

  return data;
}

export async function buscarProdutoPorId(id) {

  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {

    console.log(error);
    return null;

  }

  return data;

}
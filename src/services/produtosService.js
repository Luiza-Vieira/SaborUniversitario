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
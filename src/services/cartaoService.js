import { supabase } from "./supabase";

// =====================================
// BUSCAR CARTÕES
// =====================================

export async function buscarCartoes(idCliente) {

    const { data, error } = await supabase
        .from("cartoes")
        .select("*")
        .eq("idcliente", idCliente);

    if (error) {

        console.log(error);
        return [];

    }

    return data;

}

// =====================================
// CADASTRAR CARTÃO
// =====================================

export async function cadastrarCartao(cartao) {

    const { data, error } = await supabase
        .from("cartoes")
        .insert([cartao])
        .select();

    if (error) {

        console.log(error);
        return null;

    }

    return data[0];

}

// =====================================
// EXCLUIR CARTÃO
// =====================================

export async function excluirCartao(idCartao) {

    const { error } = await supabase
        .from("cartoes")
        .delete()
        .eq("id", idCartao);

    return !error;

}
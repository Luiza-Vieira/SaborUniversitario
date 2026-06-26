import "../index.css";

function ProductCard({
  produto,
  index,
  categoria,
  quantidades,
  aumentar,
  diminuir,
  adicionarCarrinho,
  navigate
}) {
  return (
    <div className="card">

      {/* IMAGEM */}
      <div
        className="img-produto"
        style={{
          backgroundImage: `url(${produto.imagem})`
        }}
        onClick={() =>
          navigate(
            `/detalhe/${categoria}/${index}`
          )
        }
      ></div>

      {/* NOME */}
      <h4>
        {produto.nome}
      </h4>

      {/* PREÇO */}
      <p>
        {produto.preco}
      </p>

      {/* CONTROLE */}
      <div className="controle">

        <button
          onClick={() =>
            diminuir(produto.nome)
          }
        >
          -
        </button>

        <span>
          {
            quantidades[
              produto.nome
            ] || 1
          }
        </span>

        <button
          onClick={() =>
            aumentar(produto.nome)
          }
        >
          +
        </button>

      </div>

      {/* BOTÃO */}
      <button
        className="btn"
        onClick={() =>
          adicionarCarrinho(produto)
        }
      >
        Adicionar
      </button>

    </div>
  );
}

export default ProductCard;
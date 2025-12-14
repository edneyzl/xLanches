import { useEffect, useState } from "react";
import "../index.css";

function Cardapio() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <section
      id="cardapio"
      className="w-full h-auto bg-white flex-col cardapio title-c"
    >
      <h1>Nosso cardápio</h1>
      <h3>Peça os melhores lanches.</h3>

      <ul className="grid grid-cols-3 mt-6 w-full gap-7">
        {produtos.map((produto) => (
          <li key={produto.id} className="list-none">
            <img
              src={`/assets/${produto.imagemUrl}`}
              alt={produto.nome}
              className="w-full"
            />

            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <h2>R$ {produto.preco.toFixed(2)}</h2>

            <button>Comprar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cardapio;
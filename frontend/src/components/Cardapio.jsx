import { useEffect, useState } from "react";
import "../index.css";

function Cardapio() {

    // ===== ADICIONE ESTES ESTADOS NO TOPO =====
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // ===== ADICIONE ESTAS FUNÇÕES =====
  const openBuyModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleBuy = () => {
      alert(
    `Pedido realizado!\n\n` +
    `Produto: ${selectedProduct.nome}\n` +
    `Quantidade: ${quantity}\n` +
    `Frete: ${calcularFrete() === 0 ? "Grátis" : `R$ ${calcularFrete().toFixed(2)}`}\n` +
    `Total: R$ ${calcularTotal().toFixed(2)}`
  );
    closeModal();
  };

  const calculateSubTotal = () => {
    if (!selectedProduct) return 0;
    return selectedProduct.preco * quantity;
  };

  const FRETE_DEFAULT = 3;

  const calcularFrete = () => {
  if (!selectedProduct) return 0;
  return selectedProduct.preco >= 20 ? 0 : FRETE_DEFAULT;
  };

  const calcularTotal = () => {
  return calculateSubTotal() + calcularFrete();
  };
  


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

            <button onClick={() => openBuyModal(produto)}>Comprar</button>
          </li>
        ))}

              {/* ===== COLE O MODAL AQUI NO FINAL, ANTES DO </div> DE FECHAMENTO ===== */}
      {isModalOpen && selectedProduct && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-9999 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideIn">
            {/* Header do Modal */}
            <div className="relative">
              <img 
                src={`/assets/${selectedProduct.imagemUrl}`}
                alt={selectedProduct.nome}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <span className="text-2xl text-gray-600">✕</span>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-3xl font-bold text-white">
                  {selectedProduct.nome}
                </h2>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 space-y-6">
              {/* Descrição */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Descrição</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProduct.descricao}
                </p>
              </div>

              {/* Preço Unitário */}
              <div className="bg-orange-50 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Preço Unitário:</span>
                  <span className="text-2xl font-bold text-orange-600">
                    R$ {selectedProduct.preco.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Controle de Quantidade */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Quantidade</h3>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl transition-all ${
                      quantity === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200 active:scale-95'
                    }`}
                  >
                    −
                  </button>
                  
                  <div className="w-24 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{quantity}</span>
                  </div>
                  
                  <button
                    onClick={increaseQuantity}
                    className="w-12 h-12 bg-orange-100 text-orange-600 hover:bg-orange-200 rounded-full flex items-center justify-center font-bold text-2xl transition-all active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Resumo do Pedido */}
              <div className="cardapio-cor p-6 rounded-xl text-white">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-90">Subtotal ({quantity}x):</span>
                    <span className="font-semibold">R$ {calculateSubTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-90">Taxa de entrega:</span>
                    <span className="font-semibold">{calcularFrete() === 0 ? "Grátis" : `R$ ${calcularFrete()},00`}</span>
                  </div>
                  <div className="border-t border-white border-opacity-30 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-3xl font-bold">R$ {calcularTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleBuy}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span className="text-xl">✓</span>
                  Finalizar Pedido
                </button>
              </div>

              {/* Informações Adicionais */}
              <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                <div>
                  <p className="text-sm text-blue-900 font-medium">Informação</p>
                  <p className="text-sm text-blue-700">
                    Tempo médio de preparo: 20-30 minutos. Entrega grátis para pedidos acima de R$ 20,00.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

            {/* ===== ADICIONE ESTE STYLE TAMBÉM ===== */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>

      </ul>
    </section>

    

  );
}

export default Cardapio;
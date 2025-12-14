import "../index.css";

function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1 - Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12" src="/assets/logo.png" alt="xLanches Logo" />
              <h2 className="text-3xl font-bold text-orange-500">xLanches</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Os melhores lanches artesanais da região. 
              Qualidade, sabor e atendimento excepcional desde 2024.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <span className="text-xl">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">▸</span> Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">▸</span> Cardápio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">▸</span> Sobre Nós
                </a>
              </li>
              <li>
                <a href="#footer" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">▸</span> Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-orange-500">📞</span>
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <a href="tel:11999999999" className="text-white hover:text-orange-500 transition-colors font-medium">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl text-orange-500">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:contato@xlanches.com" className="text-white hover:text-orange-500 transition-colors font-medium">
                    contato@xlanches.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl text-orange-500">📍</span>
                <div>
                  <p className="text-gray-400 text-sm">Endereço</p>
                  <p className="text-white font-medium">
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl text-orange-500">📸</span>
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <a href="https://instagram.com/xlanches" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors font-medium">
                    @xlanches
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} xLanches. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import "../index.css";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextCreate";

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    setIsDropdownOpen(false);
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img className="logo" src="/assets/logo.png" alt="" />
        <h1 className="text-white text-3xl font-semibold ml-5">xLanches</h1>
      </div>

      <nav className="text-white space-x-10 font-regular text-lg">
        <a className="link" href="#inicio">
          Início
        </a>
        <a className="link" href="#cardapio">
          Cardápio
        </a>
        <a className="link" href="#about">
          Sobre
        </a>
        <a className="link" href="#footer">
          Contato
        </a>
        {user && user.role === "ADMIN" && (
          <a 
            className="link cursor-pointer" 
            onClick={() => navigate("/produtos")}
          >
            Área Restrita
          </a>
        )}
      </nav>

      {user ? (
        <div className="flex items-center space-x-4 mr-4 relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn-entrar flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="text-2xl">👤</span>
            Olá, {user.nome}
            <span className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {/* Dropdown Flutuante */}
          {isDropdownOpen && (
            <div 
              className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn"
              style={{
                animation: 'slideDown 0.3s ease-out'
              }}
            >
              {/* Header do Card */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl">
                    {user.role === "ADMIN" ? "👑" : "👤"}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{user.nome}</h3>
                    <span className="inline-block px-3 py-1 bg-white rounded-full text-orange-600 text-sm mt-1 font-semibold">
                      {user.role === "ADMIN" ? "Administrador" : "Usuário"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Email</p>
                    <p className="text-gray-800 font-medium">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Função</p>
                    <p className="text-gray-800 font-medium">
                      {user.role === "ADMIN" ? "Administrador" : "Usuário"}
                    </p>
                  </div>
                </div>

                {user.role === "ADMIN" && (
                  <div className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <p className="text-xs text-orange-600 font-semibold uppercase">Acesso Especial</p>
                      <p className="text-gray-700 text-sm">Você tem permissões administrativas</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span className="text-xl">🚪</span>
                  Sair da Conta
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button className="btn-entrar m-4" onClick={() => navigate("/login")}>
          Entrar
        </button>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
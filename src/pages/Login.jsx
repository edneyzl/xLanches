import "../index.css"
import {useState,useContext} from "react";
import {AuthContext} from "../context/AuthContextCreate"
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (res.ok) {
        const usuario = await res.json();
        setUser(usuario); // salva no contexto
        navigate("/");     // volta para Home
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    }
  };


  return (
    <div className="grid grid-cols-2 h-screen">
      
      {/* Lado esquerdo - imagem */}
      <div className="flex items-center justify-center bg-white back-login">
        <img
          src="/assets/login.png"
          alt="Login"
          className="w-3/4 h-auto"
        />
      </div>

      {/* Lado direito - formulário */}
      <div className="flex items-center justify-center bg-white back-login">

        <form onSubmit={handleSubmit} className="w-3/4 max-w-md p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          
          <button
            type="submit"
            className="w-full text-white p-3 rounded botaoLogin"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
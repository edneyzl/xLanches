import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <AuthProvider>
    <Router>

      {/* Rotas da aplicação */}
      <Routes>
        {/* Home continua sendo a rota principal */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Products />} />
      </Routes>

    </Router>
    </AuthProvider>
  );
}

export default App;
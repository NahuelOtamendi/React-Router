import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  //windows.location es un objeto
  //una de sus propiedades es pathname que da el inico de la ruta donde se encuenta.

  //Route es la ruta y necesita dos condiciones el Path y el elemento a mostrar
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

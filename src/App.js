import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home.jsx";
import Page404 from "./pages/Page404";
import Sobre from "./pages/Sobre.jsx";
import Header from "./componentes/Header";
import Post from "./pages/Posts";

//Se importa el Router, las rutas y la ruta
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

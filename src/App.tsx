
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import CadastraUsuario from './paginas/cadastraUsuario/CadastraUsuario';
import Login from './paginas/login/Login';
import "./App.css";



function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/home' element= {<Home />} />
          <Route path="/cadastrausuario" element={<CadastraUsuario/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;

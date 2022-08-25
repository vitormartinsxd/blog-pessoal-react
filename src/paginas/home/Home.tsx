import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="barra">
        <a href="">
        <h2 className="titulo">BlogPessoal</h2>
        </a>
        <a href="">
        <h4 className="titulo">Home</h4>
        </a>
        <a href="">
        <h4 className="titulo">Postagens</h4>
        </a>
        <a href="">
        <h4 className="titulo">Temas</h4>
        </a>
        <a href="">
        <h4 className="titulo">Cadastrar Tema</h4>
        </a>
        <a href="">
        <h4 className="titulo">Sair</h4>
        </a>
        <img className="img" src="https://i.imgur.com/H88yIo2.png" alt="Imagem" />
        <h4 className="sub">Todas as postagens</h4>
        <h4 className="sub">Sobre nós</h4>
      </div>

    </>
  );
}

export default Home;

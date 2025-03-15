import { useState } from "react";

export default function User() {
  const [nome, setNome] = useState("catanacomics");
  const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

  function trocarNome() {
    const novoNome = prompt("Qual é o seu nome?");
    if (novoNome) {
      setNome(novoNome);
    }
  }

  function trocarImagem() {
    const novaImagem = prompt("Digite o link da sua nova foto de perfil:");
    if (novaImagem) {
      setImagem(novaImagem);
    }
  }

  return (
    <div className="usuario">
      <img src={imagem} alt="imagem de perfil" onClick={trocarImagem} />
      <div className="texto">
        <span>
          <strong>{nome}</strong>
          <ion-icon name="pencil" onClick={trocarNome}></ion-icon>
        </span>
      </div>
    </div>
  );
} 
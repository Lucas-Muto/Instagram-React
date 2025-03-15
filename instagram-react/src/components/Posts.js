import { useState } from "react";

export default function Posts() {
  const posts = [
    {
      usuario: "meowed",
      imagemUsuario: "assets/img/meowed.svg",
      conteudo: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      numeroCurtidas: 101523
    },
    {
      usuario: "barked",
      imagemUsuario: "assets/img/barked.svg",
      conteudo: "assets/img/dog.svg",
      curtidoPor: "adorable_animals",
      numeroCurtidas: 99159
    },
    {
      usuario: "meowed",
      imagemUsuario: "assets/img/meowed.svg",
      conteudo: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      numeroCurtidas: 87523
    }
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

function Post({ usuario, imagemUsuario, conteudo, curtidoPor, numeroCurtidas }) {
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [numCurtidas, setNumCurtidas] = useState(numeroCurtidas);

  function curtirPost() {
    if (!curtido) {
      setNumCurtidas(numCurtidas + 1);
    } else {
      setNumCurtidas(numCurtidas - 1);
    }
    setCurtido(!curtido);
  }

  function curtirImagem() {
    if (!curtido) {
      setNumCurtidas(numCurtidas + 1);
      setCurtido(true);
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagemUsuario} alt={usuario} />
          {usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo" onClick={curtirImagem}>
        <img src={conteudo} alt="post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon 
              name={curtido ? "heart" : "heart-outline"}
              onClick={curtirPost}
              style={curtido ? {color: "red"} : {}}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon 
              name={salvo ? "bookmark" : "bookmark-outline"}
              onClick={() => setSalvo(!salvo)}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/img/${curtidoPor}.svg`} alt={curtidoPor} />
          <div className="texto">
            Curtido por <strong>{curtidoPor}</strong> e <strong>outras {numCurtidas.toLocaleString('pt-BR')} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
} 
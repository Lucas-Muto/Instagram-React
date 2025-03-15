export default function Suggestions() {
  const sugestoes = [
    {
      nome: "bad.vibes.memes",
      imagem: "assets/img/bad.vibes.memes.svg",
      razao: "Segue você"
    },
    {
      nome: "chibirdart",
      imagem: "assets/img/chibirdart.svg",
      razao: "Segue você"
    },
    {
      nome: "razoesparaacreditar",
      imagem: "assets/img/razoesparaacreditar.svg",
      razao: "Novo no Instagram"
    },
    {
      nome: "adorable_animals",
      imagem: "assets/img/adorable_animals.svg",
      razao: "Segue você"
    },
    {
      nome: "smallcutecats",
      imagem: "assets/img/smallcutecats.svg",
      razao: "Segue você"
    }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((sugestao, index) => (
        <Suggestion key={index} {...sugestao} />
      ))}
    </div>
  );
}

function Suggestion({ nome, imagem, razao }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagem} alt={nome} />
        <div className="texto">
          <div className="nome">{nome}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
} 
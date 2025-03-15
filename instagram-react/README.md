# Instagram React

Este projeto é uma implementação do Instagram utilizando React, desenvolvido como parte do bootcamp da Driven Education. O objetivo é recriar a interface do Instagram usando componentes React e implementar funcionalidades interativas.

## Funcionalidades Implementadas

- Layout responsivo similar ao Instagram
- Stories com navegação
- Posts com funcionalidades de:
  - Like (clique no coração ou duplo clique na imagem)
  - Salvar post
  - Contagem dinâmica de likes
- Sidebar com:
  - Perfil do usuário editável (nome e imagem)
  - Sugestões de usuários para seguir

## Tecnologias Utilizadas

- React
- HTML5
- CSS3
- JavaScript
- Ion Icons

## Como executar o projeto

1. Clone este repositório
```bash
git clone https://seu-repositorio/instagram-react.git
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm start
```

O projeto estará disponível em `http://localhost:3000`

## Estrutura do Projeto
instagram-react/
├── public/
│ ├── css/
│ │ ├── reset.css
│ │ └── style.css
│ ├── assets/
│ │ └── img/
│ └── index.html
└── src/
├── components/
│ ├── App.js
│ ├── Body.js
│ ├── NavBar.js
│ ├── Posts.js
│ ├── Stories.js
│ ├── Suggestions.js
│ ├── SideBar.js
│ └── User.js
└── index.js


## Componentes

- **App**: Componente principal que organiza toda a aplicação
- **NavBar**: Barra de navegação superior com logo e ícones
- **Body**: Organiza o feed principal e a sidebar
- **Stories**: Exibe os stories dos usuários
- **Posts**: Lista de posts do feed
- **SideBar**: Barra lateral com perfil e sugestões
- **User**: Componente do usuário com funções de edição
- **Suggestions**: Lista de sugestões de usuários para seguir

## Funcionalidades Interativas

1. **Edição de Perfil**
   - Clique no ícone de lápis para editar o nome
   - Clique na imagem de perfil para mudar a foto

2. **Interação com Posts**
   - Dê like clicando no coração ou dando duplo clique na imagem
   - Salve posts clicando no ícone de bookmark
   - Contagem de likes atualiza dinamicamente
   
Projeto desenvolvido como parte do curso de Desenvolvimento Web Full-Stack da Driven Education.
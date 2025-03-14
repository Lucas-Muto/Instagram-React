Esse projeto consiste em um desafio da minha faculdade de Desenvolvimento Web. 

Para esta entrega, será fornecido um código do Instagram que possui apenas HTML e CSS. Você deverá transformá-lo em um projeto React, seguindo os requisitos descritos abaixo.

🛠️ Recursos

Essa versão do instagram tem algumas coisinhas a mais em relação àquele que você fez anteriormente! Então baixe o arquivo abaixo como ponto de partida. Ele já possui o layout do site pronto, com HTML, CSS e as imagens necessárias. Caminho: C:\Users\SABBAG\Desktop\Instagram-React\projeto__instagram-react__base

✅ Requisitos
- Geral:
   - Você deve criar seu projeto usando o comando que demos do create-react-app: npx create-react-app nome-do-projeto --template @driven-education/cra-template
   - Por padrão, o create-react-app já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado git init lá).
   - A cada requisito implementado faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit.
   - O template gerará os arquivos base, incluindo o arquivo package.json e package-lock.json. Esses arquivos devem estar sempre na raiz do repositório no GitHub. 
   - Muito cuidado para não committar a node_modules (e nem enviá-la no .zip da entrega). Não é boa prática comittar essa pasta no git.

- Layout:
    - Utilize o @index.html
    - Não precisa se preocupar com a versão mobile para esse projeto, faça apenas a desktop.

- CSS e Imagens:
    - Arquivos CSS devem ser colocados na pasta public e linkados diretamente no index.html, que também está na pasta public.
    - Você também deve criar, dentro da public, uma pasta chamada assets para colocar as imagens. Na hora de usá-las em seu projeto, o caminho a ser colocado no atributo src da tag img será: assets/nome-da-imagem.extensao: <img src="assets/minha-imagem.png" />

- Componentes:
    - A página deve ser componentizada em arquivos diferentes, utilizando import/export default: 
        Lista dos componentes que deverão ser feitos (Os componentes genéricos (Story, Post e Suggestion) deverão receber as informações via props):
        App
        Body
        SideBar
        NavBar
        User
        Stories (onde cada item será um componente diferente, o Story)
        Posts (onde cada item será um componente diferente, o Post)
        Suggestions (onde cada item será um componente diferente, o Suggestion)

    - Os itens repetitivos do projeto devem obrigatoriamente ser representados como arrays de objetos e renderizados no JSX usando map. Esses itens são:
        Os stories (deve ter pelo menos 3 stories)
        Os posts (deve ter pelo menos 3 posts)
        As sugestões de seguidores (deve ter pelo menos 3 sugestões)

        Exemplo:
            Em vez de: 

            export default function Lista() {
                return (
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                );
            }

           Você deve seguir a abordagem de:

            export default function Lista() {
                const itens = [
                    { nome: "Item 1" }, 
                    { nome: "Item 2" },
                    { nome: "Item 3" },
                ];

                return (
                    <ul>
                        {itens.map((item) => <li>{item.nome}</li>)}
                    </ul>
                );
            }

- Dados dinâmicos:
    - O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
       - Nome de usuário (ao apertar o lápis, aparece um prompt para alterá-lo). Se for passada uma string vazia, não atualiza.
       - Imagem de perfil (ao clicar uma vez na imagem, aparece um prompt pedindo novo link). Se for passada uma string vazia, não atualiza.
       - Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido).
        - Caso a postagem já esteja salva, ao clicar no ícone, a postagem deve passar para não salva.
    - Like no post:
        - Ao clicar no ícone do like o usuário poderá curtir a postagem. Ou seja, o ícone de coração deverá ficar preenchido e vermelho.
            - Caso a postagem já esteja curtida, ao clicar no ícone, a postagem deve passar para não curtida.
        - Ao clicar na imagem de um post do feed, o usuário poderá curtir a postagem, ou seja, o botão do like deverá ficar preenchido em vermelho.
            OBS: assim como no Instagram de verdade, clicar na imagem NÃO retira likes, apenas adiciona caso já não tenha.
        - Sobre a frase de "Curtido por fulano e outras xxx pessoas":
            - O número de likes deverá aumentar quando a pessoa der um like e diminuir quando retirá-lo.
            - O início da frase "Curtido por fulano" pode ter qualquer valor no lugar de fulano, não precisa ser o nome do usuário logado nem mudar quando o post for curtido.
        - Todos os posts devem começar não curtidos por padrão.

    - É avaliado o estado da aplicação. Alguns estados são determinados por post, como salvar post e dar like em post, de forma que quando você dá like em um único post, os demais devem permanecer inalterados. 
        - Para poder testar isso, é necessário adicionar pelo menos 3 posts.

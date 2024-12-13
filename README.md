# TMDB Movies⭐
## Teste para Front-End Jr na Promobit

Olá! Esse projeto é um teste para a vaga de Front-End Júnior na empresa [Promobit](https://www.promobit.com.br/)! 

Utilizando a API de filmes TMDB [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) e o [layout do figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End?node-id=0%3A1), o objetivo desse desafio é criar uma listagem de filmes mais populares do dia, através dos endpoints disponíveis. O usuário também será capaz de filtrar essa listagem pelos gêneros que gosta mais e navegar entre as páginas. Ao clicar no filme escolhido,  outra página mais detalhada será aberta, com informações sobre data de estreia, elenco, direção, trailer e novas recomendações. 

## Índice

- [Como executar o projeto](#como-executar-o-projeto)
- [Stacks utilizadas](#stacks-utilizadas)
- [Desafios encontrados](#desafios-encontrados)
- [Acesse o site](#acesse-o-site)


## Como executar o projeto: 

- [ ] Clone o projeto;
- [ ] Instale as dependências com os comandos: ``` npm install ou yarn install ```;
- [ ] Abrir no editor de texto de sua preferência;
- [ ] Criar na raiz do projeto o arquivo ``` .env``` e adicionar a variável 
``` NEXT_PUBLIC_API_KEY ``` inserindo nela a sua chave da API criada no [themoviedb](https://www.themoviedb.org/login);
- [ ] Subir o projeto através dos comando ``` npm run dev ou yarn dev ```.

## Stacks utilizadas:

   - [React JS](https://reactjs.org/docs/getting-started.html)
   - [Next JS](https://nextjs.org/docs)
   - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
   - [Styled-Component](https://styled-components.com/)
   - [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
   - [Material UI](https://mui.com/pt/)
   - [Swiper JS](https://swiperjs.com/)
   - [Pie Chart](https://www.npmjs.com/package/react-minimal-pie-chart)
   - [Toastify](https://www.npmjs.com/package/react-toastify)           

## Desafios encontrados:

O teste foi um grande desafio para mim, pois me possibilitou a chance de pensar em soluções mais inteligentes, não só manipulando os diversos fetches da API, mas também tentando manter um código mais limpo possível. Dessa forma, busquei componentizar ao máximo, trabalhando com as props e assim mantendo uma aplicação mais simples, facilitando, por exemplo, uma possível mudança de escopo ao longo do tempo.

Escolhi trabalhar com o framework Next.JS porque é uma ferramenta que, além de ser "developer friendly", também melhora a experiência do usuário. O Next tem um ótimo setup, como por exemplo, a pasta page já configurada para as rotas de navegação e a sua renderização ao lado do servidor, o que garante o melhor SEO. Por isso, para reduzir o tempo de carregamento do site e torná-lo mais indexável, optei em trabalhar com o SSR (Server Side Rendering) na página de detalhes dos filmes, fazendo com que o browser fique menos sobrecarregado.

Para persistir os dados do filtro dos gêneros que o usuário seleciona, utilizei a aplicação Context API, sendo possível assim, voltar para a página Home e manter os filtros ativos. Com o Context foi possível armazenar esses dados selecionados e fornecer diretamente para o componente que precisava consumi-los.

## Acesse o site:🎉

 Para finalizar, aproveite o projeto e navegue pelos filmes mais populares do dia [aqui](https://larissagomes-frontend-challenge.vercel.app/)!🎞
 
 [⬆ Voltar ao topo](#tmdb-movies)<br>

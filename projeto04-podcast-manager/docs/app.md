# Podcast Manager

### Descrição

Um app ao estilo netflix, onde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios de podcasts em sessões de categorias
  - [saúde, mentalidade, arte, Trabalho, desenho, ilustração, esforço]
- Filtrar episódios por nome de podcast

## Como

#### Feature:

- Listar os episódios de podcasts em sessões de categorias

### Como vou implementar:

Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa e link.

```js
[
  {
    podcastName: "ICONIC Network",
    episode: "Como Evoluir Sua Arte Mais Rapidamente",
    videoId: "zi1-C0HTtrc",
    cover: "https://i.ytimg.com/vi/zi1-C0HTtrc/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=zi1-C0HTtrc&t=6s",
    categories: ["arte", "Trabalho", "desenho", "ilustração"],
  },
  {
    podcastName: "ICONIC Network",
    episode: "ICONIC Live - Como Tropeçar e Levantar: A Arte de Não Desistir",
    videoId: "3tNDqWvqjao",
    cover: "https://i.ytimg.com/vi/3tNDqWvqjao/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=3tNDqWvqjao",
    categories: [
      "arte",
      "Trabalho",
      "desenho",
      "ilustração",
      "saúde",
      "mentalidade",
      "esforço",
    ],
  },
];
```

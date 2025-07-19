import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodesController = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify([
      {
        podcastName: "ICONIC Network",
        episode: "Como Evoluir Sua Arte Mais Rapidamente",
        videoId: "zi1-C0HTtrc&t=6s",
        categories: ["arte", "Trabalho", "desenho", "ilustração"],
      },
      {
        podcastName: "ICONIC Network",
        episode:
          "ICONIC Live - Como Tropeçar e Levantar: A Arte de Não Desistir",
        videoId: "3tNDqWvqjao",
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
    ])
  );
};

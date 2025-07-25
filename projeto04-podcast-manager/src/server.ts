import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodesController,
} from "./controllers/podcasts.controller";
import { Routes } from "./routes/routes";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    if (request.method === "GET" && baseUrl === Routes.LIST) {
      await getListEpisodesController(request, response);
    }

    if (request.method === "GET" && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }
);

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${port}.`);
});

import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodesController,
} from "./controllers/podcasts.controller";
import { Routes } from "./routes/routes";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

  if (request.method === "GET" && baseUrl === Routes.LIST) {
    await getListEpisodesController(request, response);
  }

  if (request.method === "GET" && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};

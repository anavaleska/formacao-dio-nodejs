import { IncomingMessage, ServerResponse } from "http";
import { listEpisodeService } from "../services/list-episodes.service";
import { filterEpisodeService } from "../services/filter-episodes.service";

export const getListEpisodesController = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await listEpisodeService();

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const queryString = request.url?.split("?p=")[1] || "";

  const content = await filterEpisodeService(queryString);

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};

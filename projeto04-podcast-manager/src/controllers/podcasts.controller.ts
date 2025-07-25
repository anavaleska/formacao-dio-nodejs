import { IncomingMessage, ServerResponse } from "http";
import { listEpisodeService } from "../services/list-episodes.service";
import { filterEpisodeService } from "../services/filter-episodes.service";
import { ContentType } from "../utils/content-type";
import { HttpStatusCode } from "../utils/http-status-code";

export const getListEpisodesController = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await listEpisodeService();

  response.writeHead(HttpStatusCode.OK, { "Content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await filterEpisodeService(request);

  response.writeHead(HttpStatusCode.OK, { "Content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
};

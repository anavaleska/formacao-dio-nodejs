import { IncomingMessage, ServerResponse } from "http";
import { listEpisodeService } from "../services/list-episodes-service";

export const getListEpisodesController = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await listEpisodeService();

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};

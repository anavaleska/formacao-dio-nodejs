import * as http from "http";
import { getListEpisodesController } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === "GET") {
      await getListEpisodesController(request, response);
    }
  }
);

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${port}.`);
});

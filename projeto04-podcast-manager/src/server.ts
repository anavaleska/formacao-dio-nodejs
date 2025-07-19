import * as http from "http";

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {}
);

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${port}.`);
});

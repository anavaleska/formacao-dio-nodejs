import express, { Request, Response } from "express";

export const createApp = () => {
  const app = express();

  app.use(express.json());

  app.get("/", (request: Request, response: Response) => {
    response.status(200).json({ player: "messi" });
  });

  return app;
};

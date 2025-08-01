import { Request, Response } from "express";
import { getPlayerByName } from "../services/players.service";

export const getPlayer = async (request: Request, response: Response) => {
  const httpResponse = await getPlayerByName();
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

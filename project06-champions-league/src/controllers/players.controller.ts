import { Request, Response } from "express";
import { getPlayerByName } from "../services/players.service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (request: Request, response: Response) => {
  const data = await getPlayerByName();
  const result = await ok(data);
  return response.status(result.statusCode).json(result.body);
};

import { Request, Response } from "express";
import { getPlayerByName } from "../services/players.service";

export const getPlayer = async (request: Request, response: Response) => {
  const data = await getPlayerByName();
  return response.status(200).json(data);
};

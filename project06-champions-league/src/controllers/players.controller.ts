import { Request, Response } from "express";
import {
  getAllPlayersService,
  getPlayerByIdService,
} from "../services/players.service";

export const getAllPlayers = async (request: Request, response: Response) => {
  const httpResponse = await getAllPlayersService();
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const httpResponse = await getPlayerByIdService(id);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

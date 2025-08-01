import { Request, Response } from "express";
import {
  createPlayerService,
  getAllPlayersService,
  getPlayerByIdService,
} from "../services/players.service";
import { badRequest } from "../utils/http-helper";

export const getAllPlayers = async (request: Request, response: Response) => {
  const httpResponse = await getAllPlayersService();
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const httpResponse = await getPlayerByIdService(id);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (request: Request, response: Response) => {
  const data = request.body;
  const httpResponse = await createPlayerService(data);
  if (!httpResponse) {
    const result = await badRequest(new Error("Player data is missing."));
    return response.status(result.statusCode).json(result.body);
  }
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

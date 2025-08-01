import {
  findAllPlayers,
  findPlayerById,
} from "../repositories/players.repository";
import { notFound, ok } from "../utils/http-helper";

export const getAllPlayersService = async () => {
  const data = await findAllPlayers();

  if (!data) {
    return await notFound({
      error: "Player not found.",
    });
  }
  return await ok(data);
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  if (!data) {
    return await notFound({
      error: "Player not found.",
    });
  }
  return await ok(data);
};

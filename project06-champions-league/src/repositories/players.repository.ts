import type { Player } from "../interfaces/player.interface";

const database: Player[] = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Ronaldo" },
];

export const findAllPlayers = async (): Promise<Player[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<Player | undefined> => {
  return database.find((player) => player.id === id);
};

import type { Club } from "../interfaces/club.interface";

const database = [
  {
    id: 1,
    name: "Real Madrid",
  },
];

export const findAllClubs = async (): Promise<Club[]> => {
  return database;
};

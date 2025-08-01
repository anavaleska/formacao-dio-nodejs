import { notFound, ok } from "../utils/http-helper";

export const getPlayerByName = async () => {
  const data = { player: "Ronaldo" };
  let response = null;

  if (!data) {
    response = await notFound({
      error: "Player not found.",
    });
  } else {
    response = await ok(data);
  }
  return response;
};

import { repositoryPodcast } from "../repositories/podcasts-repository";

export const listEpisodeService = async () => {
  const data = await repositoryPodcast();

  return data;
};

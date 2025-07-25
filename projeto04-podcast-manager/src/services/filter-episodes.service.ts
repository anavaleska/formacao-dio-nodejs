import { repositoryPodcast } from "../repositories/podcasts.repository";

export const filterEpisodeService = async (podcastName: string) => {
  const data = await repositoryPodcast(podcastName);

  return data;
};

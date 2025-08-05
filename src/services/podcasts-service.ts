import { listPodcasts } from "../repositories/podcasts-data";

export const listEpisodes = async () =>{
    const data = await listPodcasts()
    return data;
};

export const filterEpisodes = async (search: string) => {
    const data = await listPodcasts(search);
    return data;
};
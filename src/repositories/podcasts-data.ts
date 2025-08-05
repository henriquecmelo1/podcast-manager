import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";


const pathData = path.join(__dirname, "podcasts.json");

const podcastsData = JSON.parse(fs.readFileSync(pathData, "utf-8"));

export const listPodcasts =async  (search?: string): Promise<Podcast[]> => {
    if (search) {
        return podcastsData.filter((podcast: Podcast) =>
            podcast.podcastName.toLowerCase() === search.toLowerCase()
        );
    }
    return podcastsData;
}

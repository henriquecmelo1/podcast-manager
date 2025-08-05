import { IncomingMessage, ServerResponse } from "http";
import { filterEpisodes, listEpisodes } from "../services/podcasts-service";

export const getAllEpisodes = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const episodes = await listEpisodes();
  res.writeHead(episodes.status, { "Content-Type": "application/json" });
  res.write(JSON.stringify(episodes));
  res.end();
};

export const getFilteredEpisodes = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const content = await filterEpisodes(req.url);
  res.writeHead(content.status, { "Content-Type": "application/json" });
  res.write(JSON.stringify(content));
  res.end();
};
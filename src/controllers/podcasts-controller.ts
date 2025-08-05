import { IncomingMessage, ServerResponse } from "http";
import { filterEpisodes, listEpisodes } from "../services/podcasts-service";

export const getAllEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const episodes = await listEpisodes();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(episodes)
  );
};

export const getFilteredEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const query = req.url?.split("?p=")[1] || "";
  const content = await filterEpisodes(decodeURIComponent(query));
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(content)
  );
};
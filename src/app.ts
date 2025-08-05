import * as http from "http";
import {
  getAllEpisodes,
  getFilteredEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

  const [baseUrl, query] = request.url?.split("?") || [];
  console.log(`Request received: ${request.method} ${baseUrl} with query: ${query}`);

  if (request.method === "GET" && baseUrl === Routes.GET_ALL_EPISODES) {
    await getAllEpisodes(request, response);
  }
  if (request.method === "GET" && baseUrl === Routes.GET_FILTERED_EPISODES) {
    await getFilteredEpisodes(request, response);
  }
};

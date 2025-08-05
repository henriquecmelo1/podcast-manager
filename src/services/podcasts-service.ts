import { listPodcasts } from "../repositories/podcasts-data";
import { ResponseModel } from "../models/responde-model";
import { StatusCode } from "../utils/status-code";

export const listEpisodes = async (): Promise<ResponseModel> => {
  const data = await listPodcasts();
  let responseList: ResponseModel = {
    status: StatusCode.NOT_FOUND,
    body: []
  };
  if (data.length > 0) {
    responseList.status = StatusCode.OK;
    responseList.body = data;
  } else {
    responseList.status = StatusCode.NO_CONTENT;
    responseList.body = "No episodes found";
  }
  return responseList;
};


export const filterEpisodes = async (search?: string): Promise<ResponseModel> => {
    let responseFilter: ResponseModel = {
        status: StatusCode.NOT_FOUND,
        body: []
    };

    // If no search query is provided, return all episodes
    if (!search) {
        const content = await listPodcasts();
        if (content.length > 0) {
            responseFilter.status = StatusCode.OK;
            responseFilter.body = content;
        } else {
            responseFilter.status = StatusCode.NO_CONTENT;
            responseFilter.body = "No episodes found";
        }
        return responseFilter;

    }

    // If search query is provided, filter episodes
    const query = search?.split("?p=")[1] || "";
    const content = await listPodcasts(decodeURIComponent(query));

    if (content.length > 0) {
        responseFilter.status = StatusCode.OK;
        responseFilter.body = content;
    } else {
        responseFilter.status = StatusCode.NO_CONTENT;
        responseFilter.body = "No episodes found";
    }

    return responseFilter;

  };

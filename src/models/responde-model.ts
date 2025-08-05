import { StatusCode } from "../utils/status-code";
import { Podcast } from "./podcast-model";

export interface ResponseModel {
  status: StatusCode;
  body?: Podcast[] | string;
}
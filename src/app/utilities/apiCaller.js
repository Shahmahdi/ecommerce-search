import axios from "axios";
import { APIBaseUrl } from "../config/Config";

export const getData = (endpoint) => {
  return axios.get(`${APIBaseUrl}/${endpoint}`);
};

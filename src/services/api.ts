import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.100.40:3333/",
});

export const plantsEnvironments = () => {
  return api.get("plants_environments?_sort=title&_order=asc");
};

export const plantsService = (page: number) => {
  return api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=7`);
};

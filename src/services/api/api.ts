import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const isApiError = (error: Error) => error instanceof AxiosError;

export default api;

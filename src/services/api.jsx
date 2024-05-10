import axios from "axios";

export const Api = axios.create({
  baseURL: "https://portal.dmetal.com.br/api-app/dev",
});

import axios from "axios";
const URL = "https://dummyjson.com";
export const axiosInstance = axios.create({
  baseURL,
});

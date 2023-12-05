import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

export const returnAxiosInstance = (url) => axiosInstance.get(url);

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export const axiosImageInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/",
});
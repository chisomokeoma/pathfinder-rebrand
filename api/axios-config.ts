import axios from "axios";
import { cookieStorage } from "@ibnlanre/portal";
import { error } from "console";

export const LOGINAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

API.interceptors.request.use((req) => {
  let token = cookieStorage.getItem("pathfinder-auth");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

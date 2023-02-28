import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    origin: process.env.NEXT_PUBLIC_API_URL,
    "Content-Type": "application/json",
  },
});

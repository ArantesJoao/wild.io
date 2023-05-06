// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://200.135.94.53:3000/api",
});

export default api;

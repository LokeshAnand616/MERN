import axios from "axios";

const API_URL = "http://localhost:5001";

const api = axios.create({
  baseURL: API_URL,
});

export default api;

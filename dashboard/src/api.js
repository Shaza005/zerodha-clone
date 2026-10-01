import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-clone-1-0k9u.onrender.com/api",
  withCredentials: true,
});

export default API;


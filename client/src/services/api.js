import axios from "axios";

const api = axios.create({
  baseURL: "https://chatapp-re2r.onrender.com/api",
});

export default api;
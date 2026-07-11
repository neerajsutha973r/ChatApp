import api from "./api";

const AuthService = {
  async register(userData) {
    const response = await api.post("/users/register", userData);
    return response.data;
  },

  async login(userData) {
    const response = await api.post("/users/login", userData);
    return response.data;
  },
};

export default AuthService;
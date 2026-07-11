import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";

const UserService = {
  async register(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }

    const existingUser = await UserModel.findUserByUsername(username);

    if (existingUser) {
      throw new Error("Username already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.createUser(username, hashedPassword);

    return user;
  },

  async login(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }

    const user = await UserModel.findUserByUsername(username);

    if (!user) {
      throw new Error("Invalid username or password.");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid username or password.");
    }

    return {
      id: user.id,
      username: user.username,
      created_at: user.created_at,
    };
  },
};

export default UserService;
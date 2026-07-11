import UserService from "../services/user.service.js";

const UserController = {
  async register(req, res) {
    try {
      const { username, password } = req.body;

      const user = await UserService.register(username, password);

      res.status(201).json({
        success: true,
        message: "User registered successfully.",
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  async login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await UserService.login(username, password);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      user,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
},

  async logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to logout.",
        });
      }

      res.clearCookie("connect.sid");

      res.status(200).json({
        success: true,
        message: "Logout successful.",
      });
    });
  },

  async getCurrentUser(req, res) {
    if (!req.session.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    res.status(200).json({
      success: true,
      user: req.session.user,
    });
  },
};

export default UserController;
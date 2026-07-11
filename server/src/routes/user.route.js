import express from "express";
import UserController from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

router.get("/me", UserController.getCurrentUser);

export default router;
import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();

// Email routes
router.post("/register", userController.email_register);
router.post("/login", userController.email_login);

export default router;
import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";

// Email routes
router.post("/register", userController.email_register);
router.post("/login", userController.email_login);

export default router;
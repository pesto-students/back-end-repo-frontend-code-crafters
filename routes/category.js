import express from "express";
import * as categoryController from "../controllers/categoryController.js";
const router = express.Router();

// Email routes
router.post("/create", categoryController.add_category);
router.get("/get", categoryController.get_category);
// router.post("/login", categoryController.email_login);

export default router;
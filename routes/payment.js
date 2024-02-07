import express from "express";
const router = express.Router();
import * as paymentController from "../controllers/paymentController.js";

// Google SSO routes
router.get("/order", paymentController.createOrder);

router.get("/verify", paymentController.verifyOrder);

export default router;

import express from "express";
const router = express.Router();
import * as paymentController from "../controllers/paymentController.js";

router.post("/order", paymentController.createOrder);
router.post("/verify", paymentController.verifyOrder);

export default router;

import express from "express";
const router = express.Router();
import passport from "passport";
import * as authController from "../controllers/authController.js";

// Google SSO routes
router.get("/login/success", authController.google_login_success);
router.get("/login/failed", authController.google_login_failure);
router.get("/google", passport.authenticate("google", ["profile", "email"]));
router.get("/auth/google/callback", authController.google_auth_callback);

router.get("/logout", authController.logout);

export default router;

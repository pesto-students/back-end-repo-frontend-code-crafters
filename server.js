import express from "express";
import "dotenv/config";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import passportStrategy from "./passport.js";
import home from "./routes/home.js";
import api from "./routes/api.js";
import authRoute from "./routes/auth.js";
import dbConnection from "./db.js";

// Middleware
const app = express();
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["harvestly"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Database connection
dbConnection();

// Routes
app.use("/home", home);
app.use("/api", api);
app.use("/", authRoute);

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

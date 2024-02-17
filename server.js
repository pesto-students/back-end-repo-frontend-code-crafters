import express from "express";
import "dotenv/config";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import passportStrategy from "./passport.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import categoryRoute from "./routes/category.js";
import dbConnection from "./db.js";
import paymentRoute from "./routes/payment.js"
// Middleware
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["harvestly"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Database connection
dbConnection();

// Routes
app.use("/", authRoute);
app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/api/payment", paymentRoute);

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

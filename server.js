import express from 'express'
import 'dotenv/config'
import home from "./routes/home.js"

// Middleware
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

const port = process.env.PORT || 9001;
app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})
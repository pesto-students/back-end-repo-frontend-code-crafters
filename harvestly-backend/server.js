import express from 'express'
const app = express()

app.get("/api", (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(8000, ()=>{
    console.log("Server started at 8000");
})
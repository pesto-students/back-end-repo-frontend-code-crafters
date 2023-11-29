import express from 'express'
const app = express()
const PORT = 4000

app.get("/api", (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.get("/", (req, res)=>{
    res.json({"home": "Welcome to the home page"})
})

app.listen(PORT, ()=>{
    console.log("Server started at 4000");
})

module.exports = app
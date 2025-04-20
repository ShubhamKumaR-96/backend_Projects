const express=require("express");
const { PORT } = require("./config/serverConfig");


const app=express()
app.use(express.json())

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`)
  });
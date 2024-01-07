require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT =process.env.PORT;
// import data from "../perfumeData.json" assert { type: "json" };
const app = express()
require('dotenv').config({ path: '../.env'})
//connected the mongoose connection
require("./db/conn")
app.use(express.json());
// const User= require("./model/userSchema")
app.use(cors());
//linked the router
app.use(require('./router/auth'))
const middleware =(req,res,next)=>{
  console.log("Hello my middleware")
  next()
}
// app.get('/', middleware,(req,res)=>{
//     res.send('Hello World!')
// })
app.get('/about', middleware,(req,res)=>{
  console.log("about page")
    res.send('Hello World! from about')
})
app.get('/api/cart', function (req, res) {
    res.json(data);
  })

app.listen(PORT,()=>console.log(`Server at http://localhost:${PORT}`));
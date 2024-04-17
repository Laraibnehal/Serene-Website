const dotenv = require('dotenv')
dotenv.config({path: "./.env"});
const connectDB = require("./db/conn")
const User = require("./model/userSchema.js")

const express = require("express")
const cors = require('cors');
const port =process.env.PORT || 4000;
const products_routes = require("./router/product.js")
const app = express()
app.use(cors());
app.use(require('./router/auth'))
//middleware
const middleware = (req, res, next)=>{
// console.log(`Hello my middleware`)
next()
}
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
// app.post("/products", (req, res)=>{
//     res.send("Hello from the product side")
// })
//middleware or to set router
app.use("/api/products", products_routes)
const start = async ()=>{
    try{
await connectDB(process.env.DATABASE);
        app.listen(port ,()=>{console.log(`App is running on ${port}`)
    });
    }
    catch(error){
        console.log(error);
    }
}
start();

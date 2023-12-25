require('dotenv').config()
import express from "express"
import cors from "cors";
const port =4000;
const app = express()
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(process.env.PORT,()=>console.log("App is running on ${port}"));
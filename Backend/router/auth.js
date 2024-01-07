const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../db/conn');
const User = require("../model/userSchema");
const bcrypt = require('bcrypt');

// Require controller modules.
router.get('/', (req,res)=>{
    res.send('Hello World! router js')
})
router.post('/register', async (req,res)=>{
    const {name, email, phone,password, cpassword} = req.body
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:'Please enter all fields'});
    }
    Promise()
    try{
       const userExist = await User.findOne({email: email })
       if(userExist){
        return res.status(409).json({error:"Email already exists"})
       }
       else if(password != cpassword){
        return res.status(409).json({error:"Password not matching"})
       }else{
   const user = new User({ name , email, phone,password ,cpassword})
           //middleware fir bycrypt
    await  user.save() ;   res.status(201).json({userId:user.id, message:"User created successfully!"})
       }
    }
    catch(err){
        console.log(err)
    }

})
//login route
router.post('/login', async (req,res)=>{
// console.log(req.body)
// res.json({message: "done"});
try{
    let token;
const {email, password} = req.body;
if(!email || !password){
    return res.status(422).json({error:"Please fill the data"})
}
const userLogin = await User.findOne({email:email})
// console.log(userLogin)
if(userLogin){
const isMatch = await bcrypt.compare(password,userLogin.password)
 token = await userLogin.generateAuthToken(); 
console.log(token);
res.cookie("jwtToken",token, {
    httpOnly : true,
    expires: new Date(Date.now() + 2589200000000)
})
    if(!isMatch){
        return res.status(400).json({error:"Invalid Email or Password"})
    } else{
        res.json({message: "User Signin Successfully"})
    }
}else{
    return res.status(401).json({error:"Invalid Credientials"})
}

}catch(err){
console.log(err);
}
})

module.exports = router
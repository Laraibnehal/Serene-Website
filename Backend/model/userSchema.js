const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type : String,
        required: true,
    },
    phone:{
        type : Number,
        minlength: 10,
        required: true
    },
    tokens:[
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
})


userSchema.pre('save', async function(next){
 
if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12)
    this.cpassword = await bcrypt.hash(this.cpassword, 12)
}
next();
})
//we are generating token
userSchema.methods.generateAuthToken= async function(){
try{
let Token = jwt.sign({id:this._id}, process.env.SECRET_KEY)
this.tokens = this.tokens.concat({token:Token})
await this.save();
return Token;
}catch(err){
    console.log(err);
}
}
const User = mongoose.model('USER',userSchema) 

module.exports = User;
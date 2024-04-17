const mongoose = require('mongoose');


const connectDB = (DA) =>{
  return mongoose.connect(DA,{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // // useUnifiedTopology:true,
    // // // useFindAndModify:false
  }).then(() => {
      console.log(`connection successful`);
    }).catch((err) => console.log(`Connection interupted`) );
}
module.exports = connectDB

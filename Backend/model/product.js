const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    price:{
        type:Number,
        required: [true, "Price Must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default: 4.9,
    },
    description:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    quantity:{
        type:String,
        required: [true, "Quantity Must be provided"],
    },
    // availableItem:{
    //     type:Number,
    //     required: [true, "Available  item must be provided"]
    // },
    // company:{
    //     type: String,
    //     enum:{
    //         values:["apple", "samsung", "dell", "mi"],
    //         message: `{VALUE} is not supported`,
    //     },
    // },

})
module.exports = mongoose.model('Product', productSchema)

const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    phonenumber: {
        type: Number,
    },
    pickupaddress:{
        type: String
    },
    deliveryaddress:{
        type: String
    },
    weight:{
        type:String
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
   
    

},{timestamps: true}
);


module.exports = mongoose.model("form", formSchema);
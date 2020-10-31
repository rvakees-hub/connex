const mongoose = require('mongoose');


const joinSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phonenumber: {
        type: Number,
    },
    address:{
        type: String
    },
    nic:{
        type:String
    },
    license:{
        type:String
    },
    vehicle:{
        type:String
    },

    salt: String,
    role: {
        type: Number,
        default: 0
    },
   
    

},{timestamps: true}
);


module.exports = mongoose.model("join", joinSchema);
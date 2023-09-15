const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Your Name"]
    },
    email:{
        type:String,
        required:[true,"Enter Your Email"],
        unique:[true,"Email must be unique"]
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);

module.exports = User;

const User = require('../models/userModels');
const { use } = require('../routes/userRoutes');

//create user
module.exports.create = async(req,res)=>{
    try{
        const user = await User.create(req.body);

        return res.status(201).send(user);
    }catch(error){
        return console.log("Error in creating User",error);
    }
};

// getAll User 

module.exports.getAll = async(req,res)=>{
    try{
        const user = await User.find();
       
        return res.status(200).send(user);
    }catch(error){
        return console.log("Error in fetching data from database ",error);
    }
};

// delete User 

module.exports.delete = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        return res.status(200).send(user);
    }catch(error){
        return console.log("Error in deleting user from database ",error);
    }
};

//Update User

module.exports.update = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);

        return res.status(201).send(user);
        
    }catch(error){
        return console.log("Error in updating the user ",error);
    }
}
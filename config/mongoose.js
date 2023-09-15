const mongoose = require('mongoose');


const MONGOURL = 'mongodb+srv://user:user@cluster0.qbe2bo3.mongodb.net/'

mongoose.connect(MONGOURL);

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting to database"));

db.once('open',()=>{
    console.log("Successfully connected to database");
});

module.exports = db;
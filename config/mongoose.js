const mongoose = require('mongoose');


mongoose.connect(process.env.MONGOURL);

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting to database"));

db.once('open',()=>{
    console.log("Successfully connected to database");
});

module.exports = db;

const express = require('express');

const app = express();
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({
    path:'./data/config.env',
})
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());

app.use('/',require('./routes/userRoutes'));

app.listen(port,()=>{
    console.log("Express Server is running on port ",8000);
});


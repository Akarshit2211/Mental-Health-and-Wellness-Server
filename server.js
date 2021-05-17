const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

//connecting to the database 
const connection = require('./DB connection/connection');

const app = express();
const port = process.env.PORT || 5000; //step 1 - initialize port
const routes = require('./Routes/Routes');

dotenv.config()

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//step 3

app.use('/api', routes);

app.listen(port, () => console.log(`listening on the port ${port}`));


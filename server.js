const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')



const app = express();
const port = process.env.PORT || 5000; //step 1 - initialize port
const routersUrls = require('./routes/routes')

dotenv.config()


// mongoose connection
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})


// verify if mongoose is connected
mongoose.connection.on('connected', ()=> {
console.log("mongoose is connected !!!");
});


// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


//step 3

app.use('/api', routersUrls)

app.listen(port, () => console.log(`listening on the port ${port}`));


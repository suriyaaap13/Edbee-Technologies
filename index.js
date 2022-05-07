// requiring library
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//////////////////////////// Middleware /////////////////////////

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/',require('./routes'));

app.listen(3000, function(err){
    if(err){return console.log(err);}
    console.log("Server is up and running");
});
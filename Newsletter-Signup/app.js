const express = require("express");
const bodyParser= require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({extended:true})); // necessary code to start using body parser













app.listen(3000,function(){
    console.log("Server is running");
});
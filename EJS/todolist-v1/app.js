const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    var a = 3+5;

    res.send(a);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
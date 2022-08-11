const express = require("express");
const app = express();


// What should happen when someone makes get request at home root 
// Callback Function
app.get("/",function(request,response){ 
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at: sa@gmail.com");
});

app.get("/about",function(req,res){
    res.send("Contact me at: sa@gmail.com");
});

app.get("/hobies",function(req,res){
    res.send("<h1>My Hob</h1>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
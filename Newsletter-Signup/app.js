const express = require("express");
const bodyParser= require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true})); // necessary code to start using body parser
app.use(express.static("public")); // adding css to the project using express.static


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");

});

app.post("/",function(req,res){
    // Getting info from user
    const firstName =req.body.fName;
    const lastName =req.body.lName;
    const email = req.body.email;
    let data ={
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    
    //
    console.log(firstName,lastName,email);


});

app.listen(3000,function(){
    console.log("Server is running");
});

// API KEY
// d4896a0aef9f1a3113050074e3de562b-us14

// Audience ID
// f5b00dd612
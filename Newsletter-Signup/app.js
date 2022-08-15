const express = require("express");
const bodyParser= require("body-parser");
const request = require("request");
const https = require("https");

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
    const data ={
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
    };
    const jsonData = JSON.stringify(data);
    //
    console.log(firstName,lastName,email);

    const url = "https://us14.api.mailchimp.com/3.0/lists/f5b00dd612"

    const options = {
        method: "POST",
        auth: "Anano:d4896a0aef9f1a3113050074e3de562b-us14"
    };
    
    const request = https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname + "/success.html")
        } else{
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure",function(req,res){
    res.redirect("/");
});

// process.env.PORT -- Dynamic port that allows cloud to modify
app.listen(process.env.PORT,function(){
    console.log("Server is running");
});

// API KEY
// d4896a0aef9f1a3113050074e3de562b-us14

// Audience ID
// f5b00dd612
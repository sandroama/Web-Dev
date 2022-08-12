const express = require("express");
const https = require("https");

const app = express();



app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?APPID=705bb38bd85b460dc33273529a37e174&q=Berlin&units=metric";

    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp =  weatherData.main.temp;
            console.log(temp);
            
            console.log(weatherData);

            // JSON.Stringify takes keys and vals and turnes them into strings using least space as possible

        });
    })

    res.send("Server is up and running");
})










app.listen(3000,function(){
    console.log("Server is running on port 3000.")
})
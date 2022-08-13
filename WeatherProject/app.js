const express = require("express");
const https = require("https");

const app = express();



app.get("/",function(req,res){
    const urlpre = "https://api.openweathermap.org/data/2.5/weather?APPID=705bb38bd85b460dc33273529a37e174&units=metric";
    const city = "New York";
    const url = urlpre+"&q="+city;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp =  weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon +"@2x.png"
            
            res.write("<p>The weather is currently "+weatherDescription + "</p>");
            res.write("<h1>The temperature in " + city+ " is "+temp + " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">")
            res.send();
            // console.log(temp);
            // console.log(weatherData);

            // JSON.Stringify takes keys and vals and turnes them into strings using least space as possible

        });
    })
})










app.listen(3000,function(){
    console.log("Server is running on port 3000.")
})
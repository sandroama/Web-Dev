const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // necessary code to start using body parser


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    const city = req.body.cityName;
    const apiKey = "705bb38bd85b460dc33273529a37e174"
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?APPID=" + apiKey + "&units=" + units + "&q=" + city;

    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + city + " is " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">")
            res.send();
            // console.log(temp);
            // console.log(weatherData);

            // JSON.Stringify takes keys and vals and turnes them into strings using least space as possible

        });
    })

});













app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})
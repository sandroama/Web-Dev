const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set("view engine", "ejs"); // Using eJS with express

app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 5:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to " + currentDay);
    }

    res.render("list", {
        type_day: day
    });

});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
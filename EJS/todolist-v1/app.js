const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set("view engine", "ejs"); // Using eJS with express

app.get("/", function (req, res) {
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);

   

    res.render("list", {
        type_day: day
    });

});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
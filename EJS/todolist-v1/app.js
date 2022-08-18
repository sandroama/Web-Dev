const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

var items = [];

app.set("view engine", "ejs"); // Using eJS with express
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))


app.get("/", function (req, res) {
     
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
     
    var day = today.toLocaleDateString("en-us",options);
     
    // var day = new Date().toLocaleDateString('en-us', {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "short",
    //     day:"numeric"
    // });
          
    res.render("list",{type_day: day,newListItems: items});
    
     
});  
     
app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});  
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

let items = [];
let workItems= [];

app.set("view engine", "ejs"); // Using eJS with express
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))


app.get("/", function (req, res) {
     
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
     
    let day = today.toLocaleDateString("en-us",options);
     
    // var day = new Date().toLocaleDateString('en-us', {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "short",
    //     day:"numeric"
    // });
          
    res.render("list",{listTitle: day,newListItems: items});
    
     
});  
     



app.post("/",function(req,res){
    console.log(req.body);
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems: workItems});


});

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

})




app.listen(3000, function () {
    console.log("Server is running on port 3000");
});  
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser,urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",{userNewUrlParser:true});

const articleSchema ={
    title: String,
    content: String 
};

const Article = mongoose.model("Article",articleSchema);





//---

app.listen(3000,function(){
    console.log("Server running on port 3000")
});
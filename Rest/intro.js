const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// ---------------------------------


// GET === READ
// Searching after request from database and representing the results
app.get("/", function (req, res) {

});



// POST === CREATE
// When data is posted we create entry in database and save it for later
// Request will contain the data
app.post("/", function (req, res) {

});


// PUT & PATCH === UPDATE


// DIFFERENCE
// PUT WILL REPLACE DATA ENTRY (BASICALLY REPLACING BROKEN BIKE WITH A NEW BIKE)
// PATCH WILL FIX THE DATA ENTRY, SENDING PIECE OF DATA THAT WILL BE UPDATED (FIXING BIKE'S WHEEL INSTEAD OF REPLACING WHOLE BIKE)

app.put(function(req,res){

});

app.patch(function(req,res){

});


// DELETE === DELETE

app.delete(function(req,res){

});



app.listen(3000, function () {
  console.log("Server has started successfully!");
});

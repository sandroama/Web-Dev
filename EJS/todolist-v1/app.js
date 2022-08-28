const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const app = express();

console.log(date);

// const items = [];
// const workItems= [];

app.set("view engine", "ejs"); // Using eJS with express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });

const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({
    name: "Welcome to your ToDoList!"
});
const item2 = new Item({
    name: "Hit the + button to add a new item."
});
const item3 = new Item({
    name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemSchema]
};

const List = mongoose.model("List", listSchema);
// var day = date.getDate(); // showing today on the home screen

app.get("/", function (req, res) {

    

    Item.find({}, function (err, foundItems) {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully saved default items to DB.");
                }
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: day, newListItems: foundItems });
        }

    });
    // var day = new Date().toLocaleDateString('en-us', {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "short",
    //     day:"numeric"
    // });
});

app.get("/:customListName", function (req, res) {
    const customListName = req.params.customListName;
    List.findOne({name:customListName},function(err,foundList){
        if(!err){
            if(!foundList){
                // Create new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });
                list.save();
                res.redirect("/"+customListName);

            } else{
                // Show existing list
                res.render("list",{listTitle:foundList.name,newListItems: foundList.items});
            }
        }
    });
    
    

});

app.post("/", function (req, res) {

    const itemName = req.body.newItem;
    const listName = req.body.list;
    const item = new Item({
        name: itemName
    });
    if(listName === day){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name: listName},function(err,foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName);
        });
    }
    

    // let item = req.body.newItem;

    // if (req.body.list === "Work") {
    //     workItems.push(item);
    //     res.redirect("/work");

    // } else {
    //     items.push(item);
    //     res.redirect("/");

    // }
});

// app.get("/work", function (req, res) {
//     res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");

// })


app.post("/delete", function (req, res) {
    const checkedItemId = req.body.boxbox;
    const listName = req.body.listName;

    if(listName === day){
        Item.findByIdAndRemove(checkedItemId, function (err) {
            if (!err) {
                console.log("Successfully deleted checked item");
                res.redirect("/");
            }
        });
    } else{
        List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}}, function(err, foundList){
            if(!err){
                res.redirect("/"+listName);
            }
        });

    }

    
});

// About me
app.get("/about", function (req, res) {
    res.render("about");
})


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});  
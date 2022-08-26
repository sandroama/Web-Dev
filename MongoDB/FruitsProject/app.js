
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// Fruit Schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min:1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Person Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "Tasty"
});

//------------
Person.updateOne({_id:"63091e8dff62fda44751436d"},{favoriteFruit:kiwi},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully updated person")
  }
})
// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review:"Great"
// });
// pineapple.save();

// const fruit = new Fruit({
//   rating: 10,
//   review: "Watermelons are the best"
// });
 

// kiwi.save();




// const person = new Person({
//   name: "George",
//   age: 33,
// });

// person.save();



// const orange = new Fruit({
//   name: "Orange",
//   rating: 7,
//   review: "Juicy fruit"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 9,
//   review: "Delicious"
// });

// // Fruit.insertMany([kiwi,orange,banana],function(err){
// //   if(err){
// //     console.log(err);
// //   }else{
// //     console.log("SUCCESS!");
// //   }
// // });



Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach( x => console.log(x.name));
    
    // fruits.forEach(function(fruit){
    //   console.log(fruit.name);
    // });
  }
});

Fruit.updateOne({_id:"630915e5613a3ba0019c1727"},{name:"Watermelon"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully updated the document");
  }
});


// Fruit.deleteOne({name:"Orange"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document");
//   }
// }); 


Person.deleteMany({name:"Ana"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted all the documents");
  }
});



// // MONGODB AND NODE JS TOGETHER

// // const MongoClient = require("mongodb").MongoClient;
// // const assert = require("assert");
// //-----
// // Replace the uri string with your connection string.
// const url =
//   "mongodb://localhost:27017";

// const dbName = "fruitsDB";

// const client = new MongoClient(url, { useNewUrlParser: true });

// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log("Connect succesfully to server");
//   const db = client.db(dbName);
//   findDocuments(db, function () {
//     client.close();
//   })
// });


// const insertDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name: "Apple",
//       score: 9,
//       review: "Essential"
//     },
//     {
//       name: "Banana",
//       score: 8,
//       review: "Good fruit"
//     },
//     {
//       name: "Plum",
//       score: 7,
//       review: "Helpful"
//     }
//   ], function (err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.insertedCount); // https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#insertmany
//     assert.equal(3, Object.keys(result.insertedIds).length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }


// const findDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function (err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }

// // mongo --version 
// // MongoClient.connect("mongodb://localhost:27017/fruits",{useNewUrlParser:true})
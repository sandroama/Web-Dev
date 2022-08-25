const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Replace the uri string with your connection string.
const url =
  "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url,{useNewUrlParser:true});

client.connect(function(err){
    assert.equal(null,err);
    console.log("Connect succesfully to server");
    const db = client.db(dbName);
    insertDocuments(db,function(){
        client.close();
    })
});


const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
      {
        name:"Apple",
        score:9,
        review:"Essential"
      },
      {
        name:"Banana",
        score:8,
        review:"Good fruit"
      },
      {
        name:"Plum",
        score:7,
        review:"Helpful"
      }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.insertedCount); // https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#insertmany
      assert.equal(3, Object.keys(result.insertedIds).length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }


  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }

// mongo --version 
// MongoClient.connect("mongodb://localhost:27017/fruits",{useNewUrlParser:true})
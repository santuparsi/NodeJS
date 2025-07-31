var http = require("http");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbbs = db.db("MongoDatabase");
  var query = { address: "Islamabad" };
  dbbs.collection("customers").deleteMany(query, function (err, obj) {
    if (err) throw err;
    console.log(obj.result + " record(s) deleted");
    db.close();
  });
});

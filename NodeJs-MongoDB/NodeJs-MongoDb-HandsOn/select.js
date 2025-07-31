var http = require("http");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbbs = db.db("MongoDatabase");
  dbbs.collection("employees").findOne({}, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result.name);
    db.close();
  });
});

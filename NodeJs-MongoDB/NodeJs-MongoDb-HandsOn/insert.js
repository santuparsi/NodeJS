var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbbs = db.db("MongoDatabase");
  var myobj = { name: "Santhosh Kumar", age: "28", address: "Hyd" };
  dbbs.collection("employees").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});

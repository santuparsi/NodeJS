var fs=require('fs')
var http=require('http')
http.createServer(function(req,res){
fs.readFile('./1.htm',function(err,data){
res.write(data);
res.end();
});
}).listen('8000');
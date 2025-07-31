var http=require('http')
var url=require('url')
var cal=require('../calc')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var q=url.parse(req.url,true).query;
    res.write('Addition:'+cal.add(q.a,q.b));
    res.end();
}).listen(8000);
var http=require('http')
var url=require('url')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var q=url.parse(req.url,true).query;
    res.write(q.year);
    var text=q.year+' '+q.month;
    res.write(text);
    res.end();
}).listen(8000);
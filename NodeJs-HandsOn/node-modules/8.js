var http=require('http')
var md=require('./myfirstmodule')
http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'})
res.write('Current Date: ' +md.myDate())
res.end()
}).listen(9090);
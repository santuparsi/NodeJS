const http=require('http');
http.createServer((req,res)=>{
res.write('Hello World');
res.end();
}).listen(8001);
console.log('Server is Running At: 127.0.0.1:8001');
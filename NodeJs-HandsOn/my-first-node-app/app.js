//load http module
const http = require('http');
//create server
const server = http.createServer((req, res) => {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //send response
    res.end('Hello World\n');
});
//listen on port 3000
server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
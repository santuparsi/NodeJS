// load built-in modules
const http = require('http');
// create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // set response header
    // send response body
    res.end('Hello, World!\n');
});
//Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
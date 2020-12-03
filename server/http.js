var http = require('http');
var urllib = require('url');

var server = http.createServer();

server.on('request', function(req, res)
{
    console.log(req);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World\n');
});

server.listen(8080);
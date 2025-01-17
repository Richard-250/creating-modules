var http = require('http');
var dt = require('./mymodules')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dt.myDateTime()),
    res.end('Hello ICT World!');
    console.log(`server is listening to port http://localhost:8080`)
}).listen(8080);

          
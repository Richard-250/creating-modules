var http = require('http');
var fs = require('fs')
var dt = require('./mymodules')
http.createServer(function (req, res) {
    fs.readFile('./file.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("The date and time are currently: " + dt.myDateTime());
        res.write(data);
        res.write(req.url)
        console.log(`server is listening to port http://localhost:8080`)
    })
    
}).listen(8080);


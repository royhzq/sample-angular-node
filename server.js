var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    var url = req.url;
    
    if (url === '/api') {
        
        // API URL enpoint '/api'
        // Make your DB calls here
        // Prepare your data here and return JSON
        // results below is an example of data to render into UI
        
        var results = {
            "result_1": "Hello There!",
            "result_2": 42,
        }
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(results));
        
    } else if (url === '/') {
        
        // Homepage for yuor UI. URL is root '/'
        // Render out your frontend build files here.
        // home.html is used here as an example.

        fs.readFile('home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    
}).listen(8080);

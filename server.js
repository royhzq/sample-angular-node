var http = require('http');
var fs = require('fs');
var sql = require("mssql");
var config = {
  user: 'sa',
  password: 'Q1w2e3r4',
  server: 'localhost',
  database: 'sophia',
  options: {
    enableArithAbort: true,
    encrypt: true
  },
};
http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/api') {

        // API URL enpoint '/api'
        // Make your DB calls here
        // Prepare your data here and return JSON
        // results below is an example of data to render into UI
    
    	sql.connect(config, function(err) {
    		if (err) {
    			console.log(err);
    		}
    		var req = new sql.Request();
    		req.query('SELECT * FROM Response', function (err, recordset) {
    			if (err) {
    			    console.log(err);
    			}
    			res.writeHead(200, {'Content-Type': 'application/json'});
    			res.end(JSON.stringify(recordset));
    		});
    	});

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

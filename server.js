var http = require('http');
var fs = require('fs');
var sql = require("mssql");
var config = {
  user: 'sa',
  password: '1qaz2wsxXS@',
  server: 'LAPTOP-C5J86CBA\\SQLEXPRESS',
  database: 'forsa',
  options: {
    enableArithAbort: true,
    encrypt: true
  },
};
var conn = new sql.ConnectionPool(config);
var req = new sql.Request(conn);

conn.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  req.query("SELECT * From satable", function (err, recordset) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(recordset["recordset"]);
      var temp= recordset["recordset"];
    }
    conn.close();
  });
});

http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/api') {

        // API URL enpoint '/api'
        // Make your DB calls here
        // Prepare your data here and return JSON
        // results below is an example of data to render into UI

        var results = temp;
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

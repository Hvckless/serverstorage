var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
	var url = req.url;
	res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
	res.write(req.url + "쿼리된 URL");
	res.end();
});

app.listen(process.env.PORT || 3000);
var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
	var url = req.url;
	res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
	res.write(req.url + "쿼리된 URL" + process.env.PORT || 3000);
	res.end();
	//if()
});

app.listen(process.env.PORT || 3000);
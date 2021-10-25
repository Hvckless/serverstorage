var http = require('http');
var fs = require('fs');
var status = require('minecraft-server-status');
//pr test
var app = http.createServer(function(req, res){
	
	var url = req.url;
	if(url == "/"){
		url = "/index.html";
	}
	fs.exists("."+url.split("?")[0], function(exists){
		
		
		if(exists){
			//파일이 존재하는 경우
			
			//파일이 보호되었는지 확인하는 코드
			var isProtected = (url.split("/protected/").length == 2);
			
			if(isProtected){
				//파일이 보호된 경우
				res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
				res.write("Access Denined");
				res.end();
			}else{
				//파일이 보호되어있지 않은 경우 파일을 반환
				res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
				res.end(fs.readFileSync(__dirname+url.split("?")[0]));
			}
		}else{
			//없음
			if(url.split("/").length == 7){
				_ray = url.split("/");
				
				if((_ray[1] == "inlineApps") && (_ray[3] == "protected") && (_ray[4] == "js") && (_ray[5] == "method")){
					fs.exists("./inlineApps/"+_ray[2]+"/protected/js/method/"+_ray[6].split(".do")[0]+".js", function(exists){
						if(exists){
							if(_ray[6].split(".do").length == 2){
								res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
								require("./inlineApps/"+_ray[2]+"/protected/js/method/"+_ray[6].split(".do")[0]+".js").init(req, res, _ray[6].split(".do")[1]);
							}else{
								res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
								require("./inlineApps/"+_ray[2]+"/protected/js/method/"+_ray[6].split(".do")[0]+".js").init(req, res, null);
							}
						}else{
							res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
							res.write("But no Functions came");
							res.end();
						}
					});
				}else{
					res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
					res.write("No Content");
					res.end();
				}
			}else{
				res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
				res.write("No Content");
				res.end();
			}
		}
	});
	
});

//nodetest-izynp.run.goorm.io/index.html?req=pathname&popcorn=me
//nodetest-izynp.run.goorm.io/inlineApps/a/protected/b.js?popcorn
//nodetest-izynp.run.goorm.io/inlineApps/a/protected/b.do?req=popcon&product=me
app.listen(process.env.PORT || 3000);
//app.listen(3000);
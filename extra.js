const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(req.url + "URL 쿼리"));
app.listen(port, ()=> console.log("HI ${port}"));


//

//

var http = require('http');
var fs = require('fs');

var CUR_SERVER_REQ = 0;
const MAX_SERVER_REQ = 10;

var REQ_PER_USER = {};

var isTrue = true;


var app = http.createServer(function(req, res){
	thisDate = "화요일";
	//thisDate = new Date();
	//CUR_SERVER_REQ++;
	//console.log(req.connection.remoteAddress.split(":")[req.connection.remoteAddress.split(":").length-1].replaceAll(".","-"));
	//var cur_userAddress = req.connection.remoteAddress.split(":")[req.connection.remoteAddress.split(":").length-1].replaceAll(".","_").replaceAll("0","A").replaceAll("1","B").replaceAll("2","C").replaceAll("3","D").replaceAll("4","E").replaceAll("5","F").replaceAll("6","G").replaceAll("7","H").replaceAll("8","I").replaceAll("9","J");
	//eval("REQ_PER_USER."+req.connection.remoteAddress.split(":")[req.connection.remoteAddress.split(":").length-1].replaceAll(".","_").replaceAll("0","A").replaceAll("1","B").replaceAll("2","C").replaceAll("3","D").replaceAll("4","E").replaceAll("5","F").replaceAll("6","G").replaceAll("7","H").replaceAll("8","I").replaceAll("9","J"), )
	
	//if(Number.isNaN())
	
	
	
	console.log(thisDate+":"+CUR_SERVER_REQ + " 번 요청됨 | 요청자 : "+req.connection.remoteAddress.split(":")[req.connection.remoteAddress.split(":").length-1]);
	var url = req.url;
	if((CUR_SERVER_REQ < MAX_SERVER_REQ) && isTrue){
		fs.exists(url.replace("/", "").split("?")[0], function(exists){
			if(url.replace("/", "") == "index.js"){
				res.writeHead(401, {'Content-Type':'text/plain; charset=utf-8'});
				res.write("인증되지 않은 사용자");
				res.end();
			}else if(url.replace("/","").split("/")[0] == "protected"){
				res.writeHead(401, {'Content-Type':'text/plain; charset=utf-8'});
				res.write("인증되지 않은 사용자");
				res.end();
			}else{
				if(exists){
					res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
					res.end(fs.readFileSync(__dirname+url.split("?")[0]));
				}else{
					if(url.replace("/", "").split("?")[0].split(".")[1] == "do"){
						fs.exists("./protected/js/method/"+url.replace("/", "").split("?")[0].split(".")[0]+".js", function(exists){
							if(exists){
								if(url.split("?").length == 1){
									res.writeHead(202, {'Content-Type':'text/plain; charset=utf-8'});
									require("./protected/js/method/"+url.replace("/", "").split("?")[0].split(".")[0]+".js").init(req, res);
									res.end();
								}else{
									res.writeHead(202, {'Content-Type':'text/plain; charset=utf-8'});
									require("./protected/js/method/"+url.replace("/", "").split("?")[0].split(".")[0]+".js").init(req, res, url.split("?")[1]);
									res.end();
								}

							}else{
								res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
								res.write("존재하지 않는 메소드");
								res.end();
							}
						});
					}else if(url.replace("/", "").split("?")[0] == ""){
						res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
						res.end(fs.readFileSync(__dirname+"/index.html"));
					}else{
						res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
						res.write("["+url+"] 해당 파일은 존재하지 않습니다");
						res.end();
					}
				}
			}
		});
	}else{
		res.writeHead(503);
		res.write("too many request");
		res.end();
	}
});
app.listen(3000);
/*
setInterval(()=>{
	if(CUR_SERVER_REQ > 0){
		CUR_SERVER_REQ--;
		console.log("리퀘스트 공간이 늘었습니다 : "+CUR_SERVER_REQ);
	}
}, 1000);
*/
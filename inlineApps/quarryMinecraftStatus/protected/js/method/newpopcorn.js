var status = require("minecraft-server-status");

module.exports.init = function(req, res, thisString){
	if(thisString != ""){
		console.log(thisString);
	}
	
	status('mc.hypixel.net', 25565, response => {
	//console.log(response);
	//console.log(JSON.stringify(response.players.sample.length));

		console.log("서버 응답 : " + response.status);
		console.log("정품 여부 : " + response.online);
		console.log("MOTD : " + response.motd);
		console.log("로고 : " + response.favicon);
		console.log("플레이어 : " + response.players.now + "/" + response.players.max);
		console.log("----플레이어 목록----");
		for(i=0;i<response.players.sample.length;i++){
			console.log("마크 ID : " + response.players.sample[i].name + " / UUID : " + response.players.sample[i].id);
		}
		console.log("-------------------");
		console.log("서버 버전 : " + response.server.name + " / 프로토콜 버전 : " + response.server.protocol);
	});
	res.write("popcorn and js");
	
}
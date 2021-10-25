var status = require("minecraft-server-status");

module.exports.init = function(req, res, thisString){
	if(thisString != ""){
		//?IP=mc.hypixel.net&PORT=25565
		console.log(thisString);
	}else{
		
	}
	
	status('mc.hypixel.net', 25565, response => {
		//res.write("Hello World!");
		res.write(JSON.stringify(response));
		res.end();
	});
	
}
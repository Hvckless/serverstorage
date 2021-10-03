module.exports.init = function(req, res, thisString){
	if(thisString != ""){
		console.log(thisString);
	}
	console.log("테스트 작동됨 : " + req.url);
	res.write("popcorn and js");
}
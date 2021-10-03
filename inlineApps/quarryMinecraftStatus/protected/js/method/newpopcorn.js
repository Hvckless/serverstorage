module.exports.init = function(req, res, thisString){
	if(thisString != ""){
		console.log(thisString);
	}
	res.write("popcorn and js");
}
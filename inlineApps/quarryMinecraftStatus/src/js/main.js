var popmain = {
	btn : {
		onclick : function(event, thisElement){
			//console.log(thisElement.textContent);
			if(thisElement.textContent == "someip.com:25565"){
				thisElement.textContent = "";
			}
		},
		onkeydown : function(event, thisElement){
			checkError(event);
			if(event.key == "Enter"){
				//console.log(thisElement.innerHTML);
				thisElement.innerText = thisElement.innerText.replaceAll("\n", "");
                console.log("Hello PR Test");
			}
			
		}
	},
	quarry : {
		
	}
}
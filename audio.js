var myAudio = new Audio();
myAudio.src = "music.mp3";
var playing = "yes";

chrome.browserAction.onClicked.addListener(function(event){
	//open a new tab on Click, choose another song/high quality of current
	 if (playing === "yes"){
		chrome.tabs.create({url: "chrome://newtab"})
		myAudio.currentTime=0;
	 	myAudio.play();
	 	playing = "no";
	}else{
		myAudio.pause();
		playing = "yes";
	}
})

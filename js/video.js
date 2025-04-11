var video;

window.addEventListener("load", function() {

	const video = document.querySelector("video")
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log("Good job opening the window")

});



document.querySelector("#play").addEventListener("click", function() {
	
	const video = document.querySelector("video")
	video.play();
	video.volume = 0.5;
	console.log("Play Video");
});


document.querySelector("#pause").addEventListener("click", function() {
	const video = document.querySelector("video")
	video.pause();
	console.log("Pause Video");
});


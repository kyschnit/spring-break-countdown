function switchToMountains() {
	var button = document.getElementById("switch-button");
	var video = document.getElementById("video");
	var gif = document.getElementById("gif");
	var source = document.getElementById("source");
	if (video != null) {
		video.src = "media/mountains.mp4";
	}
	if (gif != null) {
		gif.src = "media/mountains.gif";
	}
	button.innerHTML = "Beach";
	source.src = "media/mountainsound.mp4";
}

function switchToBeach() {
	var button = document.getElementById("switch-button");
	var video = document.getElementById("video");
	var gif = document.getElementById("gif");
	var source = document.getElementById("source");
	if (video != null) {
		video.src = "media/beach.mp4";
	}
	if (gif != null) {
		gif.src = "media/beach.gif";
	}
	button.innerHTML = "Mountains";
	source.src = "media/beachsound.mp4";
}

function switchBackground() {
	var button = document.getElementById("switch-button");
	if (button.innerHTML.includes("Beach")) {
		switchToBeach();
	} else {
		switchToMountains();
	}
}

function addEventListeners() {
	document
		.getElementById("switch-button")
		.addEventListener("click", switchBackground);
}

window.onload = addEventListeners;

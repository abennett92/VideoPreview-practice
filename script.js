console.log("page loaded...");

var video = document.getElementById("myVideo");

function playVid() {
    video.play();
}

function pauseVid() {
    video.pause();
}

function over(element) {
    playVid();
}

function out(element) {
    pauseVid();
}
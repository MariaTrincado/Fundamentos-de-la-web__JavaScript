

function vistaPrevia(video) {
    video.play();
    setTimeout(function() {
        video.pause();
        video.currentTime = 0;
    }, 4000);
}

function pausarVistaPrevia(video) {
    video.pause();
    video.currentTime = 0;
}

function otro(videoSrc) {
    var videoPlayer = document.querySelector('video');
    videoPlayer.src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();
}

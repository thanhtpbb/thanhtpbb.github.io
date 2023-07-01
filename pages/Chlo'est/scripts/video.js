var videoSection = document.getElementById('video');
var video = document.getElementById('video--video');
var triggerer = document.getElementById('video--triggerer');

videoSection.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    triggerer.style.visibility = 'hidden';
  } else {
    video.pause();
    triggerer.style.visibility = 'visible';
  }
});

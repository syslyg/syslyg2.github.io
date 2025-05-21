const video = document.getElementById('myVideo');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

video.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(video.duration);
});

video.addEventListener('timeupdate', () => {
  currentTimeDisplay.textContent = formatTime(video.currentTime);
});

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, '0')}`;
}
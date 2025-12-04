// Zegar
function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Odtwarzacz muzyki
const audio = document.getElementById('audio');
const songs = ["music/utwor1.mp3", "music/utwor2.mp3"]; // dodaj swoje
let currentSong = 0;

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  audio.src = songs[currentSong];
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  audio.src = songs[currentSong];
  audio.play();
}

// Głośność
document.getElementById("volume").addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

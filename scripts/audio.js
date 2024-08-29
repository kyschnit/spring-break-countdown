// Mute/Unmute functionality for the audio player
window.addEventListener("load", function () {
  var audio = document.getElementById("audio");
  document.getElementById("vol").addEventListener(
    "click",
    function () {
      if (document.getElementById("vol").classList.contains("fa-volume-up")) {
        audio.muted = true;
        audio.volume = 0;
        document.getElementById("vol").classList.remove("fa-volume-up");
        document.getElementById("vol").classList.add("fa-volume-mute");
      } else {
        audio.removeAttribute("muted");
        audio.muted = false;
        audio.volume = 0.5;
        audio.play();
        document.getElementById("vol").classList.remove("fa-volume-mute");
        document.getElementById("vol").classList.add("fa-volume-up");
      }
    },
    false
  );
});

const dlBtn = document.getElementById("redirectButton");
const playBtn = document.getElementById("redirectButton2");

// Add a click event listener to the button
dlBtn.addEventListener("click", function() {
  // Redirect to the desired URL
  window.location.href = "https://www.mediafire.com/file/ivbnypik5qna523/RyumotoGFX.apk/file";
});

playBtn.addEventListener("click", function() {
  // Redirect to the desired URL
  window.location.href = "https://play.google.com/store/apps/details?id=com.ryumoto.gfx&pli=1";
});

console.log('newVersion');

// Animated speed needle
let angle = 0;
setInterval(() => {
  angle = (angle + 10) % 270;
  document.getElementById("needle").style.transform = `rotate(${angle - 135}deg)`;
  let speed = Math.round((angle / 270) * 200);
  document.getElementById("speedValue").textContent = speed;
}, 1000);

// Blinking turn signal
setInterval(() => {
  document.getElementById("turnSignal").classList.toggle("blink");
}, 700);

// Toggle buttons
["acBtn", "mediaBtn", "lightBtn"].forEach(id => {
  document.getElementById(id).addEventListener("click", e => {
    e.target.classList.toggle("active");
    e.target.textContent = e.target.textContent.includes("Off")
      ? e.target.textContent.replace("Off", "On")
      : e.target.textContent.replace("On", "Off");
  });
});

// Leaflet map
var map = L.map('map').setView([40.7128, -74.0060], 13); // NYC coords
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);
L.marker([40.7128, -74.0060]).addTo(map).bindPopup("You are here").openPopup();

// Voice assistant mock
document.getElementById("startVoice").addEventListener("click", () => {
  const voiceLog = document.getElementById("voiceLog");
  const commands = ["Navigate home", "Play music", "Turn on AC", "Increase speed"];
  let heard = commands[Math.floor(Math.random() * commands.length)];
  voiceLog.innerHTML = `<strong>Heard:</strong> "${heard}"`;
});

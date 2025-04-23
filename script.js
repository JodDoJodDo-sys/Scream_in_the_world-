const messages = [
  "OH? YOU'RE SCREAMING NOW? CUTE. 😌",
  "BET THAT FELT GOOD, HUH? 🥴",
  "WOW, SUCH RAGE... MUCH SCREAM. 😏",
  "DID THAT FIX YOUR WIFI THOUGH? 🧐",
  "WHO HURT YOU? (besides Mondays) 💀",
  "LOUDER, I CAN'T HEAR YOUR EXISTENTIAL CRISIS 😶‍🌫",
  "IS THIS THERAPY OR JUST SCREAM-FM? 📢",
  "AH YES, DIGITAL RAGE RELIEF™ 💥"
];

const button = document.getElementById("screamButton");
const messageBox = document.getElementById("messageBox");
const rageSound = document.getElementById("rageSound");
const container = document.getElementById("rageContainer");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];

  rageSound.volume = 1;
  rageSound.currentTime = 0;
  rageSound.play();

  // Detect volume level (mocked via system)
  let audioLevel = rageSound.volume;

  // Force animation based on volume
  container.classList.remove("explode", "glow");

  if (audioLevel > 0.7) {
    container.classList.add("explode");
  } else {
    container.classList.add("glow");
  }

  setTimeout(() => {
    container.classList.remove("explode", "glow");
  }, 600);
});

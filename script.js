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

  rageSound.play().then(() => {
    // It played successfully!
    container.classList.remove("explode", "glow");
    container.classList.add("explode");

    setTimeout(() => {
      container.classList.remove("explode");
    }, 800);
  }).catch(error => {
    // If blocked (e.g., autoplay issue), fallback glow
    console.warn("Sound failed to play. Maybe muted? ", error);
    container.classList.add("glow");
    setTimeout(() => {
      container.classList.remove("glow");
    }, 800);
  });
});

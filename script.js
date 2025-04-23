const messages = [
  "I HATE MONDAYS 😤",
  "WHY DO ADS EXIST 😩",
  "STOP ASKING ME FOR A SUBSCRIPTION 💢",
  "I JUST WANTED TO RELAX 🫠",
  "WHY IS LIFE LIKE THIS 💀",
  "GIVE ME WIFI THAT WORKS 😠",
  "I SCREAMED AND I FEEL ALIVE 😵‍💫",
  "NOTHING MAKES SENSE BUT OK 😶‍🌫",
  "SCREAMING INTO THE VOID IS THERAPY 👹",
  "I FORGOT MY PASSWORD AGAIN 😡",
  "WHERE IS THE SKIP BUTTON 🚫",
  "I’M TIRED OF BEING TIRED 😭",
  "THE WIFI DROPPED MID GAME 🕹🔥",
  "WHY SO MANY TABS OPEN?! 🤯"
];

const button = document.getElementById("screamButton");
const messageBox = document.getElementById("messageBox");
const rageSound = document.getElementById("rageSound");
const container = document.getElementById("rageContainer");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];
  rageSound.currentTime = 0;
  rageSound.play();

  // Animation effect
  container.classList.add("glitch");
  setTimeout(() => {
    container.classList.remove("glitch");
  }, 400);
});

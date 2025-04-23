const messages = [
  "I HATE MONDAYS 😤",
  "WHY DO ADS EXIST 😩",
  "STOP ASKING ME FOR A SUBSCRIPTION 💢",
  "I JUST WANTED TO RELAX 🫠",
  "WHY IS LIFE LIKE THIS 💀",
  "GIVE ME WIFI THAT WORKS 😠",
  "I SCREAMED AND I FEEL ALIVE 😵‍💫",
  "NOTHING MAKES SENSE BUT OK 😶‍🌫",
  "SCREAMING INTO THE VOID IS THERAPY 👹"
];

const button = document.getElementById("screamButton");
const messageBox = document.getElementById("messageBox");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];

  const selectedVoice = voiceSelect.value;
  let voice = "UK English Male"; // default

  if (selectedVoice === "UK English Female") {
    voice = "UK English Female";
  } else if (selectedVoice === "US English Male") {
    voice = "US English Male";
  } else if (selectedVoice === "US English Female") {
    voice = "US English Female";
  }

  responsiveVoice.speak(messageBox.textContent, voice);
});

userText.addEventListener("input", () => {
  const customText = userText.value;
  messageBox.textContent = customText;
});

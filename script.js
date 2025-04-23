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
  let voice = "UK English Male"; // Default voice

  // Update the voice based on the user's selection
  if (selectedVoice === "UK English Female") {
    voice = "UK English Female";
  } else if (selectedVoice === "US English Male") {
    voice = "US English Male";
  } else if (selectedVoice === "US English Female") {
    voice = "US English Female";
  } else if (selectedVoice === "Spanish Male") {
    voice = "Spanish Male";
  } else if (selectedVoice === "Spanish Female") {
    voice = "Spanish Female";
  } else if (selectedVoice === "French Male") {
    voice = "French Male";
  } else if (selectedVoice === "French Female") {
    voice = "French Female";
  } else if (selectedVoice === "German Male") {
    voice = "German Male";
  } else if (selectedVoice === "German Female") {
    voice = "German Female";
  } else if (selectedVoice === "Italian Male") {
    voice = "Italian Male";
  } else if (selectedVoice === "Italian Female") {
    voice = "Italian Female";
  } else if (selectedVoice === "Portuguese Male") {
    voice = "Portuguese Male";
  } else if (selectedVoice === "Portuguese Female") {
    voice = "Portuguese Female";
  } else if (selectedVoice === "Dutch Male") {
    voice = "Dutch Male";
  } else if (selectedVoice === "Dutch Female") {
    voice = "Dutch Female";
  } else if (selectedVoice === "Russian Male") {
    voice = "Russian Male";
  } else if (selectedVoice === "Russian Female") {
    voice = "Russian Female";
  } else if (selectedVoice === "Japanese Male") {
    voice = "Japanese Male";
  } else if (selectedVoice === "Japanese Female") {
    voice = "Japanese Female";
  } else if (selectedVoice === "Chinese Male") {
    voice = "Chinese Male";
  } else if (selectedVoice === "Chinese Female") {
    voice = "Chinese Female";
  }

  // Speak the message with the selected voice
  responsiveVoice.speak(messageBox.textContent, voice);

  // Random color effect on scream press
  changeColor();
});

userText.addEventListener("input", () => {
  const customText = userText.value;
  messageBox.textContent = customText;
});

function changeColor() {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A1", "#F1C40F", "#9B59B6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
  document.body.style.color = "white";
  setTimeout(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }, 1500); // Reset color after 1.5 seconds
}

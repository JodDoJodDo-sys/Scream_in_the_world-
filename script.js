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
const rageSound = document.getElementById("rageSound");
const rageMeme = document.getElementById("rageMeme");

button.addEventListener("click", () => {
  // Random message from the array
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];

  // Play sound
  rageSound.play();

  // Speak the message
  speakText();

  // Fetch a random meme image for daily rage meme
  fetchDailyMeme();
  
  // Activate sound & animation effects
  changeBackgroundColor();
  animatePageEffects();
});

// Function to speak text input by user
function speakText() {
  const text = document.getElementById("userText").value || messageBox.textContent;
  const voice = document.getElementById("voiceSelect").value;
  responsiveVoice.speak(text, voice);
}

// Fetch daily rage meme
function fetchDailyMeme() {
  // Replace with an actual URL for random rage memes
  rageMeme.src = "https://i.imgur.com/AB6sYI0.jpg"; // Meme URL
}

// Function to change background color dynamically
function changeBackgroundColor() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Function to trigger page effects like shaking
function animatePageEffects() {
  document.body.classList.add('shake');
  setTimeout(() => {
    document.body.classList.remove('shake');
  }, 1000);
}

// Dynamic animation for shaking page
const style = document.createElement('style');
style.innerHTML = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  }
  .shake {
    animation: shake 1s ease-in-out;
  }
`;
document.head.appendChild(style);

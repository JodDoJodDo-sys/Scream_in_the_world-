const button = document.getElementById("screamButton");
const messageBox = document.getElementById("messageBox");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");

// Initialize default voice settings
let currentVoice = "UK English Male"; // Default voice

// Function to update the voice based on user selection
function setVoice(voice) {
  currentVoice = voice;
}

// Change voice when user selects different option
voiceSelect.addEventListener("change", () => {
  setVoice(voiceSelect.value);
});

// Handle the scream button click
button.addEventListener("click", () => {
  // Get custom text typed by the user or use default message
  const customMessage = userText.value.trim();
  if (customMessage === "") {
    messageBox.textContent = "No message entered. Please type something!";
    return;
  }
  
  // Display the custom message entered by the user
  messageBox.textContent = customMessage;

  // Speak the message in the selected voice
  responsiveVoice.speak(customMessage, currentVoice);

  // Handle the volume effect (shake or glowing)
  handleVolumeEffect();
});

// Function to handle volume effects (shake or glowing)
function handleVolumeEffect() {
  const volume = Math.random(); // Simulate volume for demonstration
  
  if (volume > 0.5) {
    // Shake the page if the volume is high
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 500);
  } else {
    // Apply glowing effect if the volume is low
    document.body.classList.add("glowing");
    setTimeout(() => document.body.classList.remove("glowing"), 1500);
  }
}

// Handle custom text input by the user
userText.addEventListener("input", () => {
  // When the user types, speak the text they input
  const customText = userText.value;
  messageBox.textContent = customText;
  responsiveVoice.speak(customText, currentVoice);
});

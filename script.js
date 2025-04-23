const screamButton = document.getElementById("screamButton");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");
const messageBox = document.getElementById("messageBox");

screamButton.addEventListener("click", () => {
  const message = userText.value.trim();
  if (!message) {
    messageBox.textContent = "Type something first!";
    return;
  }

  messageBox.textContent = message;

  const selectedVoice = voiceSelect.value;
  responsiveVoice.speak(message, selectedVoice);

  // Glow color based on voice (positive vs dramatic)
  if (selectedVoice.includes("Spanish") || selectedVoice.includes("French") || selectedVoice.includes("Japanese")) {
    messageBox.style.borderColor = "dodgerblue";
    messageBox.style.boxShadow = "0 0 20px dodgerblue";
  } else {
    messageBox.style.borderColor = "red";
    messageBox.style.boxShadow = "0 0 20px red";
  }

  // Add shaking and vibration
  messageBox.classList.add("shake");
  navigator.vibrate([100, 50, 100]);

  setTimeout(() => {
    messageBox.classList.remove("shake");
  }, 1000);
});
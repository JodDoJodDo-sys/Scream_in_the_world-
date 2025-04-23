const screamButton = document.getElementById("screamButton");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");
const messageBox = document.getElementById("messageBox");

const colours = ["#ff0066", "#6600ff", "#00cccc", "#ffcc00", "#00ff99", "#cc3333", "#0099ff", "#ff0099"];

// Load voices
window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach(voice => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = ${voice.name} (${voice.lang});
    voiceSelect.appendChild(option);
  });
};

function changeBackground() {
  const glowColours = ["#ff0066", "#00ccff", "#33ff00", "#ffcc00", "#cc00ff", "#ff3300"];
  const colour = glowColours[Math.floor(Math.random() * glowColours.length)];
  document.body.style.background = radial-gradient(circle, ${colour} 0%, #000000 100%);
}

screamButton.addEventListener("click", () => {
  const message = userText.value.trim();
  if (!message) {
    messageBox.textContent = "Type something first!";
    return;
  }

  messageBox.textContent = message;
  changeBackground();

  const utterance = new SpeechSynthesisUtterance(message);
  const selectedVoice = voiceSelect.value;
  const voice = speechSynthesis.getVoices().find(v => v.name === selectedVoice);
  if (voice) {
    utterance.voice = voice;
  }
  speechSynthesis.speak(utterance);

  // Add shaking and vibration
  messageBox.classList.add("shake");
  navigator.vibrate([100, 50, 100]);

  setTimeout(() => {
    messageBox.classList.remove("shake");
  }, 1000);
});

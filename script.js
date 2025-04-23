const screamButton = document.getElementById("screamButton");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");
const messageBox = document.getElementById("messageBox");

const colours = ["#ff0066", "#6600ff", "#00cccc", "#ffcc00", "#00ff99", "#cc3333", "#0099ff", "#ff0099"];

// Ensure voices load
window.speechSynthesis.onvoiceschanged = function() {
  const voices = window.speechSynthesis.getVoices();
  const englishUKVoices = voices.filter(voice => voice.lang === 'en-GB');
  voiceSelect.innerHTML = ''; // Clear any previous options

  if (englishUKVoices.length > 0) {
    englishUKVoices.forEach(function(voice) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = ${voice.name} (${voice.lang});
      voiceSelect.appendChild(option);
    });

    // Select the first available voice
    voiceSelect.value = englishUKVoices[0].name;
  }
};

// Function to change background with smooth transition
function changeBackground() {
  const randomColor = colours[Math.floor(Math.random() * colours.length)];
  document.body.style.background = linear-gradient(-45deg, ${randomColor}, #222);
}

screamButton.addEventListener("click", () => {
  const message = userText.value.trim();
  if (!message) {
    messageBox.textContent = "Type something first!";
    return;
  }

  // Set the message and apply background change
  messageBox.textContent = message;
  changeBackground();

  // Get the selected voice
  const utterance = new SpeechSynthesisUtterance(message);
  const selectedVoice = voiceSelect.value;
  const voice = speechSynthesis.getVoices().find(v => v.name === selectedVoice);
  if (voice) {
    utterance.voice = voice;
  }
  speechSynthesis.speak(utterance);

  // Add shake animation and vibration
  messageBox.classList.add("shake");
  navigator.vibrate([100, 50, 100]);

  // Remove shake animation after it completes
  setTimeout(() => {
    messageBox.classList.remove("shake");
  }, 1000);
});

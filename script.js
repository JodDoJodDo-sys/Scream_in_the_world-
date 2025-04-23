const screamButton = document.getElementById("screamButton");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");
const messageBox = document.getElementById("messageBox");

const colours = ["#ff0066", "#6600ff", "#00cccc", "#ffcc00", "#00ff99", "#cc3333", "#0099ff", "#ff0099"];

// Load voices function
function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  const englishUKVoices = voices.filter(voice => voice.lang === 'en-GB');
  voiceSelect.innerHTML = '';

  if (englishUKVoices.length > 0) {
    englishUKVoices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = ${voice.name} (${voice.lang}); // FIXED
      voiceSelect.appendChild(option);
    });

    voiceSelect.value = englishUKVoices[0].name;
  }
}

// Event to reload voices if needed
if (typeof speechSynthesis !== "undefined") {
  speechSynthesis.onvoiceschanged = loadVoices;
}

// Make sure voices load after DOM ready
window.addEventListener("DOMContentLoaded", () => {
  loadVoices();
});

function changeBackground() {
  const randomColor = colours[Math.floor(Math.random() * colours.length)];
  document.body.style.background = linear-gradient(-45deg, ${randomColor}, #222); // FIXED
  document.body.style.transition = "background 0.5s ease";
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

  messageBox.classList.add("shake");
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

  setTimeout(() => {
    messageBox.classList.remove("shake");
  }, 1000);
});

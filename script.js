
const screamInput = document.getElementById("screamInput");
const voiceSelect = document.getElementById("voiceSelect");
const echoSound = document.getElementById("echoSound");

// Load available voices
let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = ${voice.name} (${voice.lang});
    voiceSelect.appendChild(option);
  });
}

window.speechSynthesis.onvoiceschanged = loadVoices;

// Speak the text
function scream() {
  const text = screamInput.value.trim();
  if (!text) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = voices[voiceSelect.value];
  utter.pitch = 1;
  utter.rate = 1;

  echoSound.play();
  speechSynthesis.speak(utter);
}

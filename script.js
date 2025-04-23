const screamButton = document.getElementById("screamButton");
const messageBox = document.getElementById("messageBox");
const userText = document.getElementById("userText");
const voiceSelect = document.getElementById("voiceSelect");

screamButton.addEventListener("click", () => {
  const text = userText.value.trim();
  const voice = voiceSelect.value;

  if (!text) {
    messageBox.textContent = "SAY SOMETHING RAGEY!";
    return;
  }

  messageBox.textContent = text;
  messageBox.classList.add("glow");

  responsiveVoice.speak(text, voice);

  // Background mood based on caps (shouting)
  const capsRatio = text.split("").filter(c => c === c.toUpperCase()).length / text.length;

  if (capsRatio > 0.6) {
    document.body.style.background = "radial-gradient(circle, red, black)";
    document.body.classList.add("shake");
  } else {
    document.body.style.background = "radial-gradient(circle, #00ffaa, #002211)";
    document.body.classList.remove("shake");
  }

  setTimeout(() => {
    messageBox.classList.remove("glow");
    document.body.classList.remove("shake");
  }, 2000);
});

function scream() {
  const text = document.getElementById("screamText").value;
  const voiceOption = document.getElementById("voiceSelect").value;
  const echoSound = document.getElementById("echoSound");
  const feedback = document.getElementById("feedback");

  if (text.trim() === "") {
    feedback.textContent = "Please type something first.";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  if (voiceOption === "female") {
    utterance.voice = voices.find(v => v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("woman")) || voices[0];
  } else {
    utterance.voice = voices.find(v => v.name.toLowerCase().includes("male") || v.name.toLowerCase().includes("man")) || voices[0];
  }

  utterance.pitch = 1;
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
  echoSound.play();

  feedback.textContent = "Screamed into the void...";
}

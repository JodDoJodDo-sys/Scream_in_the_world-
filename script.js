document.addEventListener("DOMContentLoaded", () => {
    const screamButton = document.getElementById("screamButton");
    const userText = document.getElementById("userText");
    const voiceSelect = document.getElementById("voiceSelect");
    const messageBox = document.getElementById("messageBox");
  
    const colours = ["#ff0066", "#6600ff", "#00cccc", "#ffcc00", "#00ff99", "#cc3333", "#0099ff", "#ff0099"];
  
    function loadVoices() {
      const voices = speechSynthesis.getVoices();
      if (!voices.length) {
        setTimeout(loadVoices, 100);
        return;
      }
  
      const englishUKVoices = voices.filter(voice => voice.lang === "en-GB");
      voiceSelect.innerHTML = "";
  
      englishUKVoices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = ${voice.name} (${voice.lang});
        voiceSelect.appendChild(option);
      });
  
      if (englishUKVoices.length > 0) {
        voiceSelect.value = englishUKVoices[0].name;
      }
    }
  
    function changeBackground() {
      const randomColor = colours[Math.floor(Math.random() * colours.length)];
      document.body.style.background = linear-gradient(-45deg, ${randomColor}, #222);
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
      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.name === selectedVoice);
  
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
  
    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  
    loadVoices(); // Initial load
  });

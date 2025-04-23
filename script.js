    const screamButton = document.getElementById('screamButton');
    const voiceSelect = document.getElementById('voiceSelect');
    const userText = document.getElementById('userText');
    const messageBox = document.getElementById('messageBox');
    const rageBox = document.getElementById('rageBox');

    function populateVoices() {
      const voices = responsiveVoice.getVoices();
      voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
      });
    }

    function shake(intensity) {
      document.body.style.transition = 'transform 0.1s';
      document.body.style.transform = translate(${Math.random() * intensity}px, ${Math.random() * intensity}px);
      setTimeout(() => {
        document.body.style.transform = 'translate(0, 0)';
      }, 100);
    }

    screamButton.addEventListener('click', () => {
      const text = userText.value.trim();
      const selectedVoice = voiceSelect.value;

      if (!text) {
        messageBox.textContent = "Type something to scream!";
        return;
      }

      messageBox.textContent = "Screaming...";

      responsiveVoice.speak(text, selectedVoice, {
        onstart: () => {
          rageBox.style.animation = 'glow 0.5s infinite alternate';
        },
        onend: () => {
          rageBox.style.animation = 'glow 2s infinite alternate';
        },
        volume: 1,
        rate: 1,
        pitch: 1
      });

      // Optional: shake effect based on message length
      const intensity = Math.min(text.length * 0.5, 50);
      shake(intensity);
    });

    populateVoices();

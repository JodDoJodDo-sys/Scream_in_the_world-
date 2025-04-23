const messages = [
    "I HATE MONDAYS 😤",
    "WHY DO ADS EXIST 😩",
    "STOP ASKING ME FOR A SUBSCRIPTION 💢",
    "I JUST WANTED TO RELAX 🫠",
    "WHY IS LIFE LIKE THIS 💀",
    "GIVE ME WIFI THAT WORKS 😠",
    "I SCREAMED AND I FEEL ALIVE 😵‍💫",
    "NOTHING MAKES SENSE BUT OK 😶‍🌫️",
    "SCREAMING INTO THE VOID IS THERAPY 👹"
  ];
  
  const button = document.getElementById("screamButton");
  const messageBox = document.getElementById("messageBox");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageBox.textContent = messages[randomIndex];
  });
  
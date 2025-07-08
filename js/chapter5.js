function revealNote() {
  document.querySelector('.note-container').style.display = 'block';
  document.getElementById("bgMusic").play();
  document.querySelector('.message-icon').style.display = 'none';
}

// Emoji falling effect
const emojiContainer = document.getElementById("emojiContainer");
const emojis = ["💖", "💕", "💌", "💘", "🌸"];

function createEmoji() {
  const emoji = document.createElement("span");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (Math.random() * 2 + 3) + "s";
  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createEmoji, 300);

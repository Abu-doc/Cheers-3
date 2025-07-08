const element = document.getElementById("typewriter");
const button = document.getElementById("continueBtn");

const lines = [
   "She wasn't created by love.",
  "She was forged — in silence, fire, and sleepless nights.",
  "Not everyone survives chaos. But she made it her home.",
  "On empty highways, she dances with death and smiles.",
  "The Forza Queen. The Porsche Priestess. Blonde fury with grey eyes.",
  "Her music? Phonk. Her church? 9000 RPMs. Her truth? No brakes.",
  "People called her crazy — they couldn’t handle real.",
  "She's not your fantasy. She's your warning label.",
  "Her name is ............. Ana..."
];

let currentLine = 0;
let currentChar = 0;

function typeLetterByLetter() {
  if (currentLine >= lines.length) {
    button.style.display = "block";
    return;
  }

  const fullLine = lines[currentLine];

  if (currentChar < fullLine.length) {
    element.innerHTML += fullLine.charAt(currentChar);
    currentChar++;
    setTimeout(typeLetterByLetter, 70); // typing speed per letter
  } else {
    element.innerHTML += "\n\n";
    currentLine++;
    currentChar = 0;
    setTimeout(typeLetterByLetter, 600); // pause between lines
  }
}

window.onload = () => {
  typeLetterByLetter();

  // Adjust audio volumes
  const fireSound = document.getElementById("fire-sound");
  const bgMusic = document.getElementById("bg-music");

  fireSound.volume = 0.2;   // soft background crackle
  bgMusic.volume = 0.6;     // ambient main music
};

function goToNext() {
  window.location.href = "chapter2.html";
}

const typeText = [
  "From time to time",
  "Every Moment to moment",
  "This gender keep hurting and treating her like trash",
  "This gender was ... men",
  "So i kidnapped their leader",
  "Lets beat the shit out of him",
];

let line = 0;
let char = 0;
const typewriter = document.getElementById("typewriter");

function typeLineByLine() {
  if (line >= typeText.length) {
    typewriter.style.opacity = 0;

    setTimeout(() => {
      typewriter.style.display = "none";

      const weaponDiv = document.getElementById("weaponChoice");
      weaponDiv.style.display = "block";
      weaponDiv.style.opacity = 0;

      setTimeout(() => {
        weaponDiv.style.opacity = 1;
      }, 50);
    }, 500);
    return;
  }

  const full = typeText[line];

  if (char < full.length) {
    typewriter.innerHTML += full.charAt(char);
    char++;
    setTimeout(typeLineByLine, 60);
  } else {
    typewriter.innerHTML += "\n";
    line++;
    char = 0;
    setTimeout(typeLineByLine, 400);
  }
}

window.onload = () => {
  typeLineByLine();
};

let selectedWeapon = "fist";
let hitCount = 0;

function setWeapon(weapon) {
  selectedWeapon = weapon;

  const buttons = document.querySelectorAll('.weapon-choice button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.getElementById("weaponChoice").style.display = "none";
  document.getElementById("smashTarget").style.display = "block";
  document.getElementById("smashBtn").style.display = "block";
  document.getElementById("hitCount").style.display = "block";
}

function smashHim() {
  const target = document.getElementById("smashTarget");
  const face = document.getElementById("targetFace");
  const reaction = document.getElementById("hitReaction");

  target.classList.add("hit");

  setTimeout(() => {
    target.classList.remove("hit");
  }, 300);

  let hitSound, voiceSound;

  if (selectedWeapon === 'fist') {
    hitSound = new Audio('../audio/punch3.mp3');
    voiceSound = new Audio('../audio/ouch.mp3');
  } else if (selectedWeapon === 'hammer') {
    hitSound = new Audio('../audio/metal-hit.mp3');
    voiceSound = new Audio('../audio/scream1.mp3');
  } else if (selectedWeapon === 'paw') {
    hitSound = new Audio('../audio/slap2.mp3');
    voiceSound = new Audio('../audio/meow.mp3');
  }

  hitSound.play();
  setTimeout(() => voiceSound.play(), 60);

  // Emoji blood/splat
  reaction.innerText = getRandomEmoji();
  reaction.style.left = `${Math.random() * 80 + 10}%`;
  reaction.style.top = `${Math.random() * 50 + 20}%`;
  reaction.style.display = "block";

  setTimeout(() => {
    reaction.style.display = "none";
  }, 600);

  hitCount++;
  document.getElementById("hitCount").innerText = "Hits: " + hitCount;

  if (hitCount >= 10) {
    document.getElementById("after10").style.display = "block";
    document.getElementById("smashBtn").remove();
    face.src = "../images/dummy-defeated.png";

    setTimeout(() => {
      document.getElementById("nextChapter").style.display = "block";
    }, 1000);
  }
}

function getRandomEmoji() {
  const emojis = ["💥", "🩸", "💢", "🤕", "🤯"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// 🚀 NEW: Redirect to chapter3.html
function goToNext() {
  window.location.href = "../html/chapter3.html";
}

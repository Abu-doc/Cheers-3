window.onload = () => {
  const container = document.getElementById("sparkles");

  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.innerText = "✨";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.animationDuration = (Math.random() * 3 + 2) + "s";
    sparkle.style.fontSize = (Math.random() * 10 + 10) + "px";
    container.appendChild(sparkle);
  }
};

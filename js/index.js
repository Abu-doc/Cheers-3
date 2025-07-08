function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (passwordInput === "041005") {
    window.location.href = "chapter1.html";
  } else {
    errorMsg.textContent = "It’s your birth date, stupid cheese cat 😾💀";
  }
}

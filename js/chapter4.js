const quotes = [
  "Ana, in this page i wanna talk about you.",
  "No, This time i am not gonna say something like 'you are a good person' or 'you are a nice person'.",
  "You know, You always make me smile",
  "But i know that you are not always happy. You are not always smiling.",
  "I know you hate to talk about yourself , but i wanna talk about you.",
  "I know u are a hard shell who wont let anyone in.",
  "You would be dying inside but you would still smile outside.",
  "You tend to hide your feelings, and name them as introvert",
  "Ana, I know one by one everyone who said they love you, left.",
  "You were always the one who stayed, who wait for them to come back.",
  "That's why you want to be alone. cause u scared everyone will leave eventually.",
  "On discord people know Aenoxia as the gamer, who is bold and confident and never afraid.",
  "but behind that screen, there is still that little girl with a little sweet and kind heart.",
  "Your sis became your best friend, and you can talk to her about anything.",
  "You closed urself to the world, and tried to become a person who is not afraid of anything.",
  "I just wanna say, I am proud of you.",
  "You have become soo strong, that you can handle anything.",
  "You are not alone, and you will never be alone.",
  "You are loved by me, and you will always be loved.",
  "And you know what?",
  "Fuck evryone, and fuck everything.",
  "You are enough for yourself , and you are enough for me.",
];

let index = 0;
const quoteElement = document.getElementById("quote");

function showNextQuote() {
  quoteElement.classList.remove("fade-in");
  quoteElement.classList.add("fade-out");

  setTimeout(() => {
    quoteElement.innerText = quotes[index];
    quoteElement.classList.remove("fade-out");
    quoteElement.classList.add("fade-in");

    index++;

    if (index < quotes.length) {
      setTimeout(showNextQuote, 5500);
    } else {
      setTimeout(() => {
        window.location.href = "chapter5.html";
      }, 7000);
    }
  }, 1000);
}

window.onload = showNextQuote;

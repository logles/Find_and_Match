const attemptsTracker = document.querySelector("#attemptsTracker");
const highscoreTracker = document.querySelector("#highscoreTracker");
const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButtom = document.querySelector("#hard");
const difficultyMenu = document.querySelector("#difficultyMenu");
const easyCards = document.querySelectorAll(
  "#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8"
);
const mediumCards = document.querySelectorAll(
  "#card9, #card10, #card11, #card12"
);
const hardCards = document.querySelectorAll(
  "#card13, #card14, #card14, #card16, #card17, #card18"
);
console.log(easyCards);
console.log(mediumCards);
console.log(hardCards);

let chosenDifficulty = "";

document
  .querySelector("#difficultyMenu")
  .addEventListener("click", function (event) {
    const element = event.target;

    if (element.matches("button")) {
      const difficulty = element.textContent;

      if (difficulty === "Easy") {
        chosenDifficulty = "Easy";
        easyCards.forEach(function (card) {
          card.style.display = "block";
        });
        mediumCards.forEach(function (card) {
          card.style.display = "none";
        });
        hardCards.forEach(function (card) {
          card.style.display = "none";
        });
      }
      if (difficulty === "Medium") {
        chosenDifficulty = "Medium";
        easyCards.forEach(function (card) {
          card.style.display = "block";
        });
        mediumCards.forEach(function (card) {
          card.style.display = "block";
        });
        hardCards.forEach(function (card) {
          card.style.display = "none";
        });
      }
      if (difficulty === "Hard") {
        chosenDifficulty = "Hard";
        easyCards.forEach(function (card) {
          card.style.display = "block";
        });
        mediumCards.forEach(function (card) {
          card.style.display = "block";
        });
        hardCards.forEach(function (card) {
          card.style.display = "block";
        });
      }
    }

    console.log(chosenDifficulty);
  });

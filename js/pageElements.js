const attemptsTracker = document.querySelector("#attemptsTracker");
const winsTracker = document.querySelector("#winsTracker");
const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButtom = document.querySelector("#hard");
const difficultyMenu = document.querySelector("#difficultyMenu");
const beginMsg = document.querySelector('#begin');
const easyWins = document.querySelector('#easyWins');
const mediumWins = document.querySelector('#mediumWins');
const hardWins = document.querySelector('#hardWins');
const easyCards = document.querySelectorAll(
  "#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8"
);
const mediumCards = document.querySelectorAll(
  "#card9, #card10, #card11, #card12"
);
const hardCards = document.querySelectorAll(
  "#card13, #card14, #card15, #card16"
);
console.log(easyCards);
console.log(mediumCards);
console.log(hardCards);

let chosenDifficulty = "";
let currentScore = 0;
let scoreToWIn = 0;

document
  .querySelector("#difficultyMenu")
  .addEventListener("click", function (event) {
    const element = event.target;

    if (element.matches("button")) {
      const difficulty = element.textContent;
      beginMsg.style.display = "none";

      if (difficulty === "Easy") {
        chosenDifficulty = "Easy";
        scoreToWIn = 4;
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
        scoreToWIn = 6;
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
        scoreToWIn = 8;
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
    console.log(`Score to win is ${scoreToWIn}`);
    
  });

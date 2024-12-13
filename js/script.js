//TODO: Create a function to shuffle the cards upon page reset
document.addEventListener("DOMContentLoaded", shuffleCards);

function shuffleCards() {
  const allCards = document.querySelectorAll('.allCards .card');
  const cardContainer = document.querySelector('.allCards');
  const shuffledCards = Array.from(allCards)
    .sort(() => Math.random() - 0.5); 
  shuffledCards.forEach(card => cardContainer.appendChild(card));
}
//TODO: Create a function which flips a card when it is clicked on
let attempts = 0;
function cardFlipping() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
      attempts += 1;

      if (attempts % 2 === 0) {
        attemptsTracker.textContent = attempts / 2;
      }
    });
  });
}

cardFlipping();

//TODO: Create a function which recognizes when a pair is found and hides the found pair

//TODO: Create a function which recognizes when the user has won and logs the user's score in local memory

document.addEventListener("DOMContentLoaded", shuffleCards);

function shuffleCards() {
  const allCards = document.querySelectorAll('.allCards .card');
  const cardContainer = document.querySelector('.allCards');
  const shuffledCards = Array.from(allCards)
    .sort(() => Math.random() - 0.5); 
  shuffledCards.forEach(card => cardContainer.appendChild(card));
}

let attempts = 0;
function cardFlipping() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      if(!card.classList.contains("guess") && !card.classList.contains("freeze")){
        card.classList.add("flipped");
        attempts += 1;
        card.classList.add("guess");
        console.log("card clicked")
      };
      if (attempts % 2 === 0 && !card.classList.contains("freeze")) {
        console.log ("even attempts")
        attemptsTracker.textContent = attempts / 2;
        cards.forEach((card) => card.classList.add("freeze"))
        setTimeout(flipBack, 1000);
        function flipBack() {
        cards.forEach((card) => card.classList.remove("flipped", "guess", "freeze"))
        console.log("flipBack successful")
        }};
    });
  });
}

cardFlipping();

//TODO: Create a function which recognizes when a pair is found and hides the found pair

//TODO: Create a function which recognizes when the user has won and logs the user's score in local memory

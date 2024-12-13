//TODO: Create a function to shuffle the cards upon page reset

//TODO: Create a function which flips a card when it is clicked on AND counts how many attempts have been and logs them in the navigation
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

//create a function that updates the page based on the difficulty selected

let difficulty;

//TODO: Create a function which recognizes when a pair is found and hides the found pair

//TODO: Create a function which recognizes when the user has won and logs the user's score in local memory

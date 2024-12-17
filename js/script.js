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

const currentWins = {
  Easy: 0,
  Medium: 0,
  Hard: 0,
  totalWins: 0
}

function trackWins(){
  let storedWins = JSON.parse(localStorage.getItem('storedWins')) || {
    Easy: 0,
    Medium: 0,
    Hard: 0 ,
    totalWins: 0
  }

  storedWins.Easy = currentWins.Easy;
  storedWins.Medium = currentWins.Medium;
  storedWins.Hard = currentWins.Hard;
  storedWins.totalWins = currentWins.Easy + currentWins.Medium + currentWins.Hard

  localStorage.setItem('storedWins', JSON.stringify(storedWins))
}

function loadWins(){
  let storedWins = JSON.parse(localStorage.getItem('storedWins'))

  if (storedWins !== null){
    easyWins.textContent = storedWins.Easy
    mediumWins.textContent = storedWins.Medium
    hardWins.textContent = storedWins.Hard
    winsTracker.textContent = storedWins.totalWins
  }
}

cardFlipping();

//TODO: Create a function which recognizes when a pair is found and hides the found pair

//TODO: Create a function which recognizes when the user has won and logs the user's score in local memory
function checkWin(){
  if (currentScore >= scoreToWIn){
    console.log("Congradulations!");
    if (chosenDifficulty == 'Easy'){
      currentWins.Easy++
    }
    if (chosenDifficulty == 'Medium'){
      currentWins.Medium++
    }
    if (chosenDifficulty == 'Hard'){
      currentWins.Hard++
    }
    currentScore = 0
  }
  currentWins.totalWins = currentWins.Easy + currentWins.Medium + currentWins.Hard
  winsTracker.textContent = currentWins.totalWins
  trackWins()
}
// for testing, add buttons to increase the wins for easy, medium, and hard then remove them once the function is created

document.querySelector("#devMenu")
  .addEventListener("click", function (event) {
    const targetElement = event.target;
    const elementID = targetElement.id;

    if (targetElement.matches("button")){
      
      if (elementID == 'easyDec'){
        if(currentWins.Easy !== 0){         
          currentWins.Easy--;
          easyWins.textContent = currentWins.Easy;
        }
      }
      if (elementID == 'easyInc'){     
        currentWins.Easy++;
        easyWins.textContent = currentWins.Easy;
        }
      if (elementID == 'mediumDec'){
        if(currentWins.Medium !== 0){        
          currentWins.Medium--;
          mediumWins.textContent = currentWins.Medium;
        }
      }
      if (elementID == 'mediumInc'){      
        currentWins.Medium++;
        mediumWins.textContent = currentWins.Medium;
        }
      if (elementID == 'hardDec'){
        if (currentWins.Hard !== 0){
          currentWins.Hard--;
          hardWins.textContent = currentWins.Hard;
        }
      }
      if (elementID == 'hardInc'){
        currentWins.Hard++;
        hardWins.textContent = currentWins.Hard;
      }
      if (elementID == 'scoreDec'){
        if (currentScore !== 0){
          currentScore--
          console.log(`Score to win is ${scoreToWIn}, you currently have ${currentScore}`);
          checkWin()          
        }
      }
      if (elementID == 'scoreInc'){
        currentScore++
        console.log(`Score to win is ${scoreToWIn}, you currently have ${currentScore}`);
        checkWin()        
      }
      if (elementID == 'resetScore'){
        currentWins.Easy = 0;
        currentWins.Medium = 0;
        currentWins.Hard = 0;
        easyWins.textContent = currentWins.Easy;
        mediumWins.textContent = currentWins.Medium;
        hardWins.textContent = currentWins.Hard;
        
        localStorage.setItem('storedWins', JSON.stringify(currentWins))
      }
      currentWins.totalWins = currentWins.Easy + currentWins.Medium + currentWins.Hard
      winsTracker.textContent = currentWins.totalWins
      trackWins()
      }
  })

loadWins()
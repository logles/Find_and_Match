const attemptsTracker = document.querySelector('#attemptsTracker')
const highscoreTracker = document.querySelector("#highscoreTracker")
const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButtom = document.querySelector("#hard");
const difficultyMenu = document.querySelector("#difficultyMenu")

let chosenDifficulty = ""

document.querySelector('#difficultyMenu').addEventListener('click', function(event) {
    const element = event.target;

    if (element.matches('button')) {
       const difficulty = element.textContent;
 
       if(difficulty === 'Easy'){
        chosenDifficulty = "Easy"
       } 
       if(difficulty === 'Medium'){
        chosenDifficulty = "Medium"
       }
       if(difficulty === 'Hard'){
        chosenDifficulty = 'Hard'
       }
    }

    console.log(chosenDifficulty);
    
 })




attemptsTracker.textContent = '25'
console.log(attemptsTracker.textContent);


highscoreTracker.textContent = '999';
console.log(highscoreTracker.textContent);



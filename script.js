const $$ = (selector) => document.getElementById(selector);
const displayYourChoice = $$("your-choice");
const displayComputerChoice = $$("computer-choice");
const displayResult = $$("result");
const displayYourScore = $$("your-score");
const displayTieScore = $$("tie-score");
const displayComputerScore = $$("computer-score");
const hiddenSection = document.querySelectorAll(".hidden-section");

const optionChoice = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

const getyourChoice = function(paramsChoice) {
   if (optionChoice.includes(capitalize(paramsChoice))) {
      return capitalize(paramsChoice);
   } else {
      return getComputerChoice();
   }
}

const getComputerChoice = function() {
   const randomIndex = Math.floor(Math.random() * optionChoice.length);
   return optionChoice[randomIndex];
}

const playRound = function(yourChoice, computerChoice) {
   if (yourChoice === computerChoice) {
      displayResult.textContent = "Tie"
      tieScore++;
   } else if (
      (yourChoice === "Rock" && computerChoice === "Scissors") ||
      (yourChoice === "Paper" && computerChoice === "Rock") ||
      (yourChoice === "Scissors" && computerChoice === "Paper") 
   ) {
      displayResult.textContent = "You Win"
      humanScore++;
   } else {
      displayResult.textContent = "You Lose"
      computerScore++;
   }
   updateScore(yourChoice, computerChoice);
}

const updateScore = function(yourChoice, computerChoice) {
   displayYourChoice.textContent = yourChoice;
   displayComputerChoice.textContent = computerChoice;
   displayYourScore.textContent = humanScore;
   displayTieScore.textContent = tieScore;
   displayComputerScore.textContent = computerScore;
   hiddenSection.forEach(el => {
      el.style.display = 'block';
   });
   if (humanScore === 5) {
      alert("You are the winner");
      disableBtn();
   } else if (computerScore === 5) {
      alert("The computer is the winner");
      disableBtn();
   }
}

const disableBtn = function() {
   document.querySelectorAll(".choice-btn").forEach(el => {
      el.disabled = true;
   });
}

document.querySelector('.select-shape-section').addEventListener('click', (event) => {
   const {target} = event;

   if(!target.matches('button')){
      return;
   }

   if(target.classList.contains('choice-btn')){
      playRound(getyourChoice(target.value), getComputerChoice());
      return;
   }
});

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
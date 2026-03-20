const playButton = document.getElementById("play-button");

const optionChoice = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

const getHumanChoice = function(i) {
   let getHumanInput = prompt("To play, please type between rock, paper, or scissors.");
   console.log(`Round (${i})`);
   if (optionChoice.includes(capitalize(getHumanInput))) {
      console.log(`Your Choice: ${capitalize(getHumanInput)}`);
      return capitalize(getHumanInput);
   } else {
      console.log(`Because your choice is invalid, it is selected automatically: ${getComputerChoice()}`);
      return getComputerChoice();
   }
}

const getComputerChoice = function() {
   const randomIndex = Math.floor(Math.random() * optionChoice.length);
   return optionChoice[randomIndex];
}

const playRound = function(humanChoice, computerChoice) {
   console.log(`Computer Choice: ${computerChoice}`);
   if (humanChoice === computerChoice) {
      console.log("Results: Tie");
      tieScore++;
   } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper") 
   ) {
      console.log("Results: You Win");
      humanScore++;
   } else {
      console.log("Results: You Lose");
      computerScore++;
   }
   console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore} | Tie: ${tieScore}`);
}

playButton.addEventListener("click", () => {
   humanScore = 0;
   computerScore = 0;
   tieScore = 0;
   console.clear();
   for (let i = 1; i <= 5; i++) {
      playRound(getHumanChoice(i), getComputerChoice());
   }
});

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
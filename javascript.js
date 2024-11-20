//Create Variable "rock" for string "Rock" 
const rock = "Rock";
//Create Variable "paper" for string "Paper"
const paper = "Paper";
//Create Variable "scissors" for string "Scissors"
const scissors = "Scissors";

//create Variable "humanSelection" to store the player-choice
let humanSelection = null;


//Create Variable "humanScore" to track the wins of the player
let humanScore = 0;
//Create Variable "computerScore" to track the wins of the computer
let computerScore = 0;

//Buttons
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

//EventListener for Buttons
buttonRock.addEventListener("click", () => {
    playRound(rock);
});
buttonPaper.addEventListener("click", () => {
    playRound(paper);
});
buttonScissors.addEventListener("click", () => {
    playRound(scissors);
});

//Result and Score-Variables for UI
const resultText = document.querySelector(".result-text");
const playerScoreText = document.querySelector("#player-score-sum");
const computerScoreText = document.querySelector("#computer-score-sum");

// Get Choice From Computer - Function
function getComputerChoice() {

    //Create Variable "random" and initialize it with function Math.random() to create a random number between 0 and 1
    let random = Math.random();

    //If random is between 0.33 and 0.66
    //then return "paper"
    if (random > 0.33 && random <= 0.66) {
        return paper;
    }
    //If random is between 0 and 0.33 
    //then return "rock"
    else if (random <= 0.33) {
        return rock;
    }
    //if random is between 0.66 and 1
    //then return "scissors"
    else {
        return scissors;
    }

}

// Play a Round - Function which takes the choices of the players and look who is winning
function playRound(humanChoice) {
    
    //create Variable "computerChoice" and store the result of the function "getComputerChoice"
    const computerChoice = getComputerChoice();
    
    //If HumanChoice is Scissors and computerChoice is Rock
    //If HumanChoice is Paper and CompiterChoice is Scissors
    //If HumanChoice is Rock and computerChoice is Paper
    //Then Computer wins, therefore increment computerWins and alert the winner
    if ((humanChoice === rock && computerChoice === paper) || (humanChoice === scissors && computerChoice === rock) || (humanChoice === paper && computerChoice === scissors)) {
        computerScore++;
        resultText.textContent = `You loose, ${computerChoice} beats ${humanChoice}!`;
        computerScoreText.textContent = computerScore;
    }

    //If humanChoice is Rock and computerChoice is Scissors 
    //If Humanchoche is Scissors and computerChoice is Paper
    //If Humanchoice is Paper and ComputerChoice is Rock
    //Then Player wins, increment playerWins and alert the winner

    else if ((humanChoice === rock && computerChoice === scissors) || (humanChoice === scissors && computerChoice === paper) || (humanChoice === paper && computerChoice === rock)) {
        humanScore++;
        resultText.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        playerScoreText.textContent = humanScore;

    }
    //If the two choices are the same, the round ends with a tie, alert that nobodys a winner

    else {
        resultText.textContent = `Tie! ${humanChoice} vs ${computerChoice}!`;
    }

    if (humanScore >= 5 || computerScore >= 5) {
        //Declare a Winner with the Function "declareWinner"
        declareWinner(humanScore, computerScore);
    }
} // end function "playRound"

//Declare a Winner - Function, arguments are the scores
function declareWinner(humanScore, computerScore) {

    //If humanScore and computerScore are similar
    if (humanScore === computerScore) {
        //Then Nobody is a Winner
        //Alert "Tie! Nobody wins!
        resultText.textContent = "Tie! Nobody's a winner!";
    }
    // Else If humanScore is bigger than computerScore

    else if (humanScore > computerScore) {
        //Then human is winner
        //Alert "You win!"
        resultText.textContent = "You win!"; 
    }
    //Else 
    else {
        //Computer Wins
        //Alert "You loose! Computer has won!"
        resultText.textContent = "You loose! Computer has won!";

    } //end if-clause
} // end function declareWinner


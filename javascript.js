//Create Variable "rock" for string "Rock" 
const rock = "Rock";
//Create Variable "paper" for string "Paper"
const paper = "Paper";
//Create Variable "scissors" for string "Scissors"
const scissors = "Scissors";
//Create Variable "humanScore" to track the wins of the playser
let humanScore = 0;
//Create Variable "computerScore" to track the wins of the computer
let computerScore = 0;

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

//Get Choice from Human Player - Function
function getHumanChoice() {

    //Create variable "humanChoice" to store the answer from player, initialize with null;
    let humanChoice = null;
    
    //Ask the Player "Which Option do you want to take? Type in 1 for "Rock", 2 for "Paper" and 3 for "Scissors" and store the anser in variable "humanChoice"
    humanChoice = prompt('Which Option do you want to take? Type "1" for "Rock, "2" for Paper and "3" for "Scissors".',1);

    switch(humanChoice) {

        //If humanChoice is 1, return rock
        case "1":
            return rock;
            break;
        
         // If humanChoice is 2, return paper
        case "2":
            return paper;
            break;

        //if humanChoice is 3, return scissors
        case "3":
            return scissors;
            break;

        // if answer is NOT on of this options, 
        // give message to the user that this answer is not valid
        default: 
            alert("This answer is not valid, please choose a number between 1 and 3.");
            // call function again to get a valid answer
            return getHumanChoice();
    }


}

// Play a Round - Function which takes the choices of the players and look who is winning
function playRound(humanChoice, computerChoice) {

//If HumanChoice is Scissors and computerChoice is Rock
//If HumanChoice is Paper and CompiterChoice is Scissors
//If HumanChoice is Rock and computerChoice is Paper
    //Then Computer wins, therefore increment computerWins and alert the winner
if ((humanChoice === rock && computerChoice === paper) || (humanChoice === scissors && computerChoice === rock) || (humanChoice === paper && computerChoice === scissors)) {
    computerScore++;
    alert(`You loose, ${computerChoice} beats ${humanChoice}!`);
} 

//If humanChoice is Rock and computerChoice is Scissors 
//If Humanchoche is Scissors and computerChoice is Paper
//If Humanchoice is Paper and ComputerChoice is Rock
    //Then Player wins, increment playerWins and alert the winner

    else if ((humanChoice === rock && computerChoice === scissors) || (humanChoice === scissors && computerChoice === paper) || (humanChoice === paper && computerChoice === rock))
{
    humanScore++;
    alert(`You win, ${humanChoice} beats ${computerChoice}!`);

} 
//If the two choices are the same, the game ends with a tie, alert that nobodys a winner

else {
    alert(`Tie! ${humanChoice} vs ${computerChoice}!`);
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
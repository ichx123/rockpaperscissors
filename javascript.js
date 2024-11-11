//Create Variable "rock" for string "Rock" 
const rock = "Rock";
//Create Variable "paper" for string "Paper"
const paper = "Paper";
//Create Variable "scissors" for string "Scissors"
const scissors = "Scissors";

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
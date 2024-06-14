function getComputerChoice() {
    let randomValue = Math.floor(Math.random()*3);
    if(randomValue == 0) {
        return "rock";
    }
    else if(randomValue == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice",'').toLowerCase();
    return humanChoice;
}
let humanScore = 0, computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You won! "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You won! "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You won! "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }
    else {
        console.log("You lose! "+computerChoice+" beats "+humanChoice);
        computerScore++;
    }
}
function playGame() {
    alert("Game started!");
    for(let i=1; i<=5; i++) {
        console.log("Round " + i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Your Score: "+humanScore);
    console.log("Computer Score: "+computerScore);
    if(humanScore > computerScore) {
        alert("You won the game");
    }
    else if(computerScore > humanScore) {
        alert("Computer won the game!");
    }
    else {
        alert("It's a tie");
    }
}
function restartGame() {
    humanScore = 0;
    computerScore = 0;
}
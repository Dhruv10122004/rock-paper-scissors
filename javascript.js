let playerScore = 0;
let computerScore = 0;
// Function to generate the computer choice
const getComputerChoice = () => {
    let computerChoice = Array("Rock", "Paper", "Scissors");
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

//Function to determine the winner of a round
const determineWinner = (playerChoice, computerChoice) => {
    if(playerChoice === computerChoice) return "draw";
    if(
        (playerChoice === "rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock") 
    )
    {
        // if(playerChoice === "rock") {
        //     document.getElementById('rock').style.backgroundColor = 'lightgreen';
        // }
        // if(playerChoice === "paper") {
        //     document.getElementById('rock').style.backgroundColor = 'lightgreen';
        // }
        // if(playerChoice === "scissors") {
        //     document.getElementById('rock').style.backgroundColor = 'lightgreen';
        // }
        return "player";
    }
    else {
        return "computer";
    }
}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
}

const playRound = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    if(winner === "player") {
        playerScore++;
    }
    else if(winner === "computer") {
        computerScore++;
    }
    const resultDiv = document.getElementById('results');

    if(winner === "player" || winner === "computer") {
        resultDiv.innerHTML = `<br><br>Player chose ${playerChoice}, Computer chose ${computerChoice}.<br><br>
        PLAYER: ${playerScore}, COMPUTER: ${computerScore}.`
        resultDiv.setAttribute("style", "color: white; font-family: cursive; font-weight: 600; font-size: larger; text-align: center");
    }
    else {
        resultDiv.innerHTML = `<br>Draw
        <br><br>
        PLAYER: ${playerScore}, COMPUTER: ${computerScore}.`
        resultDiv.setAttribute("style", "color: white; font-family: cursive; font-weight: 600; font-size: larger; text-align: center");
    }
    if(playerScore === 5) {
        resultDiv.innerHTML += "<br><br>You won the game!"
        resultDiv.setAttribute("style", "color: white; font-family: cursive; font-weight: 600; font-size: larger; text-align: center");
        alert("You won the game!");
        resetGame();
    }
    else if(computerScore === 5) {
        resultDiv.innerHTML += "<br><br>Computer won the game!"
        resultDiv.setAttribute("style", "color: white; font-family: cursive; font-weight: 600; font-size: larger; text-align: center");
        alert("Computer won the game!");
        resetGame();
    }
}
document.getElementById('start').addEventListener("click", () => {
    const indicateDiv = document.getElementById('indicate');
    indicateDiv.innerHTML += "<br>The Game has begun."
    indicateDiv.setAttribute("style", "color: white; text-align: center; font-family: cursive; font-size: large;");
});
document.getElementById('rock').addEventListener("click", function () {
    playRound("Rock");
})
document.getElementById('paper').addEventListener("click", function () {
    playRound("Paper");
})
document.getElementById('scissors').addEventListener("click", function () {
    playRound("Scissors");
})
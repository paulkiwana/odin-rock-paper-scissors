let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "It's a Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `You win, your ${humanChoice} beats computer's ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose, computer's ${computerChoice} beats your ${humanChoice}`;
    }
}

const updateScore = () => {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

const checkWinner = () => {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, the computer won the game.");
        resetGame();
    }
}

const resetGame = () => {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

const handleButtonClick = (humanChoice) => {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    updateScore();
    checkWinner();
}

document.getElementById('rock').addEventListener('click', () => handleButtonClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleButtonClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleButtonClick('scissors'));

updateScore();
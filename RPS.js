const getComputerChoice = () => {
    const choices = ["Rock","Paper","Scissors"];
   const randomIndex = Math.floor(Math.random() * choices.length);
console.log("computer chooses " + choices[randomIndex]);

}
getComputerChoice()

const getHumanChoice = () => {
    const humanChoice = prompt("enter choice","Rock");
    console.log("I choose " + humanChoice);
}
getHumanChoice()
let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
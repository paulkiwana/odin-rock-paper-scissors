const getComputerChoice = () => {
    const choices = ["Rock","Paper","Scissors"];
   const randomIndex = Math.floor(Math.random() * choices.length);
console.log(choices[randomIndex]);

}
getComputerChoice()

const getHumanChoice = () => {
    const humanChoice = prompt("enter choice","Rock");
    console.log(humanChoice);
}
getHumanChoice()
let humanScore = 0;
let computerScore = 0;
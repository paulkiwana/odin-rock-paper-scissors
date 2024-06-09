const getComputerChoice = () => {
    const choices = ["rock","paper","scissors"];
   const computerChoice = Math.floor(Math.random() * choices.length);
return choices[computerChoice];

}
//getComputerChoice()

const getHumanChoice = () => {
    const choice = prompt("enter choice","Rock");
    const humanChoice = choice.toLowerCase();
   return humanChoice;
}
//getHumanChoice()



const playRound = (humanChoice, computerChoice) => {
if(humanChoice ===  computerChoice){
return "Its a Tie"
} else if(
    (humanChoice === "rock" && computerChoice === "scissors")||
    (humanChoice === "scissors" && computerChoice === "paper")|| 
    (humanChoice === "paper" && computerChoice === "rock")){
return `You win ${humanChoice} beats ${computerChoice}`
} else{
    return `You lose ${computerChoice} beats ${humanChoice}`
}
}

//playRound(humanSelection, computerSelection);

const playGame = () => {
    let humanScore = 0;
let computerScore = 0;
    for(let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const score = playRound(humanSelection, computerSelection);
console.log(score);        
    
if(score.includes("win")){
    humanScore++
} else if(score.includes("lose")){
    computerScore++
}
}
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`)
}
playGame()
const getComputerChoice = () => {
    const choices = ["Rock","Paper","Scissors"];
   const randomIndex = Math.floor(Math.random() * choices.length);
console.log(choices[randomIndex]);

}
getComputerChoice()
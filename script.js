let playerScore = 0
let computerScore = 0

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const outcomeDiv = document.querySelector('#outcome');

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = "It's a Tie";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You Lost";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You Won";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++ 
        const p = document.createElement('p');
        p.innerText = "You Lost";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You Won";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You Lost";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You Won";
        outcomeDiv.appendChild(p);
    }
}    

// const game = () => {
//     for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = prompt("Rock,  Paper or Scissors").toLowerCase();
//     playRound(playerSelection, computerSelection);
//     }

//     if (playerScore > computerScore) {
//         return "You Won The Game!"
//     } else if (playerScore < computerScore) {
//         return "You Lost The Computer Won"
//     } else {
//         return  "It's a tie"
//     }
// }

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection)

});
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection)
});
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection)
});

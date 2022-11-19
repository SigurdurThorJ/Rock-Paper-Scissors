let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector(".computer-score");

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

const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const p = document.createElement('p');
        p.classList.add('player-Won');
        p.innerText = `You Won ${playerScore} to ${computerScore}`;
        outcomeDiv.append(p)
    } else if (computerScore === 5) {
        const p = document.createElement('p');
        p.classList.add('computer-Won');
        p.innerText = `You Lost ${computerScore} to ${playerScore}`;
        outcomeDiv.append(p); 
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `PLayer Score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
}

    rockButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = "rock";
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkWinner(playerScore, computerScore)
        });

    paperButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = "paper";
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkWinner(playerScore, computerScore)
        });

    scissorsButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = "scissors";
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkWinner(playerScore, computerScore)
        });


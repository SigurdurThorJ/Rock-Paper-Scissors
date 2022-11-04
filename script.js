const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player Wins";
    } else {
        return "Computer Wins";
    }
}

function playRound(playerSelection, computerSelection) {
   const result = checkWinner(playerSelection, computerSelection);
   if(result == "It's a Tie"){
    return "It's a Tie"
   }
   else if(result == "player Wins"){
    return `You Win! ${playerSelection} beats ${computerSelection}`
   }
   else {
    return `Computer Wins ${computerSelection} beats ${playerSelection}`
   }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLOwer = choice.toLowerCase();
        if(options.includes(choiceInLOwer)) {
            validatedInput = true;
            return choiceInLOwer;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
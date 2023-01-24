function gameRule(choice){
    choice = choice.toLowerCase();
    if(choice == "rock"){
        return "paper";
    }
    else if(choice == "paper"){
        return "scissors";
    }
    else{
        return "rock";
    }
}

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    if(a == 0){
        return "rock"
    }
    else if(a == 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        return "It's a Tie!";
    }
    else if(playerSelection == gameRule(computerSelection)){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for(let i=0; i<5; i++){
        let userChoice = window.prompt("Enter either rock, paper, or scissors");
        let computerChoice = getComputerChoice();
        let msg = playRound(userChoice, computerChoice);
        console.log(msg);
    }
}

game();
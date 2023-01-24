function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    if(a == 0){
        return "Rock"
    }
    else if(a == 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

let a = getComputerChoice();
console.log(a);
document.addEventListener('DOMContentLoaded', () => {

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

// Converting the values to words.

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

// Sub functions for: win,lose,draw

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userScore)} beats  ${convertToWord(computerScore)}. You win!`;
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userScore)} loses ${convertToWord(computerScore)}. You lose!`;
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userScore)} = ${convertToWord(computerScore)}. You a draw!`;
}

function game(userChoice){
    
const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice){
        //user wins
        case"rs":
        case"pr":
        case"sp":
            win(userChoice, computerChoice);
            break;
        case"rp":
        case"ps":
        case"sr":
            lose(userChoice, computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            draw(userChoice, computerChoice);
        break;
    }
}

function getComputerChoice(){
    const choices = ['r','p','s']; // myarray of choices
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(getComputerChoice());




function main(){

rock_div.addEventListener('click', function() {
    
    game("r"); //Argument
    console.log("Hey, you clicked on rock!")
});

paper_div.addEventListener('click', function() {
    
    game("p"); //Argument
    console.log("Hey, you clicked on paper!")
});

scissors_div.addEventListener('click', function() {
    
    game("s"); //Argument
    console.log("Hey, you clicked on scissors!")
});
};


main();
    
});


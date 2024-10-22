// console.log("Hello World")



function getComputerChoice() {
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

getComputerChoice();

function getHumanChoice() {
    let decision = prompt("Let's play rock paper scissors! Please enter your choice.");
    return decision[0].toUpperCase() + decision.substring(1).toLowerCase()
} 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("Draw, Try Again!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("Computer: " + ++computerScore + " Human: " + humanScore);
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        humanScore++;
        console.log("Computer: " + computerScore + " Human: " + humanScore);
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        humanScore++;
        console.log("Computer: " + computerScore + " Human: " + humanScore);
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        computerScore++;
        console.log("Computer: " + computerScore + " Human: " + humanScore);
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        computerScore++;
        console.log("Computer: " + computerScore + " Human: " + humanScore);
    } else {
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        humanScore++;
        console.log("Computer: " + computerScore + " Human: " + humanScore);
    }
}

while (computerScore < 5 || humanScore < 5) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);
} if (humanScore === 5 || computerScore === 5) {
    console.log("Game Over!");
}


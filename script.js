console.log("Hello World")

let randomNum = Math.ceil(Math.random() * 3)

function getComputerChoice() {
    if (randomNum === 1) {
        console.log("Rock");
    } else if (randomNum === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

getComputerChoice();
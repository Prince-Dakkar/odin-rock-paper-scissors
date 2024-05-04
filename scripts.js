let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let rand = Math.random();
    if (rand < .33333333333) {
        return "0";
    } else if (rand < .6666666666) {
        return "1";
    } else return "2";
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "2";
    } else if (choice === "paper") {
        return "0";
    } else if (choice === "scissors") {
        return "1";
    } else {
        alert("Please enter a valid answer: rock, paper or scissors?");
        return getHumanChoice();
    }
}

function playRound(hC, cC) {
    if (hC === cC) {
        // They are the same
        console.log("You and the Computer tied!");
    } else {
        if (Math.abs(hC - cC) == 1) {
            // Bc of how the sequ. P, S, R is set up, if the indices are sequential, the greater wins
            if (hC > cC) {
                console.log("You Won!");
                humanScore++;
            } else {
                console.log("The Computer Won!");
                computerScore++;
            }
        } else { 
            // One is paper and the other rock
            if (hC == 2) {
                console.log("You Won!");
                humanScore++;
            }  else {
                console.log("The Computer Won!");
                computerScore++;
            }
        }
    }
}

function playGame(){
   for (let i = 0; i < 5; i++) {
        let c = getComputerChoice();
        let h = getHumanChoice();
        playRound(h, c);
    }
    if (humanScore >= computerScore) {
       alert("You won the game!");
    } else {
       alert("The Computer won the game, ooooooof!"); 
    }
}

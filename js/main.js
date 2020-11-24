var userChoice, computerOptions, computerChoice, wins, losses, ties;

wins = 0;
losses = 0;
ties = 0;

// user chooses rock, paper, or scissors by pressing r, p, or s
document.addEventListener("keyup", function(event) {
    if(event.keyCode === 82) {
        userChoice = "rock";
    }
    else if(event.keyCode === 80) {
        userChoice = "paper";
    }
    else if(event.keyCode === 83) {
        userChoice = "scissors";
    }
    else {
        userChoice = "Please press r, p, or s";
    }
    document.querySelector("#userInput").textContent = userChoice;
 
 //computer randomly chooses rock, paper, or scissors
    computerOptions = Math.random();

    if(computerOptions <=0.33) {
        computerChoice = "rock";
    }
    else if(computerOptions > 0.33 && computerOptions <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

//comparison function to determine if user wins, loses, or ties against computer
    if(userChoice === computerChoice) {
        ties++;
        document.querySelector("#lastResult").textContent = "It's a tie!";
    }

    else if(userChoice === "rock" && computerChoice === "scissors") {
        wins++;
        document.querySelector("#lastResult").textContent = "You won!";
    }
    else if(userChoice === "paper" && computerChoice === "rock") {
        wins++;
        document.querySelector("#lastResult").textContent = "You won!";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        wins++;
        document.querySelector("#lastResult").textContent = "You win!";
    }
    else {
        losses++;
        document.querySelector("#lastResult").textContent = "You lose. Aw!";
    }

    document.querySelector("#computerInput").textContent = computerChoice;
    document.querySelector("#wins").textContent = wins;
    document.querySelector("#losses").textContent = losses;
    document.querySelector("#ties").textContent = ties;
})



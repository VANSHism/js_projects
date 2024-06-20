let userScore = 0;
let compScore = 0;
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");
let msgBox = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msgBox.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "green";
        userScore++;
        uScore.innerText = userScore;
    } else {
        msgBox.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = "red";
        compScore++;
        cScore.innerText = compScore;
    }
}

const drawGame = () => {
    msgBox.innerText = "It's a Draw"
    msgBox.style.backgroundColor = "#002642";
}

const playGame = (userChoice) => {
    //console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    //console.log("Comp Choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock"){
            userWin = compChoice === "Scissors" ? true : false;
        } else if(userChoice === "Paper") {
            userWin = compChoice === "Rock" ? true : false;
        } else {
            userWin = compChoice === "Paper" ? true : false; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

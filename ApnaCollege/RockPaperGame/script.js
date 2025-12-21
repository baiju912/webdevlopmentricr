let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const mymsg = document.querySelector("#msg");

const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#compscore");

const genCompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  mymsg.innerText = "Game was Draw. Play again.";
  mymsg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userscore++;
    userscorePara.innerText = userscore;
    mymsg.innerText = `You win! your ${userChoice} beats ${compchoice}`;
    mymsg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorePara.innerText = compscore;
    mymsg.innerText = `You lose. ${compchoice} beats your ${userChoice}`;
    mymsg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);

  const compchoice = genCompchoice();
  console.log("Comp choice = ", compchoice);

  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

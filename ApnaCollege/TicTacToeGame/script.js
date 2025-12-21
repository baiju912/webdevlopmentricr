let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#resetbtn");
let newgbtn = document.querySelector("#newbtn");
let msgconta = document.querySelector(".msgCont");
let msgg = document.querySelector("#msg");

let turnO = true;

const winpatt = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const restgame = () => {
  turnO = true;
  enabb();
  
  msgconta.classList.add("hide");
};

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "violet";
      box.style.backgroundColor = "white";
      count++;
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      box.style.backgroundColor = "lightgreen";
      count++;
      turnO = true;
    }

    box.disabled = true;

    checkwinner();
  });
});

const disab = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabb = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.style.backgroundColor = "bisque";
    count = 0;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msgg.innerText = `Congratulations, Winner is ${winner}`;
  msgconta.classList.remove("hide");
  msgg.style.color = "Green";
  disab();
};

const noWinner = () => {
  msgg.innerText = "Sorry Game is Draw";
  msgconta.classList.remove("hide");
  msgg.style.color = "red";
};

const checkwinner = () => {
  for (let patt of winpatt) {
    let pos1val = boxes[patt[0]].innerText;
    let pos2val = boxes[patt[1]].innerText;
    let pos3val = boxes[patt[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos1val === pos3val) {
        showWinner(pos1val);
      } else if (count === 9) {
        noWinner();
      }
    }
  }
};

newgbtn.addEventListener("click", restgame);
restBtn.addEventListener("click", restgame);

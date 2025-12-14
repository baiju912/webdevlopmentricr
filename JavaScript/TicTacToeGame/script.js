let isZero = false;
const bt1 = document.getElementById("btn1");
const bt2 = document.getElementById("btn2");
const bt3 = document.getElementById("btn3");
const bt4 = document.getElementById("btn4");
const bt5 = document.getElementById("btn5");
const bt6 = document.getElementById("btn6");
const bt7 = document.getElementById("btn7");
const bt8 = document.getElementById("btn8");
const bt9 = document.getElementById("btn9");
function btn1() {
  if (bt1.innerText) {
    return;
  }

  if (isZero) {
    bt1.innerText = 0;
  } else {
    bt1.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn2() {
  if (bt2.innerText) {
    return;
  }

  if (isZero) {
    bt2.innerText = 0;
  } else {
    bt2.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn3() {
  if (bt3.innerText) {
    return;
  }

  if (isZero) {
    bt3.innerText = 0;
  } else {
    bt3.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn4() {
  if (bt4.innerText) {
    return;
  }

  if (isZero) {
    bt4.innerText = 0;
  } else {
    bt4.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn5() {
  if (bt5.innerText) {
    return;
  }

  if (isZero) {
    bt5.innerText = 0;
  } else {
    bt5.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn6() {
  if (bt6.innerText) {
    return;
  }

  if (isZero) {
    bt6.innerText = 0;
  } else {
    bt6.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn7() {
  if (bt7.innerText) {
    return;
  }

  if (isZero) {
    bt7.innerText = 0;
  } else {
    bt7.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn8() {
  if (bt8.innerText) {
    return;
  }

  if (isZero) {
    bt8.innerText = 0;
  } else {
    bt8.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function btn9() {
  if (bt9.innerText) {
    return;
  }

  if (isZero) {
    bt9.innerText = 0;
  } else {
    bt9.innerText = "X";
  }
  isZero = !isZero;
  checkwinner();
}

function checkwinner() {
  if (
    bt1.innerText === bt2.innerText &&
    bt1.innerText === bt3.innerText &&
    bt1.innerText !== "" &&
    bt2.innerText !== "" &&
    bt3.innerText !== ""
  ) {
    alert(`${bt1.innerText} is winner`);
    return;
  }

  if (
    bt4.innerText === bt5.innerText &&
    bt4.innerText === bt6.innerText &&
    bt4.innerText !== "" &&
    bt5.innerText !== "" &&
    bt6.innerText !== ""
  ) {
    alert(`${bt4.innerText} is winner`);
    return;
  }

  if (
    bt7.innerText === bt8.innerText &&
    bt7.innerText === bt9.innerText &&
    bt7.innerText !== "" &&
    bt8.innerText !== "" &&
    bt9.innerText !== ""
  ) {
    alert(`${bt7.innerText} is winner`);
    return;
  }

  if (
    bt1.innerText === bt3.innerText &&
    bt1.innerText === bt7.innerText &&
    bt1.innerText !== "" &&
    bt3.innerText !== "" &&
    bt7.innerText !== ""
  ) {
    alert(`${bt1.innerText} is winner`);
    return;
  }

  if (
    bt2.innerText === bt4.innerText &&
    bt2.innerText === bt8.innerText &&
    bt2.innerText !== "" &&
    bt4.innerText !== "" &&
    bt8.innerText !== ""
  ) {
    alert(`${bt2.innerText} is winner`);
    return;
  }

  if (
    bt3.innerText === bt6.innerText &&
    bt3.innerText === bt9.innerText &&
    bt3.innerText !== "" &&
    bt6.innerText !== "" &&
    bt9.innerText !== ""
  ) {
    alert(`${bt3.innerText} is winner`);
    return;
  }

  if (
    bt1.innerText === bt4.innerText &&
    bt1.innerText === bt9.innerText &&
    bt1.innerText !== "" &&
    bt4.innerText !== "" &&
    bt9.innerText !== ""
  ) {
    alert(`${bt1.innerText} is winner`);
    return;
  }

  if (
    bt3.innerText === bt5.innerText &&
    bt3.innerText === bt7.innerText &&
    bt3.innerText !== "" &&
    bt5.innerText !== "" &&
    bt7.innerText !== ""
  ) {
    alert(`${bt3.innerText} is winner`);
    return;
  }
}

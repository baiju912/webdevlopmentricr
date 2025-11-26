let arr = [];
let sum = 0;

function btn(n) {
  if ("+-/".includes(arr[arr.length - 1]) && "+-/".includes(n)) return;
  if (!"+-/".includes(arr[arr.length - 1]) && !"+-/".includes(n)) {
    if (arr.length == 0) {
      arr.push(n);
    } else if (n === ".") {
      arr[arr.length - 1] = ${arr[arr.length - 1]}.;
    } else if (
      typeof arr[arr.length - 1] === "string" &&
      arr[arr.length - 1].includes(".")
    ) {
      arr[arr.length - 1] = ${arr[arr.length - 1]}${n};
    } else {
      arr[arr.length - 1] = arr[arr.length - 1] * 10 + n;
    }
  } else {
    arr.push(n);
  }

  const temp = arr.map((i) => {
    if ("+-*/".includes(i)) {
      return ` ${i} `;
    }
    return i;
  });
  document.getElementById("display").innerText = temp.join("");
  const box = document.getElementById("display");
  box.scrollLeft = box.scrollWidth;
}

function c() {
  arr = [];
  document.getElementById("display").innerText = "";
}
function equals() {
  let temp = Number(arr[0]);

  for (let i = 1; i < arr.length; i += 2) {
    const operator = arr[i];
    const value = Number(arr[i + 1]);

    switch (operator) {
      case "+":
        temp += value;
        break;
      case "-":
        temp -= value;
        break;
      case "*":
        temp *= value;
        break;
      case "/":
        temp /= value;
        break;
    }
  }

  document.getElementById("display").innerText = Number(temp.toFixed(2));
  arr = [ Number(temp.toFixed(2))]; 
}

function deleteLast() {
  arr.pop();
  const temp = arr.map((i) => {
    if ("+-*/".includes(i)) {
      return ` ${i} `;
    }
    return i;
  });
  document.getElementById("display").innerText = temp.join("");
  const box = document.getElementById("display");
  box.scrollLeft = box.scrollWidth;
}
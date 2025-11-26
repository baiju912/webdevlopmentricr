function Input(char) {
  if (char === "=") {
    document.getElementById("display").value = "result";
  } else if (char === "C") {
    document.getElementById("display").value = "";
  } else {
    let exp = document.getElementById("dispaly").value;
    exp = exp + char;
    document.getElementById("display").value = exp;
  }
  
}
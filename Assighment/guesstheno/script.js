
const display = document.getElementById("hint");
let attempt = document.getElementById("attempt");
let val = 0;
let score = 0;
function start() {
  val = Math.floor(Math.random() * 9)+1;
}
function submit() {
  const number = document.getElementById("number").value;
  if (!number) {
    alert("Enter the Number");
    return;
  }
  if (number < val) {
    
    alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.")
  } else if (number > val) {
   
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.")
  } else {
    
    alert("Eureka!!! You nailed it.")
  }
 
}


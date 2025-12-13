

function calculate() {
  const amount = document.getElementById("amount").value;
  const service = document.getElementById("service").value;
  const person = document.getElementById("person").value;
  const display = document.getElementById("tip");
  if(!amount || !service || !person){
    alert("Enter the Data")
    return
  }
  let bill = 0;
  
  if(service === "25"){
    bill =  amount * 0.25;
  }else if(service === "20"){
    bill = amount * 0.2;
  }else if(service === "15"){
    bill = amount * 0.15;
  }else if(service === "10"){
    bill = amount * 0.1;
  }else if(service === "5"){
    bill = amount * 0.05;
  }

  bill = bill / person;

  display.innerText = `Tip Amount ₹${bill} /each`;
}
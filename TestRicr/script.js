function submit() {
  const nm = document.getElementById("name").value;
  const cn = document.getElementById("collegename").value;
  const br = document.getElementById("Branch").value;
  const sem = document.getElementById("Semester").value;
  const no = document.getElementById("Phone").value;
  const em = document.getElementById("email").value;
  const co = document.getElementById("Course").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;

  if (nm && cn && br && sem && no && em && co && gender) {
    alert("Thank you for Enrolling, " + nm);
  } else {
    alert("Please fill complete details");
  }

  console.log("Name: " + nm);
  console.log("College Name: " + cn);
  console.log("Branch: " + br);
  console.log("Semester: " + sem);
  console.log("Phone No: " + no);
  console.log("Email id: " + em);
  console.log("Gender:" + gender);
  console.log("Course: " + co);
}

function contact() {
  const nm = document.getElementById("name").value;
  const em = document.getElementById("email").value;
  const mes = document.getElementById("Message").value;

  if (!nm || !em || !mes) {
    alert("Please fill complete details");
  } else if (mes.length <= 10) {
    alert("required, minimum 10 characters");
  } else {
    alert("Thank you for contacting us, " + nm);
  }

  console.log("Name: " + nm);
  console.log("Email id: " + em);
  console.log("Message: " + mes);
}

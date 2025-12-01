function submit()
{
  const fn = document.getElementById("Personname").value;
  const mb = document.getElementById("number").value;
  const em = document.getElementById("email").value;
  const ql = document.getElementById("Qualification").value;
  const cn = document.getElementById("Collegename").value;
   const yr = document.getElementById("year").value;
  const br = document.getElementById("Branch").value;

  console.log("Full Name: " + fn);
  console.log("Mobile: " + mb);
  console.log("Email: " + em);
  console.log("Qualification: " + ql);
  console.log("Collegename: " + cn);
  console.log("Year: " + yr);
  console.log("Branch: " + br);
  
  let pc = [];

  document.querySelectorAll("input[name = 'Courses']:checked").forEach((Element) => {pc.push(Element.value);});

  console.log("Preferred Course: " + pc.join(", "));

  const si = document.getElementById("source").value;

  console.log("Source of Information: " + si);
  
}
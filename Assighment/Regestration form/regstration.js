function Submit() {
  console.log("Submit Button Clicked");

  const nm = document.getElementById("Fullname").value.trim();
  const em = document.getElementById("emailid").value.trim();
  const nu = document.getElementById("mobileno").value.trim();
  const dob = document.getElementById("dob").value;
  const qa = document.getElementById("Qualification").value;
  const per = document.getElementById("score").value.trim();
  const cors = document.getElementById("Course").value;
  const add = document.getElementById("adress").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pincode").value.trim();
  const parnam = document.getElementById("parentname").value.trim();
  const Parno = document.getElementById("parentno").value;
  const req = document.getElementById("srequirment").value.trim();

  let sbt = [];

  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((Element) => {
      sbt.push(Element.value);
    });

  let addse = [];

  document
    .querySelectorAll("input[name='addsee']:checked")
    .forEach((Element) => {
      addse.push(Element.value);
    });

  if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("NameError").innerText =
      "Please enter a valid name";
    return;
  }

  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("EmailError").innerText =
      "Please enter a valid email address";
    return;
  }

  if (!/^[6-9]\d{9}$/.test(nu)) {
    document.getElementById("PhoneError").innerText =
      "Enter a 10-digit Indian mobile number";
    return;
  }

  const currentyear = new Date().getFullYear();
  const dobyear = Number(dob.split("-")[0]);

  if (currentyear - dobyear < 15) {
    document.getElementById("DobError").innerText =
      "You must be at least 15 years Old";
    return;
  }

  if (!qa) {
    document.getElementById("QualificationError").innerText =
      "Please select a qualification";
    return;
  }

  if (!/^(100|[1-9]?\d|[A-Fa-f])$/.test(per)) {
    document.getElementById("ScoreError").innerText =
      "Enter a valid percentage or grade";
    return;
  }

  if (!cors) {
    document.getElementById("CourseError").innerText = "Select a course";
    return;
  }

  if (!sbt[0]) {
    document.getElementById("BatchError").innerText = "Select a batch timing";
    return;
  }

  if (!/^[A-Za-z ]+$/.test(add)) {
    document.getElementById("AdressError").innerText =
      "Enter your full address";
    return;
  }

  if (!/^[A-Za-z ]+$/.test(city)) {
    document.getElementById("CityError").innerText =
      "Please enter a valid city name";
    return;
  }

  if (!/^[1-9]\d{5}$/.test(pin)) {
    document.getElementById("PinError").innerText =
      "Enter a valid 6-digit pin code";
    return;
  }

  if (!/^[A-Za-z ]+$/.test(parnam)) {
    document.getElementById("ParentnmError").innerText =
      "Enter guardian's full name";
    return;
  }

  if (!/^[6-9]\d{9}$/.test(Parno)) {
    document.getElementById("ParentnoError").innerText =
      "Enter a valid 10-digit contact number";
    return;
  }

  if (!addse[0]) {
    document.getElementById("AddError").innerText = "Select an option";
    return;
  }

  console.log("Name :" + nm);
  console.log("Email :" + em);
  console.log("Number :" + nu);
  console.log("D.O.B :" + dob);
  console.log("Qualification :" + qa);
  console.log("Percentage :" + per);
  console.log("Course :" + cors);
  console.log("Batch : " + sbt.join(", "));
  console.log("Address :" + add);
  console.log("City :" + city);
  console.log("Pin Code :" + pin);
  console.log("Parent's Name :" + parnam);
  console.log("Parent's Number :" + Parno);
  console.log("About us? : " + addse.join(", "));
  console.log("Special Requriment :" + req);
}

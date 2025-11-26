function Submit()
{
    console.log("Submit Button Clicked");
    let selectbatchTiming = [];

    const nm = document.getElementById("Fullname").value;
    const em = document.getElementById("emailid").value;
    const nu = document.getElementById("mobileno").value;  
     const dob = document.getElementById("dob").value;
    const qa = document.getElementById("Qualification").value;
    const per = document.getElementById("score").value;
    const cors = document.getElementById("Course").value;
    const add = document.getElementById("adress").value;
    const city = document.getElementById("city").value;
     const pin = document.getElementById("pincode").value;
    const parnam = document.getElementById("parentname").value;
    const Parno = document.getElementById("parentno").value;
    const req = document.getElementById("srequirment").value;

    console.log("Name :" +nm);
     console.log("Email :" +em);
    console.log("Number :" +nu);
   console.log("D.O.B :" +dob);
    console.log("Qualification :" +qa);
    console.log("Percentage :" +per);
    console.log("Course :" +cors);
    console.log("Address :" +add);
    console.log("City :" +city);
    console.log("Pin Code :" +pin);
    console.log("Parent's Name :" +parnam);
    console.log("Parent's Number :" +Parno);
    console.log("Special Requriment :" +req);
    

    
    document
    .querySelectorAll("input[name='batch]:checked")
    .forEach((Element) =>
    {
        selectbatchTiming.push(Element.value);
    });

     console.selectbatchTiming(Element);

    

}
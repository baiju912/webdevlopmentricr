function Submit()
{
    console.log("Submit Button Clicked");

    const nm = document.getElementById("name").value;
    const nu = document.getElementById("number").value;
    const em = document.getElementById("email").value;
    const qa = document.getElementById("Qualification").value;
    const col = document.getElementById("edu").value;
    const ye = document.getElementById("year").value;
    const br = document.getElementById("Branch").value;

    console.log("Name :" +nm);
    console.log("Number :" +nu);
    console.log("Email :" +em);
    console.log("Qualification :" +qa);
    console.log("College :" +col);
    console.log("Year :" +ye);
    console.log("Branch :" +br);

    //  document.getElementById("name").value="";
    // document.getElementById("number").value = "";
}
function login()
{
    console.log("Login Button Clicked");

    const em = document.getElementById("loginemail").value;
    const ps = document.getElementById("loginpassword").value;
    
    
    console.log("Password :" +ps);

    alert("Login Done")
    document.getElementById("loginemail").value="";
    document.getElementById("loginpassword").value = "";

}

function registration()
{
    console.log("Registration Button Clicked");

    const nm = document.getElementById("RegisterName").value;
    const ma = document.getElementById("Registeremail").value;
    const cp = document.getElementById("Createpassword").value;
    const fp = document.getElementById("Confirmpassword").value;

    console.log("Name :"+nm);
    console.log("Email :"+ma);
    console.log("Create Password :"+cp);
    console.log("Confirm Password :"+fp);

     document.getElementById("RegisterName").value="";
     document.getElementById("Registeremail").value="";
     document.getElementById("Createpassword").value="";
    document.getElementById("Confirmpassword").value="";
    
}
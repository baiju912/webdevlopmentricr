function calculate()
{
    const Dob = document.getElementById("dob").value;
    const cd = document.getElementById("date").value;

    // console.log(Dob);
    // console.log(cd);

    if(!Dob || !cd)
    {
        alert("Please Enter your Data");
        return
    }
    else
    {
        const res = document.getElementById("result");
        
        const age = cd.split("-")[0] - Dob.split("-")[0];

        res.innerText =  `Your age is ${age} Years.`;

    }

    

}
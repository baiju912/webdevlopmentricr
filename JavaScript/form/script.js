function submit()
{
     const nm = document.getElementById("name").value.trim();
  const no = document.getElementById("Phone").value.trim();
   const em = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value.trim();

//    console.log("Name: " + nm);
//    console.log("Phone No: " + no);
//   console.log("Email id: " + em);
//   console.log("D.o.B: " + dob);

    // validation 
    // if(data is invalid)
    //     alert()

    if(!/^[A-Za-z]+$/.test(nm))
    {
        alert("Wrong Name");
        return;
    }

    if(!/^[6-9]\d{9}$/.test(nm))
    {
        alert("Wrong Phone No");
        return;
    }

     if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em))
    {
        alert("Wrong Email");
        return;
    }

    const currentyear = new Date().getFullYear();
    // console.log(currentdate);

    const birthyear = dob.split("-")[0];
    console.log (currentyear, birthyear);

    if(currentyear-birthyear<17)
    {
        alert("Not Eligible by age");
        return;
    }

        
    

  const data = 
  {
    FullName: nm,
    Phone: no,
    Email: em,
    DOB: dob,
  };

  console.log(data);
  
}
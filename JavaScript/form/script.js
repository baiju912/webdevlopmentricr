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

    document.querySelectorAll(".Error").forEach((Element) => {Element.innerHTML ="";});

    if(!nm)
    {
      document.getElementById("NameError").innerText = "Requried";
      return;
    }
    else if(!/^[A-Za-z]+$/.test(nm))
    {
        document.getElementById("NameError").innerText = "Only Alphabets and Spaces are Allowed";
        return;
    }

    if(!no)
    {
      document.getElementById("PhoneError").innerText = "Requried";
      return;
    }
    else if(!/^[6-9]\d{9}$/.test(nm))
    {
        document.getElementById("PhoneError").innerText = "Only Indian Mobile Nummber allowed";
        return;
    }

    if(!em)
    {
      document.getElementById("EmailError").innerText = "Requried";
      return;
    }
    else if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em))
    {
        document.getElementById("EmailError").innerText = "Use Proper Email Format";
        return;
    }

   

     

    const currentyear = new Date().getFullYear();
    // console.log(currentdate);

    const birthyear = dob.split("-")[0];
    console.log (currentyear, birthyear);


     if(!dob)
    {
      document.getElementById("DOBError").innerText = "Requried";
      return;
    }

    else if(currentyear-birthyear<17)
    {
       document.getElementById("DOBError").innerText = "You must be 18 years Old";
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
function submit() {
  const nm = document.getElementById("fullname").value.trim();
  const em = document.getElementById("email").value.trim();
  const no = document.getElementById("phone").value.trim();
  const Dob = document.getElementById("dob").value.trim();

  document.querySelectorAll(".Error").forEach((Element) => {Element.innerHTML = "";});

  if(!nm)
  {
    document.getElementById("NameError").innerText = "Requried";
    return;
  }
  else if(!/^[A-Za-z ]+$/.test(nm))
  {
    document.getElementById("NameError").innerText = "Only alphabet and Space are Allowed";
    return;
  }

   if(!em)
  {
    document.getElementById("EmailError").innerText = "Requried";
    return;
  }
  else if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em))
  {
    document.getElementById("EmailError").innerText = "Use proper email format";
    return;
  }

   if(!no)
  {
    document.getElementById("PhoneError").innerText = "Requried";
    return;
  }
  else if(!/^[6-9]\d{9}$/.test(no))
  {
    document.getElementById("PhoneError").innerText = "Only Indian Mobile Number Allowed";
    return;
  }

   if(!Dob)
  {
    document.getElementById("DobError").innerText = "Requried";
    return;
  }
  else 
  {
    const currentyear = new Date().getFullYear();
    const dobyear = Number(Dob.split("-")[0]);

    if(currentyear-dobyear<18)
    {
       document.getElementById("DobError").innerText = "You must be 18 years Old";
       return;
    }
  }

  const data = 
  {
    FullName: nm,
    EmailId: em,
    PhoneNo: no,
    DOB: Dob,
  };

  console.log(data);


}





                              
function submit()
{
    const no = document.getElementById("number").value.trim();
    console.log(no);

    let rndno = Math.floor(Math.random()*9+1);

    if(!no)
    {
        alert("Please enter Number");
        return;
    }
    else if(no<1 || 10<no)
    {
        alert("Please enter 1-10 Number")
        return;
    }

    else if (no===rndno)
    {
        alert("congratulatory");
        return;
    }

    else if(no<rndno)
    {
        alert("OOPS! SORRY!!! TRY A LARGER NUMBER.")
        return;
    }
    else if(no>rndno)
    {
        alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.")
        return;
    }
}
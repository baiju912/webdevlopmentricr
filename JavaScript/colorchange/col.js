function mainc()
{
    document.getElementById("body").style.backgroundColor = "yellow";
}

function headc()
{
    document.getElementById("head").style.color = "red";
}
function parac()
{
    document.getElementById("para").style.color = "blue";
}



const backcolour = document.getElementById("back");

backcolour.addEventListener("change" , () => changebodycolour(backcolour.value));

function changebodycolour(color)
{
    document.getElementById("body").style.backgroundColor = color;
}




const headcolour = document.getElementById("headc1");

headcolour.addEventListener("change" , () => changeheadcolour(headcolour.value));

function changeheadcolour(color)
{
    document.getElementById("head").style.color = color;
}





const textcolour = document.getElementById("paragc1");

textcolour.addEventListener("change" , () => changeparacolour(textcolour.value));

function changeparacolour(color)
{
    document.getElementById("para").style.color = color;
}
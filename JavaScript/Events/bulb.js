function on()
{
    document.getElementById("bulb").style.backgroundColor = "yellow";
}

function off()
{
    document.getElementById("bulb").style.backgroundColor = "white";
}

function blue()
{
    document.getElementById("bulb").style.backgroundColor = "blue";
}

function red()
{
    document.getElementById("bulb").style.backgroundColor = "red";
}
const usercolour = document.getElementById("colour");

usercolour.addEventListener("change" , () => changeBulbcolour(usercolour.value));

function changeBulbcolour(color)
{
    document.getElementById("bulb").style.backgroundColor = color;
}

function SB_control()
{
    const btn = document.getElementById("SB_btn");
    {
        if(btn.innerText === "on")
        {
            document.getElementById("SB_btn").innerText = "off";
            document.getElementById("SmartBulb").classList.add("on");

        }
        else
        {
            document.getElementById("SB_btn").innerText = "on";
            document.getElementById("SmartBulb").classList.remove("on");   
        }
    }
}
function SB_control2()
{
    document.getElementById("SmartBulb").classList.toggle("on");
}




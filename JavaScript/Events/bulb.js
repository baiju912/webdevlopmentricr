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

function fillcolour(Color)
{
    console.log(Color);
    document.getElementById("Rainbow").style.backgroundColor = Color;
}

document.getElementById("c1").addEventListener("mouseenter", () =>{fillcolour("blue");})

document.getElementById("c1").addEventListener("mouseleave", () =>{fillcolour("white");})


document.getElementById("c2").addEventListener("mouseenter", () =>{fillcolour("green");})

document.getElementById("c2").addEventListener("mouseleave", () =>{fillcolour("white");})


document.getElementById("c3").addEventListener("mouseenter", () =>{fillcolour("red");})

document.getElementById("c3").addEventListener("mouseleave", () =>{fillcolour("white");})


document.getElementById("c4").addEventListener("mouseenter", () =>{fillcolour("yellow");})

document.getElementById("c4").addEventListener("mouseleave", () =>{fillcolour("white");})


document.getElementById("c5").addEventListener("mouseenter", () =>{fillcolour("orange");})

document.getElementById("c5").addEventListener("mouseleave", () =>{fillcolour("white");})


document.getElementById("c6").addEventListener("mouseenter", () =>{fillcolour("pink");})

document.getElementById("c6").addEventListener("mouseleave", () =>{fillcolour("white");})


document.getElementById("c7").addEventListener("mouseenter", () =>{fillcolour("brown");})

document.getElementById("c7").addEventListener("mouseleave", () =>{fillcolour("white");})


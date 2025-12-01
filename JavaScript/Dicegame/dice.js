function start() {
  console.log("Game Started");
  document.getElementById("p1play").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
  console.log("Game Restarted");
}

function p1play() {
  console.log("Player1 Playing");

  let score = Number(document.getElementById("p1sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  switch(DF)
{
    case 1:{ document.getElementById("p1dice").src = "./images/1.jpg";
    break;
    }

    case 2:{ document.getElementById("p1dice").src = "./images/2.jpg";
    break;
    }

    case 3:{ document.getElementById("p1dice").src = "./images/3.jpg";
    break;
    }

    case 4:{ document.getElementById("p1dice").src = "./images/4.jpg";
    break;
    }

    case 5:{ document.getElementById("p1dice").src = "./images/5.jpg";
    break;
    }

    case 6:{ document.getElementById("p1dice").src = "./images/6.jpg";
    break;
    }

     default:{ document.getElementById("p1dice").src = "./images/6.jpg";
    }
}
  if (DF === 6) {
    document.getElementById("p1play").disabled = true;
    document.getElementById("p2play").disabled = false;
  } else {
    score = score + DF;
    document.getElementById("p1sc").innerText = score;
  }

  // console.log(DF);
}

function p2play() {
  console.log("Player2 Playing");

  let score = Number(document.getElementById("p2sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  document.getElementById("p2dice").src=  `./images/${DF}.jpg`;

  if (DF === 6) {
    document.getElementById("p1play").disabled = false;
    document.getElementById("p2play").disabled = true;
  } else {
    score = score + DF;
    document.getElementById("p2sc").innerText = score;
  }
}

var playerOne = 501;
var playerTwo = 501;
var playerThree = 501;
var playerFour = 501;
var p1 = true;
var p2 = false;
var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var interval;

function getPlayers(players) {
  return players;
}

function changePlayer(player) {
  if (player === 1) {
    p1 = false;
    p2 = true;
    counterPlayerOne = 0;
  } else {
    p2 = false;
    p1 = true;
    counterPlayerTwo = 0;
  }
}

function changePlayerButton() {
  if (p1 === true) {
    p1 = false;
    p2 = true;
    changePlayerColor();
  } else {
    p1 = true;
    p2 = false;
    changePlayerColor();
  }
}

function checkWin(points) {
  if (points === 0) {
    document.querySelector("#nextPlayer").innerText = "";
    const winner = document.createElement("h1");
    winner.innerText = player + " has won the game!";
    document.body.append(winner);
    playerOne = 501;
    playerTwo = 501;
  }
}

function multiplier() {
  let mult = 1;
  if (document.getElementById("single").checked) {
    mult = 1;
  }
  if (document.getElementById("double").checked) {
    mult = 2;
  }
  if (document.getElementById("treble").checked) {
    mult = 3;
  }
  return mult;
}

function checkZeroPoints(points) {
  if ((points = 0)) {
    return true;
  }
}
document.getElementById("p1").style.color = "blue";
setCounter();

function changePlayerColor() {
  if (p1 === true) {
    console.log("colorchange");
    document.getElementById("p1").style.color = "blue";
    document.getElementById("p2").style.color = "black";
  }
  if (p2 === true) {
    document.getElementById("p1").style.color = "black";
    document.getElementById("p2").style.color = "blue";
  }
}

interval = window.setInterval(setCounter, 1000);

function changePoints(num, mult) {
  document.querySelector("#nextPlayer").innerText = "";
  if (p1 === true) {
    if (playerOne < num * mult) {
      changePlayer(1);
      document.querySelector("#nextPlayer").innerText =
        "Next player is Player Two";
      return;
    }
    changePlayerColor();
    console.log(num, mult);

    playerOne -= num * mult;
    counterPlayerOne++;
    if (checkZeroPoints(playerOne)) {
      checkWin(playerOne, "Player One");
      //playerOne += num;
    }
  }

  if (p2 === true) {
    if (playerTwo < num * mult) {
      changePlayer(2);
      document.querySelector("#nextPlayer").innerText =
        "Next player is Player One";
      return;
    }
    changePlayerColor();
    playerTwo -= num * mult;
    counterPlayerTwo++;
    if (checkZeroPoints(playerTwo)) {
      checkWin(playerTwo, "Player One");
      //playerOne += num;
    }
  }
  console.log(p1, p2);
  if (counterPlayerOne == 3) {
    changePlayer(1);
    document.querySelector("#nextPlayer").innerText =
      "Next player is Player Two";

    counterPlayerOne = 0;
    console.log(p1);
  }
  if (counterPlayerTwo == 3) {
    changePlayer(2);
    document.querySelector("#nextPlayer").innerText =
      "Next player is Player One";
    counterPlayerTwo = 0;
  }
  document.getElementById("count1").innerHTML = playerOne;
  document.getElementById("count2").innerHTML = playerTwo;
}

document.querySelector("#nextPlayerButton").onclick = function () {
  changePlayerButton();
};
function setPointsBack() {
  playerOne = 501;
  playerTwo = 501;
  document.getElementById("count1").innerHTML = playerOne;
  document.getElementById("count2").innerHTML = playerTwo;
}

function setCounter() {
  document.getElementById("counterPlayerOne").innerHTML = counterPlayerOne;
  document.getElementById("counterPlayerTwo").innerHTML = counterPlayerTwo;
}

document.querySelector("#nextgame").onclick = function () {
  setPointsBack();
};

document.querySelector("[id='1']").onclick = function () {
  changePoints(1, multiplier());
};
document.querySelector("[id='2']").onclick = function () {
  changePoints(2, multiplier());
};
document.querySelector("[id='3']").onclick = function () {
  changePoints(3, multiplier());
};
document.querySelector("[id='4']").onclick = function () {
  changePoints(4, multiplier());
};
document.querySelector("[id='5']").onclick = function () {
  changePoints(5, multiplier());
};
document.querySelector("[id='6']").onclick = function () {
  changePoints(6, multiplier());
};
document.querySelector("[id='7']").onclick = function () {
  changePoints(7, multiplier());
};
document.querySelector("[id='8']").onclick = function () {
  changePoints(8, multiplier());
};
document.querySelector("[id='9']").onclick = function () {
  changePoints(9, multiplier());
};
document.querySelector("[id='10']").onclick = function () {
  changePoints(10, multiplier());
};
document.querySelector("[id='11']").onclick = function () {
  changePoints(11, multiplier());
};
document.querySelector("[id='12']").onclick = function () {
  changePoints(12, multiplier());
};
document.querySelector("[id='13']").onclick = function () {
  changePoints(13, multiplier());
};
document.querySelector("[id='14']").onclick = function () {
  changePoints(14, multiplier());
};
document.querySelector("[id='15']").onclick = function () {
  changePoints(15, multiplier());
};
document.querySelector("[id='16']").onclick = function () {
  changePoints(16, multiplier());
};
document.querySelector("[id='17']").onclick = function () {
  changePoints(17, multiplier());
};
document.querySelector("[id='18']").onclick = function () {
  changePoints(18, multiplier());
};
document.querySelector("[id='19']").onclick = function () {
  changePoints(19, multiplier());
};
document.querySelector("[id='20']").onclick = function () {
  changePoints(20, multiplier());
};
document.querySelector("[id='25']").onclick = function () {
  changePoints(25, multiplier());
};
document.querySelector("[id='50']").onclick = function () {
  changePoints(50, multiplier());
};

document.querySelector("#double1").onclick = function () {
  changePoints(2, multiplier());
};
document.querySelector("#double2").onclick = function () {
  changePoints(4, multiplier());
};
document.querySelector("#double3").onclick = function () {
  changePoints(6, multiplier());
};
document.querySelector("#double5").onclick = function () {
  changePoints(10, multiplier());
};
document.querySelector("#double6").onclick = function () {
  changePoints(12, multiplier());
};
document.querySelector("#double7").onclick = function () {
  changePoints(14, multiplier());
};
document.querySelector("#double8").onclick = function () {
  changePoints(16, multiplier());
};
document.querySelector("#double9").onclick = function () {
  changePoints(18, multiplier());
};
document.querySelector("#double10").onclick = function () {
  changePoints(20, multiplier());
};
document.querySelector("#double11").onclick = function () {
  changePoints(22, multiplier());
};
document.querySelector("#double12").onclick = function () {
  changePoints(24, multiplier());
};
document.querySelector("#double13").onclick = function () {
  changePoints(26, multiplier());
};
document.querySelector("#double14").onclick = function () {
  changePoints(28, multiplier());
};

document.querySelector("#double15").onclick = function () {
  changePoints(30, multiplier());
};
document.querySelector("#double16").onclick = function () {
  changePoints(32, multiplier());
};
document.querySelector("#double17").onclick = function () {
  changePoints(34, multiplier());
};
document.querySelector("#double18").onclick = function () {
  changePoints(36, multiplier());
};
document.querySelector("#double19").onclick = function () {
  changePoints(38, multiplier());
};
document.querySelector("#double20").onclick = function () {
  changePoints(40, multiplier());
};

document.querySelector("#triple1").onclick = function () {
  changePoints(3, multiplier());
};
document.querySelector("#triple2").onclick = function () {
  changePoints(6, multiplier());
};
document.querySelector("#triple3").onclick = function () {
  changePoints(9, multiplier());
};
document.querySelector("#triple5").onclick = function () {
  changePoints(15, multiplier());
};
document.querySelector("#triple6").onclick = function () {
  changePoints(18, multiplier());
};
document.querySelector("#triple7").onclick = function () {
  changePoints(21, multiplier());
};
document.querySelector("#triple8").onclick = function () {
  changePoints(24, multiplier());
};
document.querySelector("#triple9").onclick = function () {
  changePoints(27, multiplier());
};
document.querySelector("#triple10").onclick = function () {
  changePoints(30, multiplier());
};
document.querySelector("#triple11").onclick = function () {
  changePoints(33, multiplier());
};
document.querySelector("#triple12").onclick = function () {
  changePoints(36, multiplier());
};
document.querySelector("#triple13").onclick = function () {
  changePoints(39, multiplier());
};
document.querySelector("#triple14").onclick = function () {
  changePoints(42, multiplier());
};

document.querySelector("#triple15").onclick = function () {
  changePoints(45, multiplier());
};
document.querySelector("#triple16").onclick = function () {
  changePoints(48, multiplier());
};
document.querySelector("#triple17").onclick = function () {
  changePoints(51, multiplier());
};
document.querySelector("#triple18").onclick = function () {
  changePoints(54, multiplier());
};
document.querySelector("#triple19").onclick = function () {
  changePoints(57, multiplier());
};
document.querySelector("#triple20").onclick = function () {
  changePoints(60, multiplier());
};

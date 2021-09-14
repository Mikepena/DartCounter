var playerOne = 501;
var playerTwo = 501;
var playerThree = 501;
var playerFour = 501;
var p1 = true;
var p2 = false;
var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var threeDartsPlayerOne = [];
var threeDartsPlayerTwo = [];
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

function addThrowToList(dart, player) {
  if (player == 1) {
    threeDartsPlayerOne.push(dart);
    document.querySelector("#dartsPlayerOne").innerHTML = threeDartsPlayerOne;
  }
  if (player == 2) {
    threeDartsPlayerTwo.push(dart);
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
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

function changePoints(num) {
  document.querySelector("#nextPlayer").innerText = "";

  if (p1 === true) {
    document.querySelector("#dartsPlayerTwo").innerHTML = "";
    threeDartsPlayerTwo = [];
    addThrowToList(num, 1);
    if (playerOne < num) {
      changePlayer(1);
      document.querySelector("#nextPlayer").innerText =
        "Next player is Player Two";
      return;
    }
    changePlayerColor();

    playerOne -= num;
    counterPlayerOne++;
    if (checkZeroPoints(playerOne)) {
      checkWin(playerOne, "Player One");
      //playerOne += num;
    }
  }

  if (p2 === true) {
    document.querySelector("#dartsPlayerOne").innerHTML = "";
    threeDartsPlayerOne = [];
    addThrowToList(num, 2);

    if (playerTwo < num) {
      changePlayer(2);
      document.querySelector("#nextPlayer").innerText =
        "Next player is Player One";
      return;
    }
    changePlayerColor();
    playerTwo -= num;
    counterPlayerTwo++;
    if (checkZeroPoints(playerTwo)) {
      checkWin(playerTwo, "Player One");
      //playerOne += num;
    }
  }

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
  changePoints(1);
};
document.querySelector("[id='2']").onclick = function () {
  changePoints(2);
};
document.querySelector("[id='3']").onclick = function () {
  changePoints(3);
};
document.querySelector("[id='4']").onclick = function () {
  changePoints(4);
};
document.querySelector("[id='5']").onclick = function () {
  changePoints(5);
};
document.querySelector("[id='6']").onclick = function () {
  changePoints(6);
};
document.querySelector("[id='7']").onclick = function () {
  changePoints(7);
};
document.querySelector("[id='8']").onclick = function () {
  changePoints(8);
};
document.querySelector("[id='9']").onclick = function () {
  changePoints(9);
};
document.querySelector("[id='10']").onclick = function () {
  changePoints(10);
};
document.querySelector("[id='11']").onclick = function () {
  changePoints(11);
};
document.querySelector("[id='12']").onclick = function () {
  changePoints(12);
};
document.querySelector("[id='13']").onclick = function () {
  changePoints(13);
};
document.querySelector("[id='14']").onclick = function () {
  changePoints(14);
};
document.querySelector("[id='15']").onclick = function () {
  changePoints(15);
};
document.querySelector("[id='16']").onclick = function () {
  changePoints(16);
};
document.querySelector("[id='17']").onclick = function () {
  changePoints(17);
};
document.querySelector("[id='18']").onclick = function () {
  changePoints(18);
};
document.querySelector("[id='19']").onclick = function () {
  changePoints(19);
};
document.querySelector("[id='20']").onclick = function () {
  changePoints(20);
};
document.querySelector("[id='25']").onclick = function () {
  changePoints(25);
};
document.querySelector("[id='50']").onclick = function () {
  changePoints(50);
};

document.querySelector("#double1").onclick = function () {
  changePoints(2);
};
document.querySelector("#double2").onclick = function () {
  changePoints(4);
};
document.querySelector("#double3").onclick = function () {
  changePoints(6);
};
document.querySelector("#double5").onclick = function () {
  changePoints(10);
};
document.querySelector("#double6").onclick = function () {
  changePoints(12);
};
document.querySelector("#double7").onclick = function () {
  changePoints(14);
};
document.querySelector("#double8").onclick = function () {
  changePoints(16);
};
document.querySelector("#double9").onclick = function () {
  changePoints(18);
};
document.querySelector("#double10").onclick = function () {
  changePoints(20);
};
document.querySelector("#double11").onclick = function () {
  changePoints(22);
};
document.querySelector("#double12").onclick = function () {
  changePoints(24);
};
document.querySelector("#double13").onclick = function () {
  changePoints(26);
};
document.querySelector("#double14").onclick = function () {
  changePoints(28);
};

document.querySelector("#double15").onclick = function () {
  changePoints(30);
};
document.querySelector("#double16").onclick = function () {
  changePoints(32);
};
document.querySelector("#double17").onclick = function () {
  changePoints(34);
};
document.querySelector("#double18").onclick = function () {
  changePoints(36);
};
document.querySelector("#double19").onclick = function () {
  changePoints(38);
};
document.querySelector("#double20").onclick = function () {
  changePoints(40);
};

document.querySelector("#triple1").onclick = function () {
  changePoints(3);
};
document.querySelector("#triple2").onclick = function () {
  changePoints(6);
};
document.querySelector("#triple3").onclick = function () {
  changePoints(9);
};
document.querySelector("#triple5").onclick = function () {
  changePoints(15);
};
document.querySelector("#triple6").onclick = function () {
  changePoints(18);
};
document.querySelector("#triple7").onclick = function () {
  changePoints(21);
};
document.querySelector("#triple8").onclick = function () {
  changePoints(24);
};
document.querySelector("#triple9").onclick = function () {
  changePoints(27);
};
document.querySelector("#triple10").onclick = function () {
  changePoints(30);
};
document.querySelector("#triple11").onclick = function () {
  changePoints(33);
};
document.querySelector("#triple12").onclick = function () {
  changePoints(36);
};
document.querySelector("#triple13").onclick = function () {
  changePoints(39);
};
document.querySelector("#triple14").onclick = function () {
  changePoints(42);
};

document.querySelector("#triple15").onclick = function () {
  changePoints(45);
};
document.querySelector("#triple16").onclick = function () {
  changePoints(48);
};
document.querySelector("#triple17").onclick = function () {
  changePoints(51);
};
document.querySelector("#triple18").onclick = function () {
  changePoints(54);
};
document.querySelector("#triple19").onclick = function () {
  changePoints(57);
};
document.querySelector("#triple20").onclick = function () {
  changePoints(60);
};

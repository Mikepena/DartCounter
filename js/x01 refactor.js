var playerOne = 501;
var playerTwo = 501;
var playerThree = 501;
var playerFour = 501;
var p1 = true;
var p2 = false;
var doubleInPlayerOne;
var doubleInPlayerTwo;
var hitDoubleInPlayerOne;
var hitDoubleInPlayerTwo;
var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var lastDartPlayerOne;
var lastDartPlayerTwo;
var threeDartsPlayerOne = [];
var threeDartsPlayerTwo = [];
var allDartsPlayerOne = [];
var allDartsPlayerTwo = [];
var p1DoubleIn = false;
var p1DoubleOut = false;
var p2DoubleIn = false;
var p2DoubleOut = false;
var p1DoubleInHit = false;
var p2DoubleInHit = false;
var p1DoubleOutHit = false;
var p2DoubleOutHit = false;
var namePlayerOne = "Player One";
var namePlayerTwo = "Player Two";
var resultPlayerOneDoubleInChecked;
var resultPlayerTwoDoubleInChecked;

class Player {
  constructor(
    name,
    points,
    counter,
    isTrue,
    lastThreeDarts,
    average,
    lastDart,
    allDarts,
    doubleIn,
    doubleInHit,
    doubleOut,
    doubleOutHit
  ) {
    this.name = name;
    this.points = points;
    this.counter = counter;
    this.isTrue = isTrue;
    this.lastThreeDarts = lastThreeDarts;
    this.average = average;
    this.lastDart = lastDart;
    this.allDarts = allDarts;
    this.doubleIn = doubleIn;
    this.doubleInHit = doubleInHit;
    this.doubleOut = doubleOut;
    this.doubleOutHit = doubleOutHit;
    this.mastersIn = mastersIn;
    this.mastersInHit = mastersInHit;
    this.mastersOut = mastersOut;
    this.mastersOutHit = mastersOutHit;
  }
}

function doubleOut(points) {
  if (p1DoubleOut === true) {
    if (points == playerOne) {
      p1DoubleOutHit = true;
    }
  }
}
/** 
namePlayerOne = JSON.parse(localStorage.getItem("nameP1"));
namePlayerTwo = JSON.parse(localStorage.getItem("nameP2"));

p1DoubleIn = JSON.parse(localStorage.getItem("p1DoubleIn"));
p2DoubleIn = JSON.parse(localStorage.getItem("p2DoubleIn"));
p1DoubleOut = JSON.parse(localStorage.getItem("p1DoubleOut"));
p2DoubleOut = JSON.parse(localStorage.getItem("p2DoubleOut"));

console.log(p1DoubleInI, p2DoubleInI, p1DoubleOutI, p2DoubleOutI);

document.querySelector("#playerOneName").innerHTML = namePlayerOne;
document.querySelector("#playerTwoName").innerHTML = namePlayerTwo;
localStorage.clear();

**/
//next player blau

//Masters Out, Double Out, Average größer machen

function getPlayerNames() {
  namePlayerOne = document.querySelector("#nameInputP1").value;
  namePlayerTwo = document.querySelector("#nameInputP2").value;
  document.querySelector("#playerOneName").innerHTML = namePlayerOne;
  document.querySelector("#playerTwoName").innerHTML = namePlayerTwo;
}

document.querySelector("#submitName").onclick = function () {
  getPlayerNames(), getDoubleInFromForm();
};

function getDoubleInFromForm() {
  let resultPlayerOne = document.querySelector("#doubleInPlayerOne");
  let resultPlayerTwo = document.querySelector("#doubleInPlayerTwo");
  if (resultPlayerOne.checked) {
    p1DoubleIn = true;
  }
  if (resultPlayerTwo.checked) {
    p2DoubleIn = true;
  }
}

function getDoubleOutForm() {
  let resultPlayerOne = document.querySelector("'doubleOutPlayerOne");
  let resultPlayerTwo = document.querySelector("'doubleOutPlayerTwo");
  if (resultPlayerOne.checked) {
    p1DoubleOut = true;
  }
  if (resultPlayerTwo.checked) {
    p1DoubleOut = true;
  }
}

function getCurrentPlayer() {
  if (p1 === true) {
    return "p1";
  } else {
    return "p2";
  }
}

function checkDoubleInWasHit(player) {
  if (player == "p1") {
    if (p1DoubleIn === false && p1DoubleInHit === true) {
      return true;
    } else {
      return false;
    }
  } else if (player == "p2") {
    if (p2DoubleIn === false && p2DoubleInHit === true) {
      return true;
    } else {
      return false;
    }
  }
}

function checkDoubleInIsHit(isHit) {
  let player = getCurrentPlayer();
  if (p1DoubleIn == true && player == "p1") {
    if (isHit === true) {
      p1DoubleInHit = true;
      p1DoubleIn = false;
    } else {
      return;
    }
  }
  if (p2DoubleIn === true && player == "p2") {
    if (isHit === true) {
      p2DoubleInHit = true;
      p2DoubleIn = false;
    } else {
      return;
    }
  }
}

function getAverageDarts(allDarts, threeDarts) {
  let allDartsLength = allDarts.length;
  if (allDartsLength == 0) {
    allDarts.push(threeDarts[0]);
  }
  let totalSum = 0;
  for (let i in allDarts) {
    totalSum += allDarts[i];
  }
  let average = totalSum / allDartsLength;
  return Math.round((average + Number.EPSILON) * 100) / 100;
}

document.querySelector("#nextgame").onclick = function () {
  newGame();
};
function newGame() {
  playerOne = 501;
  playerTwo = 501;
  threeDartsPlayerOne = [];
  threeDartsPlayerTwo = [];
  allDartsPlayerOne = [];
  allDartsPlayerTwo = [];
  counterPlayerOne = 0;
  counterPlayerTwo = 0;
  p1 = true;
  p2 = false;
  document.getElementById("count1").innerHTML = playerOne;
  document.getElementById("count2").innerHTML = playerTwo;
  document.querySelector("#nextPlayer").innerText = "";
  document.querySelector("#dartsPlayerOne").innerHTML = "";
  document.querySelector("#dartsPlayerTwo").innerHTML = "";
  document.querySelector("#allDartsCounterPlayerOne").innerText = "";
  document.querySelector("#allDartsCounterPlayerTwo").innerText = "";
  document.getElementById("p1").style.color = "yellow";
  document.getElementById("p2").style.color = "white";
}

document.querySelector("#undoDarts").onclick = function () {
  undoLastDart();
};
function undoLastDart() {
  if (p1 === true && !counterPlayerOne == 0) {
    playerOne += threeDartsPlayerOne[counterPlayerOne - 1];
    counterPlayerOne -= 1;
    document.getElementById("count1").innerHTML = playerOne;
    threeDartsPlayerOne.pop();
    allDartsPlayerOne.pop();
    let average;
    if (playerOne !== 501) {
      average = getAverageDarts(allDartsPlayerOne, threeDartsPlayerOne);
    } else {
      average = 0;
    }
    document.querySelector("#dartsPlayerOne").innerHTML = threeDartsPlayerOne;
    document.querySelector("#allDartsCounterPlayerOne").innerText = average;
  } else if (p2 === true && !counterPlayerTwo == 0) {
    playerTwo += threeDartsPlayerTwo[counterPlayerTwo - 1];
    counterPlayerTwo -= 1;
    document.getElementById("count2").innerHTML = playerTwo;
    threeDartsPlayerTwo.pop();
    allDartsPlayerTwo.pop();
    let average = getAverageDarts(allDartsPlayerTwo, threeDartsPlayerTwo);
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
    document.querySelector("#allDartsCounterPlayerOne").innerText = average;
  }
  //bug wenn beide auf 0 und noch nix geworfen, crash aber nur bei first round
  //first if for Player 2
  if (
    p1 === true &&
    counterPlayerTwo == 0 &&
    p2 === false &&
    counterPlayerOne == 0 &&
    playerTwo !== 501
  ) {
    p2 = true;
    p1 = false;
    counterPlayerTwo = 2;
    playerTwo += lastDartPlayerTwo;
    document.getElementById("count2").innerHTML = playerTwo;
    threeDartsPlayerTwo.pop();

    allDartsPlayerTwo.pop();
    let average = getAverageDarts(allDartsPlayerTwo, threeDartsPlayerTwo);
    document.querySelector("#allDartsCounterPlayerTwo").innerText = average;
    changePlayerColor();
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
    document.querySelector("#nextPlayer").innerText = "";
  }

  if (
    p2 === true &&
    counterPlayerTwo == 0 &&
    p1 === false &&
    counterPlayerOne == 0 &&
    playerOne !== 501
  ) {
    p2 = false;
    p1 = true;
    counterPlayerOne = 2;
    playerOne += lastDartPlayerOne;
    document.getElementById("count1").innerHTML = playerOne;
    threeDartsPlayerOne.pop();
    allDartsPlayerOne.pop();
    let average = getAverageDarts(allDartsPlayerOne, threeDartsPlayerOne);
    changePlayerColor();
    document.querySelector("#allDartsCounterPlayerOne").innerText = average;
    document.querySelector("#dartsPlayerOne").innerHTML = threeDartsPlayerOne;
    document.querySelector("#nextPlayer").innerText = "";
  }
}

function checkDoubleIn(doubleIn, hitDoubleIn) {}

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
    threeDartsPlayerOne = [];
    threeDartsPlayerTwo = [];
    counterPlayerOne = 0;
    document.querySelector("#dartsPlayerOne").innerHTML = threeDartsPlayerOne;
    document.querySelector("#nextPlayer").innerText =
      "Next player is " + namePlayerTwo;
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "yellow";
  } else {
    p1 = true;
    p2 = false;
    changePlayerColor();
    threeDartsPlayerOne = [];
    threeDartsPlayerTwo = [];
    counterPlayerTwo = 0;
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
    document.querySelector("#nextPlayer").innerText =
      "Next player is " + namePlayerOne;
    document.getElementById("p2").style.color = "white";
    document.getElementById("p1").style.color = "yellow";
  }
}

function addThrowToList(dart, player) {
  if (player == 1) {
    threeDartsPlayerOne.push(dart);
    allDartsPlayerOne.push(dart);
    document.querySelector("#dartsPlayerOne").innerHTML = threeDartsPlayerOne;
  }
  if (player == 2) {
    threeDartsPlayerTwo.push(dart);
    allDartsPlayerTwo.push(dart);
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
  }
}

//player name einfügen
function checkWin(points, player) {
  if (points == 0) {
    document.querySelector("#nextPlayer").innerText = player + " has won";
  }
}

function checkZeroPoints(points) {
  if (points == 0) {
    return true;
  }
}
document.getElementById("p1").style.color = "yellow";

function changePlayerColor() {
  if (p1 === true) {
    document.getElementById("p1").style.color = "yellow";
    document.getElementById("p2").style.color = "white";
  }
  if (p2 === true) {
    document.getElementById("p1").style.fontSize = 100;
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "yellow";
  }
}

function changePointsi() {
  document.querySelector("#nextPlayer").innerText = "";
}

function changePoints(num) {
  document.querySelector("#nextPlayer").innerText = "";
  if (p1 === true) {
    if (p1DoubleOutHit === true) {
      document.querySelector("#nextPlayer").innerText =
        namePlayerOne + " has won";
      win = true;
      addThrowToList(num, 1);
      document.querySelector("#count1").innerHTML = playerOne;
    }
    if (
      checkDoubleInWasHit("p1") == true ||
      (p1DoubleIn === false && p1DoubleInHit === false)
    ) {
      lastDartPlayerTwo = 0;
      addThrowToList(num, 1);
      let average = getAverageDarts(allDartsPlayerOne, threeDartsPlayerOne);
      document.querySelector("#dartsPlayerTwo").innerHTML = "";
      document.querySelector("#allDartsCounterPlayerOne").innerText = average;
      threeDartsPlayerTwo = [];
      lastDartPlayerOne = num;
      if (playerOne < num) {
        changePlayer(1);
        document.querySelector("#nextPlayer").innerText =
          "Next player is " + namePlayerTwo;
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
  }

  if (p2 === true) {
    if (
      checkDoubleInWasHit("p2") == true ||
      (p2DoubleIn === false && p2DoubleInHit === false)
    ) {
      lastDartPlayerOne = 0;
      addThrowToList(num, 2);
      let average = getAverageDarts(allDartsPlayerTwo, threeDartsPlayerTwo);
      document.querySelector("#dartsPlayerOne").innerHTML = "";
      document.querySelector("#allDartsCounterPlayerTwo").innerText = average;
      threeDartsPlayerOne = [];
      lastDartPlayerTwo = num;
      if (playerTwo < num) {
        changePlayer(2);
        document.querySelector("#nextPlayer").innerText =
          "Next player is " + namePlayerOne;
        return;
      }
      changePlayerColor();
      playerTwo -= num;
      counterPlayerTwo++;
      if (checkZeroPoints(playerTwo)) {
        checkWin(playerTwo, "Player Two");
      }
    }
  }

  if (counterPlayerOne == 3) {
    changePlayer(1);
    document.querySelector("#nextPlayer").innerText =
      "Next player is " + namePlayerTwo;
    changePlayerColor();
    counterPlayerOne = 0;
  }
  if (counterPlayerTwo == 3) {
    changePlayer(2);
    document.querySelector("#nextPlayer").innerText =
      "Next player is " + namePlayerOne;
    changePlayerColor();
    counterPlayerTwo = 0;
  }
  document.getElementById("count1").innerHTML = playerOne;
  document.getElementById("count2").innerHTML = playerTwo;
}

document.querySelector("#nextPlayerButton").onclick = function () {
  changePlayerButton();
};

document.querySelector("#single1").onclick = function () {
  changePoints(1);
};
document.querySelector("#single2").onclick = function () {
  changePoints(2);
};
document.querySelector("#single3").onclick = function () {
  changePoints(3);
};
document.querySelector("#single4").onclick = function () {
  changePoints(4);
};
document.querySelector("#single5").onclick = function () {
  changePoints(5);
};
document.querySelector("#single6").onclick = function () {
  changePoints(6);
};
document.querySelector("#single7").onclick = function () {
  changePoints(7);
};
document.querySelector("#single8").onclick = function () {
  changePoints(8);
};
document.querySelector("#single9").onclick = function () {
  changePoints(9);
};
document.querySelector("#single10").onclick = function () {
  changePoints(10);
};
document.querySelector("#single11").onclick = function () {
  changePoints(11);
};
document.querySelector("#single12").onclick = function () {
  changePoints(12);
};
document.querySelector("#single13").onclick = function () {
  changePoints(13);
};
document.querySelector("#single14").onclick = function () {
  changePoints(14);
};
document.querySelector("#single15").onclick = function () {
  changePoints(15);
};
document.querySelector("#single16").onclick = function () {
  changePoints(16);
};
document.querySelector("#single17").onclick = function () {
  changePoints(17);
};
document.querySelector("#single18").onclick = function () {
  changePoints(18);
};
document.querySelector("#single19").onclick = function () {
  changePoints(19);
};
document.querySelector("#single20").onclick = function () {
  changePoints(20);
};
document.querySelector("#single25").onclick = function () {
  changePoints(25);
};
document.querySelector("#single50").onclick = function () {
  changePoints(50);
};

document.querySelector("#double1").onclick = function () {
  checkDoubleInIsHit(true), changePoints(2), doubleOut(2);
};
document.querySelector("#double2").onclick = function () {
  changePoints(4), checkDoubleInIsHit(true), doubleOut(4);
};
document.querySelector("#double3").onclick = function () {
  changePoints(6), checkDoubleInIsHit(true), doubleOut(6);
};
document.querySelector("#double5").onclick = function () {
  changePoints(10), checkDoubleInIsHit(true), doubleOut(10);
};
document.querySelector("#double6").onclick = function () {
  changePoints(12), checkDoubleInIsHit(true), doubleOut(12);
};
document.querySelector("#double7").onclick = function () {
  changePoints(14), checkDoubleInIsHit(true), doubleOut(14);
};
document.querySelector("#double8").onclick = function () {
  changePoints(16), checkDoubleInIsHit(true), doubleOut(16);
};
document.querySelector("#double9").onclick = function () {
  changePoints(18), checkDoubleInIsHit(true), doubleOut(18);
};
document.querySelector("#double10").onclick = function () {
  changePoints(20), checkDoubleInIsHit(true), doubleOut(20);
};
document.querySelector("#double11").onclick = function () {
  changePoints(22), checkDoubleInIsHit(true), doubleOut(22);
};
document.querySelector("#double12").onclick = function () {
  changePoints(24), checkDoubleInIsHit(true), doubleOut(24);
};
document.querySelector("#double13").onclick = function () {
  changePoints(26), checkDoubleInIsHit(true), doubleOut(26);
};
document.querySelector("#double14").onclick = function () {
  changePoints(28), checkDoubleInIsHit(true), doubleOut(28);
};

document.querySelector("#double15").onclick = function () {
  changePoints(30), checkDoubleInIsHit(true), doubleOut(30);
};
document.querySelector("#double16").onclick = function () {
  changePoints(32), checkDoubleInIsHit(true), doubleOut(32);
};
document.querySelector("#double17").onclick = function () {
  changePoints(34), checkDoubleInIsHit(true), doubleOut(34);
};
document.querySelector("#double18").onclick = function () {
  changePoints(36), checkDoubleInIsHit(true), doubleOut(36);
};
document.querySelector("#double19").onclick = function () {
  changePoints(38), checkDoubleInIsHit(true), doubleOut(38);
};
document.querySelector("#double20").onclick = function () {
  checkDoubleInIsHit(true), changePoints(40), doubleOut(40);
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

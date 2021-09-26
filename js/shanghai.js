var dartPointsP1 = 0;
var dartPointsP2 = 0;
var counterP1 = 0;
var counterP2 = 0;
var p1 = true;
var p2 = false;
var roundNumber = 1;
var allDartsRound = [];
var win;

document.querySelector("#nextgame").onclick = function () {
  newGame();
};
function newGame() {
  dartPointsP1 = 0;
  dartPointsP2 = 0;
  allDartsRound = [];
  counterP1 = 0;
  counterP2 = 0;
  p1 = true;
  p2 = false;
  win = false;
  document.getElementById("count1").innerHTML = dartPointsP1;
  document.getElementById("count2").innerHTML = dartPointsP2;
  document.querySelector("#nextPlayer").innerText = "";
  document.querySelector("#dartsPlayerOne").innerHTML = "";
  document.querySelector("#dartsPlayerTwo").innerHTML = "";
  document.querySelector("#allDartsCounterPlayerOne").innerText = "";
  document.querySelector("#allDartsCounterPlayerTwo").innerText = "";
  document.getElementById("p1").style.color = "blue";
  document.getElementById("p2").style.color = "white";
}

function checkIfNumberIsCorrectWithRound(dartBoardNumber, points) {
  if (roundNumber == dartBoardNumber) {
    changePoints(points);
  }
}

function checkWinningPlayer() {
  if (roundNumber == 8) {
    win = true;
    if (dartPointsP1 > dartPointsP2) {
      document.querySelector("#nextPlayer").innerText = "Player One has won!";
    } else {
      document.querySelector("#nextPlayer").innerText = "Player Two has won!";
    }
  }
}

function addThrowToList(dart, player) {
  if (player == 1) {
    allDartsRound.push(dart);
    document.querySelector("#dartsPlayerOne").innerHTML = allDartsRound;
  }
  if (player == 2) {
    allDartsRound.push(dart);
    document.querySelector("#dartsPlayerTwo").innerHTML = allDartsRound;
  }
}

function changePlayerColor() {
  if (p1 === true) {
    document.getElementById("p1").style.color = "blue";
    document.getElementById("p2").style.color = "white";
  }
  if (p2 === true) {
    document.getElementById("p1").style.fontSize = 100;
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "blue";
  }
}

function changePoints(num) {
  if (win === true) {
    //wenn gewonnen keine aktion mehr möglich
    return;
  }
  if (p1 === true) {
    dartPointsP1 += num;
    addThrowToList(num, 1);
    checkNumbersShanghaiWinPrintWinner(
      roundNumber,
      roundNumber,
      roundNumber * 2,
      roundNumber * 3
    );
    counterP1++;
    console.log("TEST");
    changePlayerColor();
    document.querySelector("#dartsPlayerTwo").innerHTML = "";
    checkWinningPlayer();
  } else if (p2 === true) {
    dartPointsP2 += num;
    addThrowToList(num, 2);
    checkNumbersShanghaiWinPrintWinner(
      roundNumber,
      roundNumber,
      roundNumber * 2,
      roundNumber * 3
    );
    counterP2++;
    changePlayerColor();
    document.querySelector("#dartsPlayerOne").innerHTML = "";
    checkWinningPlayer();
  }
  if (counterP1 == 3) {
    console.log("change");
    changePlayer(1);
    counterP1 = 0;
    allDartsRound = [];
  } else if (counterP2 == 3) {
    changePlayer(2);
    counterP2 = 0;
    allDartsRound = [];
    roundNumber++;
  }
  document.getElementById("count1").innerHTML = dartPointsP1;
  document.getElementById("count2").innerHTML = dartPointsP2;
}

function checkNumbersShanghaiWinPrintWinner(round, number1, number2, number3) {
  if (
    roundNumber == round && //vereinfachung der unteren funktion
    allDartsRound.includes(number1) &&
    allDartsRound.includes(number2) &&
    allDartsRound.includes(number3)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
}

/** function checkIfShanghaiWin(round) {
  console.log("TEST");
  if (
    round == 1 &&
    allDartsRound.includes(1) &&
    allDartsRound.includes(2) &&
    allDartsRound.includes(3)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 2 &&
    allDartsRound.includes(2) &&
    allDartsRound.includes(4) &&
    allDartsRound.includes(6)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 2 &&
    allDartsRound.includes(4) &&
    allDartsRound.includes(8) &&
    allDartsRound.includes(12)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 3 &&
    allDartsRound.includes(3) &&
    allDartsRound.includes(6) &&
    allDartsRound.includes(9)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 4 &&
    allDartsRound.includes(4) &&
    allDartsRound.includes(8) &&
    allDartsRound.includes(12)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 5 &&
    allDartsRound.includes(5) &&
    allDartsRound.includes(10) &&
    allDartsRound.includes(15)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 6 &&
    allDartsRound.includes(6) &&
    allDartsRound.includes(12) &&
    allDartsRound.includes(18)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
  if (
    round == 7 &&
    allDartsRound.includes(7) &&
    allDartsRound.includes(14) &&
    allDartsRound.includes(21)
  ) {
    if (p1 === true) {
      document.querySelector("#nextPlayer").innerText =
        "Player One has a Shanghai, he has won!";
    } else {
      document.querySelector("#nextPlayer").innerText =
        "Player Two has a Shanghai, he has won!";
    }
  }
}
**/
function changePlayer(player) {
  if (player === 1) {
    p1 = false;
    p2 = true;
    counterP1 = 0;
  } else {
    p2 = false;
    p1 = true;
    counterP2 = 0;
  }
}

function changePlayerButton() {
  if (p1 === true) {
    p1 = false;
    p2 = true;
    changePlayerColor();
    allDartsRound = [];
    counterP1 = 0;
    document.querySelector("#dartsPlayerOne").innerHTML = threeDartsPlayerOne;
    document.querySelector("#nextPlayer").innerText =
      "Next player is Player Two";
  } else {
    p1 = true;
    p2 = false;
    changePlayerColor();
    allDartsRound = [];
    counterP1 = 0;
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
    document.querySelector("#nextPlayer").innerText =
      "Next player is Player One";
  }
}

document.querySelector("[id='1']").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 1);
};
document.querySelector("[id='2']").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 2);
};
document.querySelector("[id='3']").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 3);
};
document.querySelector("[id='4']").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 4);
};
document.querySelector("[id='5']").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 5);
};
document.querySelector("[id='6']").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 6);
};
document.querySelector("[id='7']").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 7);
};
document.querySelector("[id='8']").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 8);
};
document.querySelector("[id='9']").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 9);
};
document.querySelector("[id='10']").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 10);
};
document.querySelector("[id='11']").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 11);
};
document.querySelector("[id='12']").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 12);
};
document.querySelector("[id='13']").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 13);
};
document.querySelector("[id='14']").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 14);
};
document.querySelector("[id='15']").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 15);
};
document.querySelector("[id='16']").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 16);
};
document.querySelector("[id='17']").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 17);
};
document.querySelector("[id='18']").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 18);
};
document.querySelector("[id='19']").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 19);
};
document.querySelector("[id='20']").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 20);
};
document.querySelector("[id='25']").onclick = function () {
  changePoints(0);
};
document.querySelector("[id='50']").onclick = function () {
  changePoints(0);
};

document.querySelector("#double1").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 2);
};
document.querySelector("#double2").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 4);
};
document.querySelector("#double3").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 6);
};
document.querySelector("#double5").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 8);
};
document.querySelector("#double6").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 12);
};
document.querySelector("#double7").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 14);
};
document.querySelector("#double8").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 16);
};
document.querySelector("#double9").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 18);
};
document.querySelector("#double10").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 20);
};
document.querySelector("#double11").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 22);
};
document.querySelector("#double12").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 24);
};
document.querySelector("#double13").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 26);
};
document.querySelector("#double14").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 28);
};

document.querySelector("#double15").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 30);
};
document.querySelector("#double16").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 32);
};
document.querySelector("#double17").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 34);
};
document.querySelector("#double18").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 36);
};
document.querySelector("#double19").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 38);
};
document.querySelector("#double20").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 40);
};

document.querySelector("#triple1").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 3);
};
document.querySelector("#triple2").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 6);
};
document.querySelector("#triple3").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 9);
};
document.querySelector("#triple5").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 15);
};
document.querySelector("#triple6").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 18);
};
document.querySelector("#triple7").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 21);
};
document.querySelector("#triple8").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 24);
};
document.querySelector("#triple9").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 27);
};
document.querySelector("#triple10").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 30);
};
document.querySelector("#triple11").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 33);
};
document.querySelector("#triple12").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 36);
};
document.querySelector("#triple13").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 39);
};
document.querySelector("#triple14").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 42);
};

document.querySelector("#triple15").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 45);
};
document.querySelector("#triple16").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 48);
};
document.querySelector("#triple17").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 51);
};
document.querySelector("#triple18").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 56);
};
document.querySelector("#triple19").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 57);
};
document.querySelector("#triple20").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 60);
};

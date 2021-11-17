import * as mainFunctions from "./modules/mainFunctions.js";

class Player {
  constructor(name, points, counter, isTrue, lastThreeDarts, average) {
    this.name = name;
    this.points = points;
    this.counter = counter;
    this.isTrue = isTrue;
    this.lastThreeDarts = lastThreeDarts;
    this.average = average;
  }
}

var roundNumberP1 = 1;
var roundNumberP2 = 1;
var shanghaiThreeDartsP1 = [];
var shanghaiThreeDartsP2 = [];
var win;

class ShanghaiPlayer extends Player {
  constructor(
    name,
    points,
    counter,
    isTrue,
    lastThreeDarts,
    average,
    roundNumber,
    shanghaiThreeDarts
  ) {
    super(name, points, counter, isTrue, lastThreeDarts, average);
    this.roundNumber = roundNumber;
    this.shanghaiThreeDarts = shanghaiThreeDarts;
  }
}

document.getElementById("p1").style.color = "yellow";
document.getElementById("p2").style.color = "white";

const playerOne = new ShanghaiPlayer("Player One", 0, 0, true, [], 0, 1, []);
const playerTwo = new ShanghaiPlayer("Player Two", 0, 0, false, [], 0, 1, []);

console.log(playerOne, playerTwo);
document.querySelector("#nextgame").onclick = function () {
  newGame();
};

function newGame() {
  playerOne.points = 0;
  playerOne.counter = 0;
  playerOne.isTrue = true;
  playerOne.lastThreeDarts = [];
  playerOne.roundNumber = 1;
  playerTwo.points = 0;
  playerTwo.counter = 0;
  playerTwo.isTrue = false;
  playerTwo.lastThreeDarts = [];
  playerTwo.roundNumber = 1;
  win = false;
  mainFunctions.changePlayerButtonColor("p2");
  document.getElementById("count1").innerHTML = 0;
  document.getElementById("count2").innerHTML = 0;
  mainFunctions.refreshNextPlayerToEmpty();
  mainFunctions.refreshLastThreeDartsToEmpty();
  refreshRoundNumber();
}

function refreshRoundNumber() {
  document.querySelector("#numberOfRoundP1").innerHTML = playerOne.roundNumber;
  document.querySelector("#numberOfRoundP2").innerHTML = playerTwo.roundNumber;
}

function checkIfNumberIsCorrectWithRound(dartBoardNumber, points) {
  if (playerOne.isTrue && playerOne.roundNumber == dartBoardNumber) {
    changePoints(points);
  }
  if (playerTwo.isTrue && playerTwo.roundNumber == dartBoardNumber) {
    changePoints(points);
  }
}

function checkWinningPlayer() {
  if (playerOne.roundNumber == 20 || playerTwo.roundNumber == 20) {
    win = true;
    if (playerOne.points > playerTwo.points) {
      document.querySelector("#nextPlayer").innerText = "Player One has won!";
    } else {
      document.querySelector("#nextPlayer").innerText = "Player Two has won!";
    }
  }
}

function refreshLastThreeDartsForBothPlayers() {
  document.querySelector("#dartsPlayerOne").innerHTML =
    playerOne.lastThreeDarts;
  document.querySelector("#dartsPlayerTwo").innerHTML =
    playerTwo.lastThreeDarts;
}

function changePlayerButton() {
  if (playerOne.isTrue == true) {
    changePlayer(playerOne);
    mainFunctions.refreshNextPlayer(playerTwo);
    mainFunctions.changePlayerButtonColor("p1");
  } else {
    changePlayer(playerTwo);
    mainFunctions.refreshNextPlayer(playerOne);
    mainFunctions.changePlayerButtonColor("p2");
  }
  mainFunctions.refreshLastThreeDartsToEmpty();

  refreshRoundNumber();
}

document.querySelector("#nextPlayerButton").onclick = function () {
  changePlayerButton();
};

//1, 4, 9 single, double triple
//2, 2, 9 double single, triple
//3, 2, 6 triple, single, double
//1, 6, 6 single, triple, double
//2, 6, 3 double, triple, single
//3, 4, 3 triple, double, single
function changePointsForObject(player, num) {
  refreshLastThreeDartsForBothPlayers();
  console.log("HELP");
  if (player.isTrue == true) {
    player.points += num;
    player.lastThreeDarts.push(num);
    refreshLastThreeDartsForBothPlayers();
    checkNumbersShanghaiWinPrintWinner(player);
    if (checkNumbersShanghaiWinPrintWinner == true) {
      return;
    }
    player.counter++;
  }
}

function changePlayer(player) {
  if (player == playerOne) {
    playerTwo.isTrue = true;
    playerOne.isTrue = false;
    playerOne.counter = 0;
    playerOne.lastThreeDarts = [];
  } else {
    playerOne.isTrue = true;
    playerTwo.isTrue = false;
    playerTwo.counter = 0;
    playerTwo.lastThreeDarts = [];
  }
}

function ifCounterIsThree(player, nextPlayer) {
  if (player.counter == 3) {
    changePlayer(player);
    mainFunctions.refreshNextPlayer(nextPlayer);
    let playerObject = player;
    if (playerObject == playerOne) {
      mainFunctions.changePlayerButtonColor("p1");
    } else {
      mainFunctions.changePlayerButtonColor("p2");
    }
  }
}

function changePoints(num) {
  console.log(playerOne, playerTwo);
  if (win === true) {
    //wenn gewonnen keine aktion mehr möglich
    return;
  }
  mainFunctions.refreshNextPlayerToEmpty();
  refreshRoundNumber();
  checkWinningPlayer(); //check an falscher stelle
  if (playerOne.isTrue == true) {
    playerOne.roundNumber++;
    refreshRoundNumber();
    changePointsForObject(playerOne, num);
    if (win == true) {
      return;
    }
    ifCounterIsThree(playerOne, playerTwo);
  } else {
    playerTwo.roundNumber++;
    refreshRoundNumber();
    changePointsForObject(playerTwo, num);
    if (win == true) {
      return;
    }
    ifCounterIsThree(playerTwo, playerOne);
  }
  mainFunctions.refreshCountToCurrentPoints(playerOne, playerTwo);
}

function checkNumbersShanghaiWinPrintWinner(player) {
  console.log("win");
  if (
    //vereinfachung der unteren funktion
    player.shanghaiThreeDarts.includes(1) &&
    player.shanghaiThreeDarts.includes(2) &&
    player.shanghaiThreeDarts.includes(3)
  ) {
    document.querySelector("#nextPlayer").innerText =
      player.name + " has a Shanghai, he has won!";
    win = true;
    return true;
    console.log("WIN");
  }
}

function addSingleDoubleOrTriple(multiplier) {
  if (playerOne.isTrue) {
    playerOne.shanghaiThreeDarts.push(multiplier);
  } else {
    playerTwo.shanghaiThreeDarts.push(multiplier);
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

document.querySelector("#single1").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 1), addSingleDoubleOrTriple(1);
};
document.querySelector("#single2").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 2), addSingleDoubleOrTriple(1);
};
document.querySelector("#single3").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 3), addSingleDoubleOrTriple(1);
};
document.querySelector("#single4").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 4), addSingleDoubleOrTriple(1);
};
document.querySelector("#single5").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 5), addSingleDoubleOrTriple(1);
};
document.querySelector("#single6").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 6), addSingleDoubleOrTriple(1);
};
document.querySelector("#single7").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 7), addSingleDoubleOrTriple(1);
};
document.querySelector("#single8").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 8), addSingleDoubleOrTriple(1);
};
document.querySelector("#single9").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 9), addSingleDoubleOrTriple(1);
};
document.querySelector("#single10").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 10), addSingleDoubleOrTriple(1);
};
document.querySelector("#single11").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 11), addSingleDoubleOrTriple(1);
};
document.querySelector("#single12").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 12), addSingleDoubleOrTriple(1);
};
document.querySelector("#single13").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 13), addSingleDoubleOrTriple(1);
};
document.querySelector("#single14").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 14), addSingleDoubleOrTriple(1);
};
document.querySelector("#single15").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 15), addSingleDoubleOrTriple(1);
};
document.querySelector("#single16").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 16), addSingleDoubleOrTriple(1);
};
document.querySelector("#single17").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 17), addSingleDoubleOrTriple(1);
};
document.querySelector("#single18").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 18), addSingleDoubleOrTriple(1);
};
document.querySelector("#single19").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 19), addSingleDoubleOrTriple(1);
};
document.querySelector("#single20").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 20), addSingleDoubleOrTriple(1);
};
document.querySelector("#single25").onclick = function () {
  changePoints(0);
};
document.querySelector("#single50").onclick = function () {
  changePoints(0);
};

document.querySelector("#double1").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 2), addSingleDoubleOrTriple(2);
};
document.querySelector("#double2").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 4), addSingleDoubleOrTriple(2);
};
document.querySelector("#double3").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 6), addSingleDoubleOrTriple(2);
};
document.querySelector("#double4").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 8), addSingleDoubleOrTriple(2);
};
document.querySelector("#double5").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 10), addSingleDoubleOrTriple(2);
};
document.querySelector("#double6").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 12), addSingleDoubleOrTriple(2);
};
document.querySelector("#double7").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 14), addSingleDoubleOrTriple(2);
};
document.querySelector("#double8").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 16), addSingleDoubleOrTriple(2);
};
document.querySelector("#double9").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 18), addSingleDoubleOrTriple(2);
};
document.querySelector("#double10").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 20), addSingleDoubleOrTriple(2);
};
document.querySelector("#double11").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 22), addSingleDoubleOrTriple(2);
};
document.querySelector("#double12").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 24), addSingleDoubleOrTriple(2);
};
document.querySelector("#double13").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 26), addSingleDoubleOrTriple(2);
};
document.querySelector("#double14").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 28), addSingleDoubleOrTriple(2);
};

document.querySelector("#double15").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 30), addSingleDoubleOrTriple(2);
};
document.querySelector("#double16").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 32), addSingleDoubleOrTriple(2);
};
document.querySelector("#double17").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 34), addSingleDoubleOrTriple(2);
};
document.querySelector("#double18").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 36), addSingleDoubleOrTriple(2);
};
document.querySelector("#double19").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 38), addSingleDoubleOrTriple(2);
};
document.querySelector("#double20").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 40), addSingleDoubleOrTriple(2);
};

document.querySelector("#triple1").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 3), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple2").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 6), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple3").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 9), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple4").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 12), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple5").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 15), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple6").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 18), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple7").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 21), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple8").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 24), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple9").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 27), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple10").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 30), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple11").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 33), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple12").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 36), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple13").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 39), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple14").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 42), addSingleDoubleOrTriple(3);
};

document.querySelector("#triple15").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 45), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple16").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 48), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple17").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 51), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple18").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 56), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple19").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 57), addSingleDoubleOrTriple(3);
};
document.querySelector("#triple20").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 60), addSingleDoubleOrTriple(3);
};

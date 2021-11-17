import * as mainFunctions from "./modules/mainFunctions.js";
import Player from "./Player.js";

var roundNumber = 1;

var win;

document.getElementById("p1").style.color = "yellow";
document.getElementById("p2").style.color = "white";

const playerOne = new Player("Player One", 0, 0, true, [], 0);
const playerTwo = new Player("Player Two", 0, 0, false, [], 0);
const playerThree = new Player("Player Three", 0, 0, false, [], 0);
const playerFour = new Player("Player Two", 0, 0, false, [], 0);

document.querySelector("#nextgame").onclick = function () {
  newGame();
};

function newGame() {
  playerOne.points = 0;
  playerOne.counter = 0;
  playerOne.isTrue = true;
  playerOne.lastThreeDarts = [];
  playerTwo.points = 0;
  playerTwo.counter = 0;
  playerTwo.isTrue = false;
  playerTwo.lastThreeDarts = [];
  roundNumber = 1;
  win = false;
  mainFunctions.changePlayerButtonColor("p2");
  document.getElementById("count1").innerHTML = 0;
  document.getElementById("count2").innerHTML = 0;
  mainFunctions.refreshNextPlayerToEmpty();
  mainFunctions.refreshLastThreeDartsToEmpty();
  refreshRoundNumber();
}

function loop(player) {}

function refreshRoundNumber() {
  document.querySelector("#numberOfRound").innerHTML = roundNumber;
}

function checkIfNumberIsCorrectWithRound(dartBoardNumber, points) {
  if (roundNumber == dartBoardNumber) {
    changePoints(points);
  }
}

function checkWinningPlayer() {
  if (roundNumber == 8) {
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
  document.querySelector("#dartsPlayerThree").innerHTML =
    playerThree.lastThreeDarts;
}

function changePlayerButton() {
  if (playerOne.isTrue == true) {
    changePlayer(playerOne);
    mainFunctions.refreshNextPlayer(playerTwo);
    mainFunctions.changePlayerButtonColor("p1");
  } else if (playerTwo.isTrue == true) {
    changePlayer(playerTwo);
    mainFunctions.refreshNextPlayer(playerThree);
    mainFunctions.changePlayerButtonColor("p2");
  } else {
    changePlayer(playerThree);
    mainFunctions.refreshNextPlayer(playerOne);
    mainFunctions.changePlayerButtonColor("p3");
  }
  mainFunctions.refreshLastThreeDartsToEmpty();
  if (playerOne.isTrue == true) {
    roundNumber++;
  }
  refreshRoundNumber();
}

document.querySelector("#nextPlayerButton").onclick = function () {
  changePlayerButton();
};

function changePointsForObject(player, num) {
  refreshLastThreeDartsForBothPlayers();
  if (player.isTrue == true) {
    player.points += num;
    player.lastThreeDarts.push(num);
    refreshLastThreeDartsForBothPlayers();
    checkNumbersShanghaiWinPrintWinner(
      roundNumber,
      roundNumber,
      roundNumber * 2,
      roundNumber * 3,
      player
    );
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
  } else if (player == playerTwo) {
    playerThree.isTrue = true;
    playerTwo.isTrue = false;
    playerTwo.counter = 0;
    playerTwo.lastThreeDarts = [];
  } else {
    playerOne.isTrue = true;
    playerThree.isTrue = false;
    playerThree.counter = 0;
    playerThree.lastThreeDarts = [];
  }
}

function ifCounterIsThree(player, nextPlayer) {
  if (player.counter == 3) {
    changePlayer(player);
    mainFunctions.refreshNextPlayer(nextPlayer);
    let playerObject = player;
    if (playerObject == playerOne) {
      mainFunctions.changePlayerButtonColor("p1");
    } else if (playerObject == playerTwo) {
      mainFunctions.changePlayerButtonColor("p2");
    } else {
      mainFunctions.changePlayerButtonColor("p3");
    }
    if (player == playerThree) {
      roundNumber++;
      refreshRoundNumber();
    }
  }
}

function changePoints(num) {
  if (win === true) {
    //wenn gewonnen keine aktion mehr möglich
    return;
  }
  mainFunctions.refreshNextPlayerToEmpty();
  refreshRoundNumber();
  checkWinningPlayer(); //check an falscher stelle
  if (playerOne.isTrue == true) {
    changePointsForObject(playerOne, num);
    if (win == true) {
      return;
    }
    ifCounterIsThree(playerOne, playerTwo);
  } else if (playerTwo.isTrue == true) {
    changePointsForObject(playerTwo, num);
    if (win == true) {
      return;
    }
    ifCounterIsThree(playerTwo, playerThree);
  } else {
    changePointsForObject(playerThree, num);
    if (win == true) {
      return;
    }
    ifCounterIsThree(playerThree, playerOne);
  }
  mainFunctions.refreshCountToCurrentPoints(playerOne, playerTwo, playerThree);
}

function checkNumbersShanghaiWinPrintWinner(
  round,
  number1,
  number2,
  number3,
  player
) {
  console.log("win");
  if (
    roundNumber == round && //vereinfachung der unteren funktion
    player.lastThreeDarts.includes(number1) &&
    player.lastThreeDarts.includes(number2) &&
    player.lastThreeDarts.includes(number3)
  ) {
    document.querySelector("#nextPlayer").innerText =
      player.name + " has a Shanghai, he has won!";
    win = true;
    return true;
    console.log("WIN");
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
  checkIfNumberIsCorrectWithRound(1, 1);
};
document.querySelector("#single2").onclick = function () {
  checkIfNumberIsCorrectWithRound(2, 2);
};
document.querySelector("#single3").onclick = function () {
  checkIfNumberIsCorrectWithRound(3, 3);
};
document.querySelector("#single4").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 4);
};
document.querySelector("#single5").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 5);
};
document.querySelector("#single6").onclick = function () {
  checkIfNumberIsCorrectWithRound(6, 6);
};
document.querySelector("#single7").onclick = function () {
  checkIfNumberIsCorrectWithRound(7, 7);
};
document.querySelector("#single8").onclick = function () {
  checkIfNumberIsCorrectWithRound(8, 8);
};
document.querySelector("#single9").onclick = function () {
  checkIfNumberIsCorrectWithRound(9, 9);
};
document.querySelector("#single10").onclick = function () {
  checkIfNumberIsCorrectWithRound(10, 10);
};
document.querySelector("#single11").onclick = function () {
  checkIfNumberIsCorrectWithRound(11, 11);
};
document.querySelector("#single12").onclick = function () {
  checkIfNumberIsCorrectWithRound(12, 12);
};
document.querySelector("#single13").onclick = function () {
  checkIfNumberIsCorrectWithRound(13, 13);
};
document.querySelector("#single14").onclick = function () {
  checkIfNumberIsCorrectWithRound(14, 14);
};
document.querySelector("#single15").onclick = function () {
  checkIfNumberIsCorrectWithRound(15, 15);
};
document.querySelector("#single16").onclick = function () {
  checkIfNumberIsCorrectWithRound(16, 16);
};
document.querySelector("#single17").onclick = function () {
  checkIfNumberIsCorrectWithRound(17, 17);
};
document.querySelector("#single18").onclick = function () {
  checkIfNumberIsCorrectWithRound(18, 18);
};
document.querySelector("#single19").onclick = function () {
  checkIfNumberIsCorrectWithRound(19, 19);
};
document.querySelector("#single20").onclick = function () {
  checkIfNumberIsCorrectWithRound(20, 20);
};
document.querySelector("#single25").onclick = function () {
  changePoints(0);
};
document.querySelector("#single50").onclick = function () {
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
document.querySelector("#double4").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 8);
};
document.querySelector("#double5").onclick = function () {
  checkIfNumberIsCorrectWithRound(5, 10);
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
document.querySelector("#triple4").onclick = function () {
  checkIfNumberIsCorrectWithRound(4, 12);
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

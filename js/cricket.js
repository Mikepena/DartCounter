var p1Points = 0;
var p2Points = 0;
var p1Counter = 0;
var p2Counter = 0;
var p1 = true;
var p2 = false;
var roundNumber;
var win;
var p1Cricket = [0, 0, 0, 0, 0, 0, 0];
var p2Cricket = [0, 0, 0, 0, 0, 0, 0];
var p1ThreeDarts = [];
var p2ThreeDarts = [];
var p1LastThrow = [];
var p1LastThrow2 = [];
var p1LastThrow3 = [];
var p2LastThrow = [];
var p2LastThrow2 = [];
var p2LastThrow3 = [];
var namePlayerOne = "Player One";
var namePlayerTwo = "Player Two";

//when Player One schon zu hat und Player 2 nicht, points erhöhen
//wenn Player One 2 hat und Player Two nicht, und Player One wirft 2, soll er points um den rest erhöhen

//functions nextPlayer blau wenn dran
//next Game
//undoLastDart
//maybe turn red wenn player alle 3? wenn alle Player, 3 haben zahl dann rot?
//class for Player

function changePlayerButton() {
  if (p1 === true) {
    p1 = false;
    p2 = true;
    p1LastThrow = [];
    p1Counter = 0;
    p1ThreeDarts = [];
    document.querySelector("#dartsPlayerOne").innerHTML = p1ThreeDarts;
    document.querySelector("#nextPlayer").innerText =
      "Next player is " + namePlayerTwo;
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "blue";
  } else {
    p1 = true;
    p2 = false;
    p2LastThrow = [];
    p2Counter = 0;
    p2ThreeDarts = [];
    document.querySelector("#dartsPlayerTwo").innerHTML = p2ThreeDarts;
    document.querySelector("#nextPlayer").innerText =
      "Next player is " + namePlayerOne;
    document.getElementById("p2").style.color = "white";
    document.getElementById("p1").style.color = "blue";
  }
}

document.querySelector("#nextPlayerButton").onclick = function () {
  changePlayerButton();
};

function changePlayer(player) {
  if (player == 1) {
    p1 = false;
    p2 = true;
    p1Counter = 0;
    p1ThreeDarts = [];
  } else {
    p2 = false;
    p1 = true;
    p2Counter = 0;
    p2ThreeDarts = [];
  }
}

function addThrowToList(dart, player) {
  if (player == 1) {
    p1ThreeDarts.push(dart);
    document.querySelector("#dartsPlayerOne").innerHTML = p1ThreeDarts;
  }
  if (player == 2) {
    p2ThreeDarts.push(dart);
    document.querySelector("#dartsPlayerTwo").innerHTML = p2ThreeDarts;
  }
}

function changeCricketCountHtml(numberInArray, player) {
  if (player == 1) {
    if (numberInArray == 0) {
      document.querySelector("#P120count").innerHTML = p1Cricket[numberInArray];
    } else if (numberInArray == 1) {
      document.querySelector("#P119count").innerHTML = p1Cricket[numberInArray];
    } else if (numberInArray == 2) {
      document.querySelector("#P118count").innerHTML = p1Cricket[numberInArray];
    } else if (numberInArray == 3) {
      document.querySelector("#P117count").innerHTML = p1Cricket[numberInArray];
    } else if (numberInArray == 4) {
      document.querySelector("#P116count").innerHTML = p1Cricket[numberInArray];
    } else if (numberInArray == 5) {
      document.querySelector("#P115count").innerHTML = p1Cricket[numberInArray];
    } else if (numberInArray == 6) {
      document.querySelector("#P1Bullcount").innerHTML =
        p1Cricket[numberInArray];
    }
  } else {
    if (numberInArray == 0) {
      document.querySelector("#P220count").innerHTML = p2Cricket[numberInArray];
    } else if (numberInArray == 1) {
      document.querySelector("#P219count").innerHTML = p2Cricket[numberInArray];
    } else if (numberInArray == 2) {
      document.querySelector("#P218count").innerHTML = p2Cricket[numberInArray];
    } else if (numberInArray == 3) {
      document.querySelector("#P217count").innerHTML = p2Cricket[numberInArray];
    } else if (numberInArray == 4) {
      document.querySelector("#P216count").innerHTML = p2Cricket[numberInArray];
    } else if (numberInArray == 5) {
      document.querySelector("#P215count").innerHTML = p2Cricket[numberInArray];
    } else if (numberInArray == 6) {
      document.querySelector("#P2Bullcount").innerHTML =
        p2Cricket[numberInArray];
    }
  }
}

document.querySelector("#undoDarts").onclick = function () {
  undoLastThrow();
};

function getCurrentLastThrow() {
  if (p1 == true) {
    if (p1Counter == 1) {
      return p1LastThrow;
    } else if (p1Counter == 2) {
      return p1LastThrow;
    } else {
      return p1LastThrow;
    }
  }
}

function undoCricketForLastThrow(lastThrow) {
  if (
    //triple wurf auf vorherige triple
    p1CricketNumber == 3 &&
    p1Multiplier == 3 &&
    p1PreviousCricketNumber == 3 &&
    p2CricketNumber < 3
  ) {
    p1Points -= p1AddedPoints;
  } else if (
    //triple wurf auf vorherige double
    p1CricketNumber == 3 &&
    p1Multiplier == 3 &&
    p1PreviousCricketNumber == 2 &&
    p2CricketNumber < 3
  ) {
    p1Points -= p1AddedPoints / 1.5;
    p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
  } else if (
    //triple wurf auf vorherige single
    p1CricketNumber == 3 &&
    p1Multiplier == 3 &&
    p1PreviousCricketNumber == 1 &&
    p2CricketNumber < 3
  ) {
    p1Points -= p1AddedPoints / 3;
    p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
  } else if (
    //double wurf auf vorherige triple
    p1CricketNumber == 3 &&
    p1Multiplier == 2 &&
    p1PreviousCricketNumber == 3 &&
    p2CricketNumber < 3
  ) {
    p1Points -= p1AddedPoints;
  } else if (
    //double wurf auf vorherige double
    p1CricketNumber == 3 &&
    p1Multiplier == 2 &&
    p1PreviousCricketNumber == 2 &&
    p2CricketNumber < 3
  ) {
    p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
    p1Points -= p1AddedPoints / 2;
  } else if (
    p1CricketNumber == 3 &&
    p1Multiplier == 2 &&
    p1PreviousCricketNumber == 1
  ) {
    //double wurf auf single
    p1Cricket[numberInArrayForPlayerOne] = 1;
  } else if (
    //single wurf auf vorherige triple
    p1CricketNumber == 3 &&
    p1Multiplier == 1 &&
    p1PreviousCricketNumber == 3 &&
    p2CricketNumber < 3
  ) {
    p1Points -= p1AddedPoints;
  } else if (p1Multiplier == 1) {
    //single wurf
    p1Cricket[numberInArrayForPlayerOne] -= p1Multiplier;
  }
}

//save last three lastThrows mit roundnumber
function undoLastThrow() {
  let numberInArrayForPlayerOne = p1LastThrow[1];
  let numberInArrayForPlayerTwo = p2LastThrow[1];
  let p1CurrentCricketNumber = p1Cricket[numberInArrayForPlayerOne]; //letzer wurf, veränderung, changes are important, magic
  let p2CricketNumber = p2Cricket[numberInArrayForPlayerOne];
  let p1Multiplier = p1LastThrow[2];
  let p2Multiplier = p2LastThrow[2];
  let p1AddedPoints = p1LastThrow[3];
  let p2AddedPoints = p2LastThrow[3];
  let p1PreviousCricketNumber = p1LastThrow[0];
  let p2PreviousCricketNumber = p2LastThrow[0];

  if (p1 === true && !p1Counter == 0) {
    p1Counter -= 1;
    p1ThreeDarts.pop();
    if (p2CricketNumber < 3) {
      //p2 cricket number unter 3
      if (p1CurrentCricketNumber == 3) {
        //wenn p1 cricket number aktuell 3 ist
        if (p1Multiplier == 3) {
          //multiplier getroffen
          if (p1PreviousCricketNumber == 3) {
            //vorherige number von 3-0
            p1Points -= p1AddedPoints;
          } else if (p1PreviousCricketNumber == 2) {
            p1Points -= p1AddedPoints / 1.5;
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          } else if (p1PreviousCricketNumber == 1) {
            p1Points -= p1AddedPoints / 3;
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          } else if (p1PreviousCricketNumber == 0) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          }
        } else if (p1Multiplier == 2) {
          //multiplier getroffen 2
          if (p1PreviousCricketNumber == 3) {
            p1Points -= p1AddedPoints;
          } else if (p1PreviousCricketNumber == 2) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
            p1Points -= p1AddedPoints / 2;
          } else if (p1PreviousCricketNumber == 1) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          }
        } else if (p1Multiplier == 1) {
          if (p1PreviousCricketNumber == 3) {
            p1Points -= p1AddedPoints;
          } else if (p1PreviousCricketNumber == 2) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          }
        }
      } else if (p1CurrentCricketNumber == 2) {
        if (p1Multiplier == 2) {
          if (p1PreviousCricketNumber == 2) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
            p1Points -= p1AddedPoints / 2;
          } else if (p1PreviousCricketNumber == 0) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          }
        }
      }
    } else if (p1CurrentCricketNumber == 1) {
      if (p1Multiplier == 1) {
        if (p1PreviousCricketNumber == 0) {
          p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
        }
      }
    }
    if (p2CricketNumber == 3) {
      if (
        p1CurrentCricketNumber == 3 ||
        p1CurrentCricketNumber == 2 ||
        p1CurrentCricketNumber == 1
      ) {
        if (
          p1PreviousCricketNumber == 3 ||
          p1PreviousCricketNumber == 2 ||
          p1PreviousCricketNumber == 1
        ) {
          if (p1Multiplier == 3 || p1Multiplier == 2 || p1Multiplier == 1) {
            p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
          }
        }
      }
    }
    /** if (
        //triple wurf auf vorherige triple
        p1CricketNumber == 3 &&
        p1Multiplier == 3 &&
        p1PreviousCricketNumber == 3
      ) {
        p1Points -= p1AddedPoints;
      } else if (
        //triple wurf auf vorherige double
        p1CricketNumber == 3 &&
        p1Multiplier == 3 &&
        p1PreviousCricketNumber == 2
      ) {
        p1Points -= p1AddedPoints / 1.5;
        p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
      } else if (
        //triple wurf auf vorherige single
        p1CricketNumber == 3 &&
        p1Multiplier == 3 &&
        p1PreviousCricketNumber == 1
      ) {
        p1Points -= p1AddedPoints / 3;
        p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
      } else if (
        //double wurf auf vorherige triple
        p1CricketNumber == 3 &&
        p1Multiplier == 2 &&
        p1PreviousCricketNumber == 3
      ) {
        p1Points -= p1AddedPoints;
      } else if (
        //double wurf auf vorherige double
        p1CricketNumber == 3 &&
        p1Multiplier == 2 &&
        p1PreviousCricketNumber == 2
      ) {
        p1Cricket[numberInArrayForPlayerOne] = p1PreviousCricketNumber;
        p1Points -= p1AddedPoints / 2;
      } else if (
        //single wurf auf vorherige triple
        p1CricketNumber == 3 &&
        p1Multiplier == 1 &&
        p1PreviousCricketNumber == 3
      ) {
        p1Points -= p1AddedPoints;
      } **/

    if (p2CricketNumber == 3) {
    }
    if (
      p1Multiplier == 1 &&
      p1CricketNumber == 3 &&
      p1PreviousCricketNumber < 3
    ) {
      //single wurf auf vorherige cricketNumber unter 3
      p1Cricket[numberInArrayForPlayerOne] -= p1Multiplier;
    } else if (
      p1CricketNumber == 1 &&
      p1Multiplier == 3 &&
      p1PreviousCricketNumber == 3
    ) {
      //double wurf auf single
      p1Cricket[numberInArrayForPlayerOne] = 1;
    } else if (
      p1CricketNumber == 3 &&
      p1Multiplier == 2 &&
      p1PreviousCricketNumber == 1
    ) {
      //double wurf auf single
      p1Cricket[numberInArrayForPlayerOne] = 1;
    }

    document.getElementById("count1").innerHTML = p1Points;
    changeCricketCountHtml(numberInArrayForPlayerOne, 1);
    document.querySelector("#dartsPlayerOne").innerHTML = p1ThreeDarts;
  }
  if (p2 === true && !counterPlayerTwo == 0) {
    playerTwo += lastDartPlayerTwo;
    counterPlayerTwo -= 1;
    document.getElementById("count2").innerHTML = playerTwo;
    threeDartsPlayerTwo.pop();
    document.querySelector("#dartsPlayerTwo").innerHTML = threeDartsPlayerTwo;
  }
}

function setLastThrows(
  counter,
  player,
  previousCricketNumber,
  numberInArray,
  multiplier,
  points
) {
  if (player == 1) {
    if (counter == 1) {
      p1LastThrow = [previousCricketNumber, numberInArray, multiplier, points];
    } else if (counter == 2) {
      p1LastThrow = [previousCricketNumber, numberInArray, multiplier, points];
    } else {
      p1LastThrow = [previousCricketNumber, numberInArray, multiplier, points];
    }
  } else {
    if (counter == 1) {
      p2LastThrow = [previousCricketNumber, numberInArray, multiplier, points];
    } else if (counter == 2) {
      p2LastThrow2 = [previousCricketNumber, numberInArray, multiplier, points];
    } else {
      p2LastThrow3 = [previousCricketNumber, numberInArray, multiplier, points];
    }
  }
}

function pushCurrentCricketNumber(counter, player, currentCricketNumber) {
  if (player == 1) {
    if (counter == 1) {
      p1LastThrow.push(currentCricketNumber);
    } else if (counter == 2) {
      p1LastThrow2.push(currentCricketNumber);
    } else {
      p1LastThrow3.push(currentCricketNumber);
    }
  }
}
function checkCricketNumber(numberInArray, multiplier, points) {
  let p1CricketNumber = p1Cricket[numberInArray];
  let p2CricketNumber = p2Cricket[numberInArray];
  document.querySelector("#dartsPlayerOne").innerHTML = p1ThreeDarts;
  document.querySelector("#dartsPlayerTwo").innerHTML = p2ThreeDarts;

  if (p1 == true) {
    p1Counter++;
    setLastThrows(
      p1Counter,
      1,
      p1CricketNumber,
      numberInArray,
      multiplier,
      points
    );
    console.log(p1LastThrow, p1LastThrow2, p1LastThrow3);
    if (p1CricketNumber == 3 && p2CricketNumber < 3) {
      p1Points += points;
    } else if (p1CricketNumber == 2 && multiplier == 2 && p2CricketNumber < 3) {
      p1Cricket[numberInArray] = 3;
      p1Points += points / 2;
    } else if (p1CricketNumber == 1 && multiplier == 3 && p2CricketNumber < 3) {
      p1Cricket[numberInArray] = 3;
      p1Points += points / 3;
    } else if (p1CricketNumber == 2 && multiplier == 3 && p2CricketNumber < 3) {
      p1Cricket[numberInArray] = 3;
      p1Points += points / 1.5;
    } else if (
      (p1CricketNumber == 2 && multiplier == 3) ||
      (p1CricketNumber == 1 && multiplier == 3) ||
      (p1CricketNumber == 2 && multiplier == 2)
    ) {
      p1Cricket[numberInArray] = 3;
    } else if (p1CricketNumber < 3) {
      p1Cricket[numberInArray] += multiplier;
    }
    changeCricketCountHtml(numberInArray, 1);
    addThrowToList(points, 1);
    document.querySelector("#count1").innerHTML = p1Points;
    if (p1CricketNumber[0] == 3 && p1CricketNumber[1] == 3) {
      win = true;
    }
    console.log(
      "previous cricket number: ",
      p1LastThrow[0],
      "index number: ",
      p1LastThrow[1],
      "multiplier: ",
      p1LastThrow[2],
      "points: ",
      p1LastThrow[3]
    );
    if (p1Counter == 3) {
      changePlayer(1);
    }
  } else {
    p2Counter++;
    p2LastThrow = [numberInArray, multiplier, points];
    if (p2CricketNumber == 3 && p1CricketNumber < 3) {
      p2Points += points;
    } else if (p2CricketNumber == 2 && multiplier == 2 && p1CricketNumber < 3) {
      p2Cricket[numberInArray] = 3;
      p2Points += points / 2;
    } else if (p2CricketNumber == 1 && multiplier == 3 && p1CricketNumber < 3) {
      p2Cricket[numberInArray] = 3;
      p2Points += points / 3;
    } else if (p2CricketNumber == 2 && multiplier == 3 && p1CricketNumber < 3) {
      p2Cricket[numberInArray] = 3;
      p2Points += points / 1.5;
    } else if (
      (p2CricketNumber == 2 && multiplier == 3) ||
      (p2CricketNumber == 1 && multiplier == 3) ||
      (p2CricketNumber == 2 && multiplier == 2)
    ) {
      p2Cricket[numberInArray] = 3;
    } else if (p2CricketNumber < 3) {
      p2Cricket[numberInArray] += multiplier;
    }
    changeCricketCountHtml(numberInArray, 2);
    addThrowToList(points, 2);

    document.querySelector("#count2").innerHTML = p2Points;

    if (p2Counter == 3) {
      changePlayer(2);
    }
  }
}

document.querySelector("#single15").onclick = function () {
  checkCricketNumber(5, 1, 15);
};
document.querySelector("#single16").onclick = function () {
  checkCricketNumber(4, 1, 16);
};
document.querySelector("#single17").onclick = function () {
  checkCricketNumber(3, 1, 17);
};
document.querySelector("#single18").onclick = function () {
  checkCricketNumber(2, 1, 18);
};
document.querySelector("#single19").onclick = function () {
  checkCricketNumber(1, 1, 19);
};
document.querySelector("#single20").onclick = function () {
  checkCricketNumber(0, 1, 20);
};
document.querySelector("#single25").onclick = function () {
  checkCricketNumber(6, 1, 25);
};
document.querySelector("#single50").onclick = function () {
  checkCricketNumber(6, 2, 50);
};

document.querySelector("#double15").onclick = function () {
  checkCricketNumber(5, 2, 30);
};
document.querySelector("#double16").onclick = function () {
  checkCricketNumber(4, 2, 32);
};
document.querySelector("#double17").onclick = function () {
  checkCricketNumber(3, 2, 34);
};
document.querySelector("#double18").onclick = function () {
  checkCricketNumber(2, 2, 36);
};
document.querySelector("#double19").onclick = function () {
  checkCricketNumber(1, 2, 38);
};
document.querySelector("#double20").onclick = function () {
  checkCricketNumber(0, 2, 40);
};

document.querySelector("#triple15").onclick = function () {
  checkCricketNumber(5, 3, 45);
};
document.querySelector("#triple16").onclick = function () {
  checkCricketNumber(4, 3, 48);
};
document.querySelector("#triple17").onclick = function () {
  checkCricketNumber(3, 3, 51);
};
document.querySelector("#triple18").onclick = function () {
  checkCricketNumber(2, 3, 54);
};
document.querySelector("#triple19").onclick = function () {
  checkCricketNumber(1, 3, 57);
};
document.querySelector("#triple20").onclick = function () {
  checkCricketNumber(0, 3, 60);
};

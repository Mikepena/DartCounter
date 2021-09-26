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

//when Player One schon zu hat und Player 2 nicht, points erhöhen
//wenn Player One 2 hat und Player Two nicht, und Player One wirft 2, soll er points um den rest erhöhen

function changePlayer(player) {
  if (player == 1) {
    p1 = false;
    p2 = true;
    p1Counter = 0;
  } else {
    p2 = false;
    p1 = true;
    p2Counter = 0;
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

function checkCricketNumber(numberInArray, multiplier, points) {
  let p1CricketNumber = p1Cricket[numberInArray];
  let p2CricketNumber = p2Cricket[numberInArray];

  if (p1 == true) {
    p1Counter++;
    if (p1CricketNumber == 3 && p2CricketNumber < 3) {
      p1Points += points;
      document.querySelector("#count1").innerHTML = p1Points;
    } else if (p1CricketNumber == 2 && multiplier == 2 && p2CricketNumber < 3) {
      p1Cricket[numberInArray] = 3;
      p1Points += points / 2;
      document.querySelector("#count1").innerHTML = p1Points;
    } else if (p1CricketNumber == 1 && multiplier == 3 && p2CricketNumber < 3) {
      p1Cricket[numberInArray] = 3;
      p1Points += points / 3;
      document.querySelector("#count1").innerHTML = p1Points;
    } else if (p1CricketNumber == 2 && multiplier == 3 && p2CricketNumber < 3) {
      p1Cricket[numberInArray] = 3;
      p1Points += points / 1.5;
      document.querySelector("#count1").innerHTML = p1Points;
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
    if (p1CricketNumber[0] == 3 && p1CricketNumber[1] == 3) {
      win = true;
    }
    if (p1Counter == 3) {
      changePlayer(1);
    }
  } else {
    p2Counter++;
    if (p2CricketNumber == 3 && p1CricketNumber < 3) {
      p2Points += points;
      document.querySelector("#count2").innerHTML = p2Points;
    } else if (p2CricketNumber == 2 && multiplier == 2 && p1CricketNumber < 3) {
      p2Cricket[numberInArray] = 3;
      p2Points += points / 2;
      document.querySelector("#count2").innerHTML = p2Points;
    } else if (p2CricketNumber == 1 && multiplier == 3 && p1CricketNumber < 3) {
      p2Cricket[numberInArray] = 3;
      p2Points += points / 3;
      document.querySelector("#count2").innerHTML = p2Points;
    } else if (p2CricketNumber == 2 && multiplier == 3 && p1CricketNumber < 3) {
      p2Cricket[numberInArray] = 3;
      p2Points += points / 1.5;
      document.querySelector("#count2").innerHTML = p2Points;
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
    if (p2Counter == 3) {
      changePlayer(2);
    }
  }
}

document.querySelector("[id='15']").onclick = function () {
  checkCricketNumber(5, 1, 15);
};
document.querySelector("[id='16']").onclick = function () {
  checkCricketNumber(4, 1, 16);
};
document.querySelector("[id='17']").onclick = function () {
  checkCricketNumber(3, 1, 17);
};
document.querySelector("[id='18']").onclick = function () {
  checkCricketNumber(2, 1, 18);
};
document.querySelector("[id='19']").onclick = function () {
  checkCricketNumber(1, 1, 19);
};
document.querySelector("[id='20']").onclick = function () {
  checkCricketNumber(0, 1, 20);
};
document.querySelector("[id='25']").onclick = function () {
  checkCricketNumber(6, 1, 25);
};
document.querySelector("[id='50']").onclick = function () {
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

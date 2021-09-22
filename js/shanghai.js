var dartPointsP1 = 0;
var dartPointsP2 = 0;
var counterP1 = 0;
var counterP2;
var p1 = true;
var p2;
var roundNumber = 1;
var allDartsRound = [];
var win;

function checkIfNumberIsCorrectWithRound(dartBoardNumber, points) {
  if (roundNumber == dartBoardNumber) {
    changePoints(points);
  }
}



function changePoints(num) {
  if(win === true) { //wenn gewonnen keine aktion mehr möglich
    return;
  }
  if (p1 === true) {
    dartPointsP1 += num;
    allDartsRound.push(num);
    checkIfShanghaiWin(roundNumber);
  }
  document.getElementById("count1").innerHTML = dartPointsP1;
  document.getElementById("count2").innerHTML = dartPointsP2;
}

function checkNumbersShanghaiWinPrintWinner(roundNumber, number1, number2, number3) {
  if(roundNumber == round && //vereinfachung der unteren funktion
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

function checkIfShanghaiWin(round) {
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
  

document.querySelector("[id='1']").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 1);
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
  checkIfNumberIsCorrectWithRound(20);
};
document.querySelector("[id='25']").onclick = function () {
  changePoints(25);
};
document.querySelector("[id='50']").onclick = function () {
  changePoints(50);
};

document.querySelector("#double1").onclick = function () {
  checkIfNumberIsCorrectWithRound(1, 2);
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
  checkIfNumberIsCorrectWithRound(1, 3);
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

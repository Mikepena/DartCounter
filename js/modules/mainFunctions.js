function refreshCountToCurrentPoints(playerOne, playerTwo, playerThree) {
  document.getElementById("count1").innerHTML = playerOne.points;
  document.getElementById("count2").innerHTML = playerTwo.points;
  document.getElementById("count3").innerHTML = playerThree.points;
}
function refreshLastThreeDartsToEmpty() {
  document.querySelector("#dartsPlayerOne").innerHTML = "";
  document.querySelector("#dartsPlayerTwo").innerHTML = "";
  document.querySelector("#dartsPlayerThree").innerHTML = "";
}

function refreshNextPlayerToEmpty() {
  document.querySelector("#nextPlayer").innerText = "";
}

function refreshNextPlayer(player) {
  document.querySelector("#nextPlayer").innerHTML =
    "Next player is " + player.name;
}
function changePlayerButtonColor(player) {
  if (player == "p2") {
    document.getElementById("p3").style.color = "yellow";
    document.getElementById("p2").style.color = "white";
  }
  if (player == "p1") {
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "yellow";
  }
  if (player == "p3") {
    document.getElementById("p3").style.color = "white";
    document.getElementById("p1").style.color = "yellow";
  }
}

export {
  refreshCountToCurrentPoints,
  refreshNextPlayer,
  refreshLastThreeDartsToEmpty,
  refreshNextPlayerToEmpty,
  changePlayerButtonColor,
};

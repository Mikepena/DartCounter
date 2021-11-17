var namePlayerOne = "Player One";
var namePlayerTwo = "Player Two";
var p1DoubleIn = false;
var p1DoubleOut = false;
var p2DoubleIn = false;
var p2DoubleOut = false;

function getPlayerNames() {
  namePlayerOne = document.querySelector("#nameInputP1").value;
  namePlayerTwo = document.querySelector("#nameInputP2").value;
  localStorage.setItem("nameP1", JSON.stringify(namePlayerOne));
  localStorage.setItem("nameP2", JSON.stringify(namePlayerTwo));
}

function getDoubleInFromForm() {
  var resultPlayerOneDI = document.querySelector("#doubleInPlayerOne");
  var resultPlayerTwoDI = document.querySelector("#doubleInPlayerTwo");
  var resultPlayerOneDO = document.querySelector("#doubleOutP1");
  var resultPlayerTwoDO = document.querySelector("#doubleOutP2");
  if (resultPlayerOneDI.checked) {
    p1DoubleIn = true;
    localStorage.setItem("p1DoubleIn", p1DoubleIn);
  }
  if (resultPlayerTwoDI.checked) {
    p2DoubleIn = true;
    localStorage.setItem("p2DoubleIn", JSON.stringify(p2DoubleIn));
  }
  if (resultPlayerOneDO.checked) {
    p1DoubleOut = true;
    localStorage.setItem("p1DoubleOut", JSON.stringify(p1DoubleOut));
  }
  if (resultPlayerTwoDO.checked) {
    p2DoubleOut = true;
    localStorage.setItem("p2DoubleOut", JSON.stringify(p2DoubleOut));
  }
}
document.querySelector("#submitName").onclick = function () {
  getPlayerNames(),
    getDoubleInFromForm(),
    console.log(namePlayerOne, namePlayerTwo);
  var p1DoubleInI = JSON.parse(localStorage.getItem("p1DoubleIn"));
  var p2DoubleInI = JSON.parse(localStorage.getItem("p2DoubleIn"));
  var p1DoubleOutI = JSON.parse(localStorage.getItem("p1DoubleOut"));
  var p2DoubleOutI = JSON.parse(localStorage.getItem("p2DoubleOut"));

  console.log(p1DoubleInI, p2DoubleInI, p1DoubleOutI, p2DoubleOutI);
};

function getNames() {
  return namePlayerOne, namePlayerTwo, p1DoubleIn, p2DoubleIn;
}

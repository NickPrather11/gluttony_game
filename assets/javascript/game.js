//      ****** GLOB VARS ******

var ranValArray = [];
var imgArray = [
  "assets/images/pizza.png",
  "assets/images/beer.png",
  "assets/images/chocolate_bar.png",
  "assets/images/tequila.png",
  "assets/images/cigarette.png",
];
var goal = Math.floor(Math.random() * 101 + 19);
var score = 0;
var win = 0;
var lose = 0;

//      ****** HELPERS ******

function displayNums() {
  $("#goalNum").text(goal);
  $("#scoreNum").text(score);
  $("#winNum").text(win);
  $("#lossNum").text(lose);
}

function generateRandomValues() {
  for (i = 0; i < 5; i++) {
    ranValArray.push(Math.ceil(Math.random() * 12));
  }
}

function buildButtons() {
  for (i = 0; i < imgArray.length; i++) {
    var item = $("<img>")
      .attr("src", imgArray[i])
      .attr("class", "itemButton")
      .attr("itemValue", ranValArray[i]);
    $("#itemButtonsDiv").append(item);
  }
}

function reset() {
  goal = Math.floor(Math.random() * 101 + 19);
  score = 0;
  displayNums();
  ranValArray = [];
  generateRandomValues();
  $("#itemButtonsDiv").empty();
  buildButtons();
}

//      ****** MAIN LOGIC / FUNCTION CALLS ******

generateRandomValues();
buildButtons();
displayNums();

//      ****** EVENT FUNCTIONS ******

$("#itemButtonsDiv").on("click", ".itemButton", function () {
  v = parseInt($(this).attr("itemValue"));
  score += v;
  $("#scoreNum").text(score);
  if (score === goal) {
    alert("You've Caught Your Ideal Buzz!");
    win++;
    reset();
  } else if (score > goal) {
    alert("You Took Too Much, Man!");
    lose++;
    reset();
  }
});

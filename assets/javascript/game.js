//      ****** GLOB VARS ******

var ranValArray = [];
var imgArray = [
  "assets/images/whiskey.png",
  "assets/images/beer.jpg",
  "assets/images/cigarette.jpg",
  "assets/images/pizza.png",
  "assets/images/chocolate_bar.png",
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
    var item = $("<img>").attr("src", imgArray[i]);
    var button = $("<button>")
      .attr("class", "itemButton")
      .attr("itemValue", ranValArray[i])
      .append(item);
    $("#itemButtonsDiv").append(button);
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

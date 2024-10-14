//create variables for random values (each button, goal number), score variable, Game Over boolean variable
var ranValArray = [];
var imgArray = [
  "assets/images/whiskey.png",
  "assets/images/beer.jpg",
  "assets/images/cigarette.jpg",
  "assets/images/pizza.png",
  "assets/images/chocolate_bar.png",
];
var goalNum = Math.floor(Math.random() * 101 + 19);
var score = 0;
var win = 0;
var lose = 0;

//create reset function with new random values, score variable at 0, update wins/losses
reset = function () {
  goalNum = Math.floor(Math.random() * 101 + 19);
  score = 0;
  $("#goalNum").text(goalNum);
  $("#winLoseCount").html(
    "<div>" + "Wins: " + win + "  " + "Losses: " + lose + "</div>"
  );
  $("#score").text("Score: " + score);
  ranValArray = [];
  ranVals();
  $("#itemButtonsDiv").empty();
  buildRanValItems();
};

//assign random values to each button
ranVals = function () {
  for (i = 0; i < 5; i++) {
    ranValArray.push(Math.ceil(Math.random() * 12));
  }
};

ranVals();

buildRanValItems = function () {
  for (i = 0; i < imgArray.length; i++) {
    var item = $("<img>");
    item.attr("src", imgArray[i]);
    item.attr("class", "itemButton");
    item.attr("itemValue", ranValArray[i]);
    $("#itemButtonsDiv").append(item);
  }
};
buildRanValItems();

// Display goalNum and win/lose count
var goalNumDiv = $("<div>").attr("id", "goalNum").text(goalNum);
var scoreNumDiv = $("<div>").attr("id", "scoreNum").text(score);
$("#goal").text("Goal: ").append(goalNumDiv);
$("#score").text("Score: ").append(scoreNumDiv);
var winsDiv = $("<div>")
  .attr("id", "wins")
  .html("Wins: " + win);
var lossesDiv = $("<div>")
  .attr("id", "losses")
  .html("Losses: " + lose);
$("#winLoseCount").append(winsDiv);
$("#winLoseCount").append(lossesDiv);

//click event adding value of each button to score variable plus win/lose if statements
$("#itemButtonsDiv").on("click", ".itemButton", function () {
  v = parseInt($(this).attr("itemValue"));
  score += v;
  $("#score").text("Score: " + score);
  if (score === goalNum) {
    alert("You've Caught Your Ideal Buzz!");
    win++;
    reset();
  } else if (score > goalNum) {
    alert("You Took Too Much, Man!");
    lose++;
    reset();
  }
});

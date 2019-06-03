//create variables for random values (each button, goal number), score variable, Game Over boolean variable
var ranValArray = [];
var imgArray = ["assets/images/whiskey.png", "assets/images/beer.jpg", "assets/images/cigarette.jpg", "assets/images/pizza.png", "assets/images/chocolate_bar.png"];
var goalNum = Math.floor((Math.random() * 101) + 19);
var score = 0;
var win = 0;
var lose = 0;


console.log("goalNum " + goalNum);

//create reset function with new random values, score variable at 0, update wins/losses
reset = function(){
    goalNum = Math.floor((Math.random() * 101) + 19);
    score = 0;
    $("#winLoseCount").text("<div>" + "Wins: " + win + "</div>" + "<div>" + "Losses: " + lose + "</div>");
};

//assign random values to each button
ranVals = function(){
    for(i = 0; i < 5; i++){
        ranValArray.push(Math.ceil(Math.random() * 12));
    }
};

ranVals();
console.log("ranValArray " + ranValArray);

for(i = 0; i < imgArray.length; i++){
    var item = $("<img>");
    item.attr("src", imgArray[i]);
    item.attr("class", "itemButton");
    item.attr("itemValue", ranValArray[i]);
    $("#itemButtonsDiv").append(item);
}


// Display goalNum and win/lose count
$("#goalNum").text(goalNum);
$("#winLoseCount").html("<div>" + "Wins: " + win + "</div>" + "<div>" + "Losses: " + lose + "</div>");
$("#score").text("Score: " + score);

//click event adding value of each button to score variable
$(".itemButton").on("click", function(){
    v = parseInt($(this).attr("itemValue"));
    score += v;
    $("#score").text("Score: " + score);
    console.log("this item's value: " + v);
})

//if score variable equals goal number then Win, else if score variable > goal number Lose
if(score === goalNum){
    alert("You Win!");
    win++;
    reset();
} else if(score > goalNum){
    alert("You Got Sick!")
    lose++;
    reset();
}


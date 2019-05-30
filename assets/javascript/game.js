//create variables for random values (each button, goal number), score variable, Game Over boolean variable
var ranValArray = [];
var goalNum = 0;
var score = 0;
var gameOver = false;

//create reset function with new random values, score variable at 0, gameOver=false
reset = function(){
    goalNum = Math.floor((Math.random() * 101) + 19);
    score = 0;
    gameOver = false;
}

//assign random values to each button
ranVals = function(){

}

//click event adding value of each button to score variable

//if score variable equals goal number then Win (gameOver=true), else if score variable > goal number Lose (gameOver=true)

// if gameOver=true, reset
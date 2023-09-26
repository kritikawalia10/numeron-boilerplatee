// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");
console.log(score);

var scoreBoard = document.getElementById("score-board");
var playagainButton = document.getElementById("play-again-button");
scoreBoard.innerHTML = score;

playagainButton.onclick= ()=>{
    location.href = "./game.html";
}

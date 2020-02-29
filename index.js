var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var dicePicPath1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dicePicPath2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", dicePicPath1);
document.querySelector(".img2").setAttribute("src", dicePicPath2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "It's a draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
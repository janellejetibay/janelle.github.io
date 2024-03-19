var container = document.querySelector(".container");
var colorCard = document.querySelector(".color-card");
var btn = document.querySelector("button");
var hex = document.querySelector("span");

function getNewColor() {
  var symbols = "01234567890ABCDEF";

  var color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = color;
  colorCard.style.background = color;
  hex.innerHTML = color;
}

btn.addEventListener("click", getNewColor);

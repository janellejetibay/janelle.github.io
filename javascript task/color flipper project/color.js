let container = document.querySelector(".container");
let colorCard = document.querySelector(".color-card");
let btn = document.querySelector("button");
let hex = document.querySelector("span");

function getNewColor() {
  let symbols = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = color;
  colorCard.style.background = color;
  hex.innerHTML = color;
}

btn.addEventListener("click", getNewColor);

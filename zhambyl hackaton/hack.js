/*----darkmode--*/
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

let next = document.querySelector(".nextimg");
let prev = document.querySelector(".previmg");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".itemimg");
  document.querySelector(".slideimg").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".itemimg");
  document.querySelector(".slideimg").prepend(items[items.length - 1]); // here the length of items = 6
});

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document
  .querySelector("#darkmode")
  .addEventListener("change", function (event) {
    document.querySelector("body").classList.toggle("dark");
  });

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});

// journals container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOption,
  interval: 400,
});

// Получаем кнопки и продукты
const acneBtn = document.getElementById("acne-btn");
const drynessBtn = document.getElementById("dryness-btn");
const wrinklesBtn = document.getElementById("wrinkles-btn");
const darkspotsBtn = document.getElementById("darkspots-btn");
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
// Задаем обработчики событий для кнопок
acneBtn.addEventListener("click", () => {
  // При выборе проблемы "Acne"
  product1.innerHTML =
    '<img src="https://img.freepik.com/premium-photo/clear-liquid-gel-serum-drop-isolated-white_89245-289.jpg" alt="Acne Product 1">';
  product2.innerHTML =
    '<img src="path/to/acne-product2.jpg" alt="Acne Product 2">';
});

drynessBtn.addEventListener("click", () => {
  // При выборе проблемы "Dryness"
  product1.innerHTML =
    '<img src="path/to/dryness-product1.jpg" alt="Dryness Product 1">';
  product2.innerHTML =
    '<img src="path/to/dryness-product2.jpg" alt="Dryness Product 2">';
});

wrinklesBtn.addEventListener("click", () => {
  // При выборе проблемы "Wrinkles"
  product1.innerHTML =
    '<img src="path/to/wrinkles-product1.jpg" alt="Wrinkles Product 1">';
  product2.innerHTML =
    '<img src="path/to/wrinkles-product2.jpg" alt="Wrinkles Product 2">';
});

darkspotsBtn.addEventListener("click", () => {
  // При выборе проблемы "Dark Spots"
  product1.innerHTML =
    '<img src="path/to/darkspots-product1.jpg" alt="Dark Spots Product 1">';
  product2.innerHTML =
    '<img src="path/to/darkspots-product2.jpg" alt="Dark Spots Product 2">';
});

function rate(reviewId, stars) {
  // Highlight selected stars
  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`stars-${reviewId}`).children[i - 1];
    if (i <= stars) {
      star.style.color = "gold";
    } else {
      star.style.color = "gray";
    }
  }
  // You can add functionality here to send the rating to the server or store it locally
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});

var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#f44336");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("myModal");
    overlay.style.display = "block";
    modal.style.display = "block";
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function () {
      overlay.style.display = "none";
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == overlay) {
        overlay.style.display = "none";
        modal.style.display = "none";
      }
    };
  }, 6000); // Show modal after 6 seconds
});

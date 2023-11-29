"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor; // Змінюємо колір фону <body>
  colorSpan.textContent = randomColor; // Встановлюємо випадковий колір у span.color
});
const widget = document.querySelector(".widget");
widget.setAttribute("id", "widget");

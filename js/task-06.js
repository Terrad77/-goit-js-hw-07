"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById("controls");
const input = controlsDiv.querySelector("input");
const createBtn = controlsDiv.querySelector("[data-create]");
const destroyBtn = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

function createBoxes(amount) {
  const initialSize = 30;
  let divString = "";
  for (let i = 0; i < amount; i++) {
    document.createElement("div");
    const boxSize = initialSize + i * 10;
    const color = getRandomHexColor();
    divString += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${color};"></div>`;
  }
  boxesDiv.innerHTML = divString;
}

// var.2
// function createBoxes(amount) {
//   const initialSize = 30;
//   const divString = Array.from({ length: amount }).reduce((acc, _, index) => {
//     const boxSize = initialSize + index * 10;
//     const color = getRandomHexColor();
//     const divString = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${color};"></div>`;
//     return acc + divString;
//   }, "");
//   boxesDiv.innerHTML = divString;
// }

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

//додавання контейнеру-обгортки
const wraperScript = document.createElement("div");
wraperScript.className = "wraper-script";

// Знаходимо батьківський елемент controlsDiv
const parentOfControls = controlsDiv.parentNode;

// Додаємо обгортку (div) перед controlsDiv
parentOfControls.insertBefore(wraperScript, controlsDiv);

// Переміщуємо controlsDiv & boxesDiv в обгортку div
wraperScript.appendChild(controlsDiv);
wraperScript.appendChild(boxesDiv);

input.setAttribute("type", "text");

createBtn.style.background = "#4E75FF";
destroyBtn.style.background = "#FF4E4E";

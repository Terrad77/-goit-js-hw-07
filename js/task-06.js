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
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = initialSize + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(box);
  }
}
//очищення boxesDiv
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

//зміна атрибута type у input
input.setAttribute("type", "text");

createBtn.style.background = "#4E75FF";
destroyBtn.style.background = "#FF4E4E";

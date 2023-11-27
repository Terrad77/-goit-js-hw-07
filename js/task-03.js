"use strict";
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.target.value.trim() || "Anonymous";
});

const containerDiv = document.createElement("div");
containerDiv.className = "txt-field";

const greeting = document.querySelector("h1");
greeting.className = "greeting";

// Знаходимо батьківський елемент h1
const parentOfH1 = greeting.parentNode;

// Додаємо обгортку (div) перед h1
parentOfH1.insertBefore(containerDiv, greeting);

// Переміщуємо input в новостворений div
containerDiv.appendChild(input);

// Переміщуємо h1 (з output) в новостворений div
containerDiv.appendChild(greeting);

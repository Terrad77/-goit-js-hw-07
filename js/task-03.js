"use strict";
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();
  output.textContent = trimmedValue || "Anonymous";
});

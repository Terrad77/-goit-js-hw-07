"use strict";
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-form button");
loginForm.setAttribute("id", "form");
loginBtn.textContent = "Log in";

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняє дефолтне перезавантаження сторінки при відправці форми

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const formValue = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formValue); // об'єкт із введеними даними
    this.reset(); // очищує значення полів форми
  }
});

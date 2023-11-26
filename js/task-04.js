"use strict";
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняє дефолтне перезавантаження сторінки при відправці форми

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData); // Виводить об'єкт із введеними даними в консоль
    this.reset(); // Очищає значення полів форми
  }
});

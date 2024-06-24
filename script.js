"use strict ";

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let errorsObj = {};

  //
  const emailFild = document.getElementById("email").value;
  if (emailFild === "") {
    errorsObj.email = "Enter your email";
    document.getElementById("email_error").innerText = "Enter your email";
  } else {
    document.getElementById("email_error").innerText = "";
    errorsObj.email = "";
  }
  //
  const usernameFild = document.getElementById("name").value;
  if (usernameFild === "") {
    document.getElementById("name_error").textContent =
      "Username field can not be empty";
    errorsObj.name = "Username field can not be empty";
  } else {
    document.getElementById("name_error").textContent = "";
    errorsObj.name = "";
  }
  //
  const lastNameFild = document.getElementById("lastName").value;
  if (lastNameFild === "") {
    document.getElementById("lastName_error").textContent =
      "Username field can not be empty";
    errorsObj.lastName = "Username field can not be empty";
  } else {
    document.getElementById("lastName_error").textContent = "";
    errorsObj.lastName = "";
  }
  //
  const phonenumberFild = document.getElementById("phonenumber").value;
  if (phonenumberFild === "") {
    document.getElementById("phonenumber_error").textContent =
      "Enter your phone number";
    errorsObj.phonenumber = "Phone number field can not be empty";
  } else {
    document.getElementById("phonenumber_error").textContent = "";
    errorsObj.phonenumber = "";
  }
  //
  const passwordFild = document.getElementById("password").value;

  const ConfigPasswordFild = document.getElementById("password2").value;
  if (passwordFild !== ConfigPasswordFild) {
    document.getElementById("password2_error").textContent =
      "Passwords do not match";
    errorsObj.password2 = "Passwords do not match";
  } else if (ConfigPasswordFild === "") {
    document.getElementById("password2_error").textContent =
      "This field can not be empty";
  } else {
    document.getElementById("password2_error").textContent = "";
    errorsObj.password2 = "";
  }
  //
  const maleRadio = document.getElementById("male").checked;
  const femaleRadio = document.getElementById("female").checked;
  if (maleRadio || femaleRadio) {
    document.querySelector(".gender_error").textContent = "";
    errorsObj.gender = "";
  } else {
    errorsObj.gender = "Please select your gender";
    document.querySelector(".gender_error").textContent =
      "Please select your gender";
  }
  if (Object.keys(errorsObj).length === 0) {
    document.querySelector(".form-submit-btn").style.cursor = "pointer";
    form.submit();
  }
});

const emailFild = document.getElementById("email");

function validationEmail() {
  const emailValue = document.getElementById("email").value;
  const error = document.getElementById("email_error");
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailPattern)) {
    error.innerHTML = "";
  } else {
    error.innerHTML = "Your Email is invalid";
    error.style.color = "red";
  }
  if (emailValue === "") {
    error.innerHTML = "";
  }
}
emailFild.addEventListener("keyup", validationEmail);

// password validation

const passwordFild = document.getElementById("password");
function validationPassword() {
  const passwordValue = document.getElementById("password").value;
  const error = document.getElementById("password_error");
  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (passwordValue.match(passwordPattern)) {
    error.innerHTML = "";
  } else {
    error.innerHTML = "Your Password is invalid";
  }
  if (passwordValue === "") {
    error.innerHTML = "";
  }
}
passwordFild.addEventListener("keyup", validationPassword);
///show password event
let eyeStatus = false;
const pasword_img = document.querySelector(".pasword_img");
pasword_img.addEventListener("click", (e) => {
  if (!eyeStatus) {
    pasword_img.src = "images/open.svg";
    passwordFild.type = "text";
    eyeStatus = true;
  } else {
    pasword_img.src = "images/close.svg";
    passwordFild.type = "password";
    eyeStatus = false;
  }
});

const ConfigPasswordFild = document.getElementById("password2");
let eyeStatus2 = false;
const pasword_img2 = document.querySelector(".pasword_img2");
pasword_img2.addEventListener("click", (e) => {
  if (!eyeStatus2) {
    pasword_img2.src = "images/open.svg";
    ConfigPasswordFild.type = "text";
    eyeStatus2 = true;
  } else {
    pasword_img2.src = "images/close.svg";
    ConfigPasswordFild.type = "password";
    eyeStatus2 = false;
  }
});

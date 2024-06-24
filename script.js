"use strict ";

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let errorsObj = {};
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
    errorsObj.password2 = "Passwords do not match";
  }
  //
  const maleRadio = document.getElementById("male").checked;
  const femaleRadio = document.getElementById("female").checked;
  if (maleRadio || femaleRadio) {
    return;
  } else {
    errorsObj.gender = "Please select your gender";
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

var head = document.querySelector("head");

var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";
link.type = "text/css";

head.append(link);

var body = document.querySelector("body");
body.classList.add("container");

/*
var body = document.getElementsByTagName("body")
returns an array of elements that match the argument provided

var body = document.querySelector("body")
returns the first element that matches the argument provided

var body = document.getElementsByClassName("container")
returns an array of elements that match the argument provided

var body = document.querySelector(".container")
returns the first element that matches the argument provided
*/

var form = document.createElement("form");
form.classList.add("container");

var labelEmail = document.createElement("label");
labelEmail.classList.add("container__item--left");
labelEmail.htmlFor = "email";
labelEmail.innerText = "E-mail";

var inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.id = "email";
inputEmail.placeholder = "Input your email";

var labelPassword = document.createElement("label");
labelPassword.classList.add("container__item--left");
labelPassword.htmlFor = "password";
labelPassword.innerText = "Password";

var inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.id = "password";
inputPassword.placeholder = "Input your password";

var button = document.createElement("button");
button.classList.add("container__item--right");
button.innerText = "Login";

form.append(labelEmail, inputEmail, labelPassword, inputPassword, button);

var anchor = document.createElement("a");
anchor.href = "register.html";
anchor.innerText = "Register";

body.append(form, anchor);

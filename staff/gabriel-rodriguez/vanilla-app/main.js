var head = document.querySelector("head");

var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";
link.type = "text/css";

head.append(link);

var body = document.querySelector("body")
body.classList.add("container");

var form = document.createElement("form");
form.classList.add("containerForm");

body.append(form);

var labelEmail = document.createElement("label");
labelEmail.classList.add("container__item--left");
labelEmail.htmlFor = "email";
labelEmail.innerText = "E-mail";

var inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.id = "email";
inputEmail.placeholder = "Input your mail";

 

var labelPassword = document.createElement("label");
labelPassword.classList.add("container__item--rigth");
labelPassword.htmlFor = "password";
labelPassword.innerText = "Password";


var inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.id = "password";
inputPassword.placeholder = "Input your password";


var button = document.createElement("button")
button.innerText = "Login"

form.append(labelEmail, inputEmail, labelPassword, inputPassword, button);


var anchor = document.createElement("a")
anchor.href = "register.html"
anchor.innerText = "Register"

body.append(anchor)
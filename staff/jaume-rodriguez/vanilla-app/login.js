/* INDEX.HTML */

/* CREAMOS UN CONTENEDOR FLEX */
var containerFlex = document.createElement("div")

/* CREAMOS UN FORMULARIO */
var form = document.createElement("form");
form.action = "home.html";

var email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter your e-mail";

var password = document.createElement("input");
password.type = "password";
password.placeholder = "Enter your password";

var button = document.createElement("button");
button.innerText = "Login";

var textEmail = document.createElement("p");
textEmail.innerText = "E-mail";

var textPassword = document.createElement("p");
textPassword.innerText = "Password";

var linkRegister = document.createElement("a");
linkRegister.href = "Register.html";
linkRegister.innerText = "Register";

form.append(textEmail, email,textPassword, password, button, linkRegister);

containerFlex.append(form);
document.body.append(containerFlex);

/* AGREGAMOS ESTILOS */
containerFlex.classList.add("container-flex");
form.classList.add("form");
button.classList.add("button");
textEmail.classList.add("textForm");
textPassword.classList.add("textForm");

/* ----------------------- */
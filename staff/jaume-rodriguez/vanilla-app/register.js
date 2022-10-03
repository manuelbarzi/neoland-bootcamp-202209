/* INDEX.HTML */

/* CREAMOS UN CONTENEDOR FLEX */
var containerFlex = document.createElement("div")

/* CREAMOS UN FORMULARIO */
var form = document.createElement("form");
form.action = "home.html";

var userName = document.createElement("input");
userName.type = "text";
userName.placeholder = "Enter a name";

var email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter an e-mail";

var password = document.createElement("input");
password.type = "password";
password.placeholder = "Enter a password";

var button = document.createElement("button");
button.innerText = "Register";

var textNombre = document.createElement("p");
textNombre.innerText= "Name";

var textEmail = document.createElement("p");
textEmail.innerText = "E-mail";

var textPassword = document.createElement("p");
textPassword.innerText = "Password";

var linkLogin = document.createElement("a");
linkLogin.href = "Login.html";
linkLogin.innerText = "Login";

form.append(textNombre, userName, textEmail, email,textPassword, password, button, linkLogin);

containerFlex.append(form);
document.body.append(containerFlex);

/* AGREGAMOS ESTILOS */
containerFlex.classList.add("container-flex");
form.classList.add("form");
button.classList.add("button");
textEmail.classList.add("textForm");
textPassword.classList.add("textForm");

/* ----------------------- */
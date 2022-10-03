/* INDEX.HTML */

/* CREAMOS UN FORMULARIO */

var form = document.createElement("form");

var email = document.createElement("input");

var password = document.createElement("input");

var button = document.createElement("button");

var texEmail = document.createElement("p")

var texPassword = document.createElement("p")

form.append(textEmail, email, textPassword, password, button);

email.type = "email";
email.placeholder ="introduce el email";

password.type = "password";
password.placeholder= "introducir la contraseña";

button.innerText = "loing"; 

texEmail.innerText = "E-mail"
texPassword.innerText = "Password";

/* AGREGAMOS UN ACTION AL BUTTON (LOGIN) */

form.action="home.html"

/* CREAMOS UN CONTENEDOR PARA EL FORM */

var containerFlex = document.createElement("div");

/*AGREGAMOS ESTILOS*/

containerFlex.classList.add("container-flex");
form.classList.add("form");
button.classList.add("button");
texEmail.classList.add("textForm");
textPassword.classList.add("textForm");

/* AGREGAMOS EL FORMULARIO AL CONTENIDO*/
containerFlex.append(form);
document.body.append(containerFlex)











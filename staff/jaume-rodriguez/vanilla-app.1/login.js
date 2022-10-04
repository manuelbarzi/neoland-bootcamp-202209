/* INDEX.HTML */

/* CREAMOS UN CONTENEDOR FLEX */
var containerFlex = document.createElement("div")
document.body.append(containerFlex);

/* CREAMOS UN HEADER */

var headerForm = document.createElement("h1");
headerForm.innerText = "Sign in to continue to Home";

containerFlex.append(headerForm);

/* CREAMOS UN FORMULARIO */
var form = document.createElement("form");
form.action = "home.html";

var imageAvatar = document.createElement("img");
imageAvatar.src = "avatarlogo.png";

var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "loginEmail";

var email = document.createElement("input");
email.type = "email";
email.placeholder = "Email";
email.id = "loginEmail";

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "loginPassword";

var password = document.createElement("input");
password.type = "password";
password.placeholder = "Password";
password.id = "loginPassword"

var button = document.createElement("button");
button.innerText = "Sign in";

form.append(imageAvatar, loginLabelEmail, email,loginLabelPassword, password, button);

containerFlex.append(form);

/* CREAMOS ENLACE CREATE AN ACCOUNT */

var linkRegister = document.createElement("a");
linkRegister.href = "Register.html";
linkRegister.innerText = "Create an account";

linkRegister.classList.add("anchor__login");

containerFlex.append(linkRegister);

/* AGREGAMOS ESTILOS */
containerFlex.classList.add("container-flex");
form.classList.add("form");
button.classList.add("button");
linkRegister.classList.add("anchor__login");
/* ----------------------- */
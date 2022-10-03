/* INDEX.HTML */

/* CREAMOS UN CONTENEDOR FLEX */
var containerFlex = document.createElement("div")

/* CREAMOS UN HEADER */

var headerForm = document.createElement("h1");
headerForm.innerText = "Create your Account to continue to Sign in ";

containerFlex.append(headerForm);

/* CREAMOS UN FORMULARIO */

var form = document.createElement("form");
form.action = "login.html";

var imageAvatar = document.createElement("img");
imageAvatar.src = "avatarlogo.png";

var userName = document.createElement("input");
userName.type = "text";
userName.placeholder = "Enter a name";
userName.required = "required";

var email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter an e-mail";

var password = document.createElement("input");
password.type = "password";
password.placeholder = "Enter a password";

var button = document.createElement("button");
button.innerText = "Register";

form.append(imageAvatar, userName, email, password, button);

containerFlex.append(form);
document.body.append(containerFlex);

/* CREAMOS ENLACE REGISTRO */

var linkLogin = document.createElement("a");
linkLogin.href = "Login.html";
linkLogin.innerText = "Sign in";

linkLogin.classList.add("anchor__login");

containerFlex.append(linkLogin);

/* AGREGAMOS ESTILOS */
containerFlex.classList.add("container-flex");
form.classList.add("form");
button.classList.add("button");
textEmail.classList.add("textForm");
textPassword.classList.add("textForm");

/* ----------------------- */
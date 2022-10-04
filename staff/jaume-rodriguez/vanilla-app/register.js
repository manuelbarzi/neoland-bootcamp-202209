/* INDEX.HTML */

/* CREAMOS UN CONTENEDOR FLEX */
var containerFlex = document.createElement("div")
document.body.append(containerFlex);

/* CREAMOS UN HEADER */

var headerForm = document.createElement("h1");
headerForm.innerText = "Create your Account to continue to Sign in ";

containerFlex.append(headerForm);

/* CREAMOS UN FORMULARIO */
var form = document.createElement("form");
form.action = "login.html";

var imageAvatar = document.createElement("img");
imageAvatar.src = "avatarlogo.png";

var loginLabelName = document.createElement("label");
loginLabelName.htmlFor = "loginName"

var userName = document.createElement("input");
userName.type = "text";
userName.placeholder = "Enter a name";
userName.required = "required";
userName.id = "loginName"

var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "loginEmail";

var email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter an e-mail";
email.id = "loginEmail";

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "loginPassword";

var password = document.createElement("input");
password.type = "password";
password.placeholder = "Enter a password";

password.id = "loginPassword"

var button = document.createElement("button");
button.innerText = "Register";

form.append(imageAvatar,loginLabelName, userName,loginLabelEmail, email,loginLabelPassword, password, button);

containerFlex.append(form);

/* CREAMOS ENLACE SIGN IN */

var linkLogin = document.createElement("a");
linkLogin.href = "Login.html";
linkLogin.innerText = "Sign in";

linkLogin.classList.add("anchor__login");

containerFlex.append(linkLogin);

/* AGREGAMOS ESTILOS */
containerFlex.classList.add("container-flex");
form.classList.add("form");
button.classList.add("button");

/* ----------------------- */
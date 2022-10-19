/* TODO VALIDAR 2 CONTRASEÑAS*/
/* TODO MEJORAR COLORES EN ALERT WRONG LOGIN Y USER */

/* CREAMOS UN REGISTER PAGE */
var registerPage = document.createElement("main");

/* CREAMOS UN CONTENEDOR FLEX */
var registerContainerFlex = document.createElement("div")
registerContainerFlex.classList.add("container-flex");

/* -- */
registerPage.append(registerContainerFlex);

/* CREAMOS UN HEADER */
var registerHeaderForm = document.createElement("h1");
registerHeaderForm.innerText = "Create your Account to continue to Sign in";

/* -- */
registerContainerFlex.append(registerHeaderForm);

/* CREAMOS UN FORMULARIO */
var registerForm = document.createElement("form");
registerForm.classList.add("form");

/* -- */
var registerImageAvatar = document.createElement("img");
registerImageAvatar.src = "img/logologintrello.png";

/* -- */
var registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "registerName"

var registerNameInput = document.createElement("input");
registerNameInput.type = "text";
registerNameInput.placeholder = "Enter a name";
registerNameInput.id = "registerName"
registerNameInput.required = true;
registerNameInput.title = "Please enter at least 1 character";

/* -- */
var registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";

var registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.placeholder = "Enter an e-mail";
registerEmailInput.id = "registerEmail";
registerNameInput.required = true;
registerEmailInput.title = "Please use @ and . on your email"

/* -- */
var registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";

var registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.placeholder = "Enter a password";
registerPasswordInput.id = "registerPassword"
registerNameInput.required = true;
registerPasswordInput.title = "Please enter at least 8 characters without spaces"

/* -- */
var registerCheckboxContainer = document.createElement("span");
registerCheckboxContainer.classList.add("form__checkbox__container");

var registerLabelPasswordCheckbox = document.createElement("label");
registerLabelPasswordCheckbox.type = "text";
registerLabelPasswordCheckbox.innerText = "Show password"
registerLabelPasswordCheckbox.classList.add("form__checkbox--text")

var registerPasswordCheckbox = document.createElement("input");
registerPasswordCheckbox.type = "checkbox";

registerPasswordCheckbox.onchange = function showPassword() {
  var showElement = registerPasswordInput;
  if (showElement.type === "password") {
    showElement.type = "text";
  } else {
    showElement.type = "password";
  }
}

registerCheckboxContainer.append(registerPasswordCheckbox, registerLabelPasswordCheckbox)

/* -- */
var registerButton = document.createElement("button");
registerButton.innerText = "Register";
registerButton.classList.add("button");

/* -- */
registerForm.append(registerImageAvatar, registerLabelName, registerNameInput, registerLabelEmail, registerEmailInput, registerLabelPassword, registerPasswordInput, registerCheckboxContainer, registerButton);
registerContainerFlex.append(registerForm);

/* CREAMOS ENLACE SIGN IN */
var registerLinkLogin = document.createElement("a");
registerLinkLogin.href = "";
registerLinkLogin.innerText = "Sign in";
registerLinkLogin.classList.add("anchor__login");

/* -- */
registerLinkLogin.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "Navigate to Login Page");

  registerPasswordInput.type = "password";

  registerPage.remove();
  registerForm.reset();
  document.body.append(loginPage);
}

/* -- */
registerContainerFlex.append(registerLinkLogin);

/* CREAMOS UNA BASE DE DATOS - BD */
registerForm.onsubmit = function (event) {
  event.preventDefault();
  console.log("DEBUG", "Submit register");

  var name = registerNameInput.value;
  var email = registerEmailInput.value;
  var password = registerPasswordInput.value;

  try {
    registerUser(name, email, password);

    console.log(users);

    registerPasswordInput.type = "password";
    registerForm.reset();
    registerPage.remove();
    document.body.append(loginPage);

  } catch (error) {
    alert(error.message)

    registerPasswordInput.value = "";
  }
}
/* ----------------------- */
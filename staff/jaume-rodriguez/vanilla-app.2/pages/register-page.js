/* TODO VALIDAR 2 CONTRASEÑAS*/
/* TODO MEJORAR COLORES EN ALERT WRONG LOGIN Y USER */

/* CREAMOS UN REGISTER PAGE */
const registerPage = document.createElement("main");

/* CREAMOS UN CONTENEDOR FLEX */
const registerContainerFlex = document.createElement("div")
registerContainerFlex.classList.add("container-flex");

registerPage.append(registerContainerFlex);

/* CREAMOS UN HEADER */
const registerHeaderForm = document.createElement("h1");
registerHeaderForm.innerText = "Create your Account to continue to Sign in";

registerContainerFlex.append(registerHeaderForm);

/* CREAMOS UN FORMULARIO */
const registerForm = document.createElement("form");
registerForm.classList.add("form");


const registerImageAvatar = document.createElement("img");
registerImageAvatar.src = "img/logologintrello.png";

const registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "registerName"

const registerNameInput = document.createElement("input");
registerNameInput.type = "text";
registerNameInput.placeholder = "Enter a name";
registerNameInput.id = "registerName"
registerNameInput.required = true;
registerNameInput.title = "Please enter at least 1 character";

const registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";

const registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.placeholder = "Enter an e-mail";
registerEmailInput.id = "registerEmail";
registerNameInput.required = true;
registerEmailInput.title = "Please use @ and . on your email"

const registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";

const registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.placeholder = "Enter a password";
registerPasswordInput.id = "registerPassword"
registerNameInput.required = true;
registerPasswordInput.title = "Please enter at least 8 characters without spaces"

const registerCheckboxContainer = document.createElement("span");
registerCheckboxContainer.classList.add("form__checkbox__container");

const registerLabelPasswordCheckbox = document.createElement("label");
registerLabelPasswordCheckbox.type = "text";
registerLabelPasswordCheckbox.innerText = "Show password"
registerLabelPasswordCheckbox.classList.add("form__checkbox--text")

const registerPasswordCheckbox = document.createElement("input");
registerPasswordCheckbox.type = "checkbox";

registerPasswordCheckbox.onchange = function showPassword() {
  const showElement = registerPasswordInput;
  if (showElement.type === "password") {
    showElement.type = "text";
  } else {
    showElement.type = "password";
  }
}

registerCheckboxContainer.append(registerPasswordCheckbox, registerLabelPasswordCheckbox)

const registerButton = document.createElement("button");
registerButton.innerText = "Register";
registerButton.classList.add("button");

registerForm.append(registerImageAvatar, registerLabelName, registerNameInput, registerLabelEmail, registerEmailInput, registerLabelPassword, registerPasswordInput, registerCheckboxContainer, registerButton);
registerContainerFlex.append(registerForm);

/* CREAMOS ENLACE SIGN IN */
const registerLinkLogin = document.createElement("a");
registerLinkLogin.href = "";
registerLinkLogin.innerText = "Sign in";
registerLinkLogin.classList.add("anchor__login");

registerLinkLogin.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "Navigate to Login Page");

  registerPasswordInput.type = "password";

  registerPage.remove();
  registerForm.reset();
  document.body.append(loginPage);
}

registerContainerFlex.append(registerLinkLogin);

/* CREAMOS UNA BASE DE DATOS - BD */
registerForm.onsubmit = function (event) {
  event.preventDefault();
  console.log("DEBUG", "Submit register");

  const name = registerNameInput.value;
  const email = registerEmailInput.value;
  const password = registerPasswordInput.value;

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
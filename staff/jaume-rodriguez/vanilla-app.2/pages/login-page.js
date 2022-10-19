/* TODO MEJORAR COLORES EN ALERT WRONG LOGIN Y USER */

/* CREAMOS UN LOGIN PAGE */
const loginPage = document.createElement("main");

/* CREAMOS UN CONTENEDOR FLEX */
const loginContainerFlex = document.createElement("div")
loginContainerFlex.classList.add("container-flex");

loginPage.append(loginContainerFlex);

/* CREAMOS UN HEADER */
const loginHeaderForm = document.createElement("h1");
loginHeaderForm.innerText = "Sign in to continue to Home";

loginContainerFlex.append(loginHeaderForm);

/* CREAMOS UN FORMULARIO */
const loginForm = document.createElement("form");
loginForm.classList.add("form");


const loginImageAvatar = document.createElement("img");
loginImageAvatar.src = "img/logologintrello.png";

const loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "loginEmail";

const loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.placeholder = "Email";
loginEmailInput.id = "loginEmail";
loginEmailInput.required = "required"
loginEmailInput.title = "Please use @ and . on your email"

const loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "loginPassword";

const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.placeholder = "Password";
loginPasswordInput.id = "loginPassword"
loginPasswordInput.required = "required"
loginPasswordInput.title = "Please enter at least 8 characters without spaces"

const loginButton = document.createElement("button");
loginButton.innerText = "Sign in";
loginButton.classList.add("button");


const loginCheckboxContainer = document.createElement("span");
loginCheckboxContainer.classList.add("form__checkbox__container");

const loginLabelPasswordCheckbox = document.createElement("label");
loginLabelPasswordCheckbox.type = "text";
loginLabelPasswordCheckbox.innerText = "Show password"
loginLabelPasswordCheckbox.classList.add("form__checkbox--text")

const loginPasswordCheckbox = document.createElement("input");
loginPasswordCheckbox.type = "checkbox";

loginPasswordCheckbox.onchange = function showPassword() {
  const showElement = loginPasswordInput;
  if (showElement.type === "password") {
    showElement.type = "text";
  } else {
    showElement.type = "password";
  }
}

loginCheckboxContainer.append(loginPasswordCheckbox, loginLabelPasswordCheckbox)

loginForm.append(loginImageAvatar, loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, loginCheckboxContainer, loginButton);
loginContainerFlex.append(loginForm);

/* CREAMOS ENLACE CREATE AN ACCOUNT */
const loginLinkRegister = document.createElement("a");
loginLinkRegister.href = "";
loginLinkRegister.innerText = "Create an account";
loginLinkRegister.classList.add("anchor__login");

loginLinkRegister.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "Navigate to register page");

  loginPasswordInput.type = "password";

  loginForm.reset();
  loginPage.remove();
  document.body.append(registerPage);
}

loginContainerFlex.append(loginLinkRegister);

/* CONFIRMAMOS USUARIO */
loginForm.onsubmit = function (event) {
  event.preventDefault()

  log("DEBUG", "Submit login")

  const email = loginEmailInput.value
  const password = loginPasswordInput.value

  try {
    user = authenticateUser(email, password)

    loginForm.reset();
    loginPage.remove();
    homePage.append(tasksPanelSection);
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
    updateNameInput.setAttribute("value", user.name);
    updateEmailInput.setAttribute("value", user.email);
    tasksPanelSecondTitle.innerText = user.name;

    clearTasksCards()
    renderTasksCards()

    document.body.append(homePage);

  } catch (error) {
    alert(error.message)

    loginPasswordInput.value = "";
  }
}
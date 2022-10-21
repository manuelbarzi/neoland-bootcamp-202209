/* TODO MEJORAR COLORES EN ALERT WRONG LOGIN Y USER */

/* CREAMOS UN LOGIN PAGE */
const loginPage = document.createElement("main");
loginPage.classList.add("h-full");

/* CREAMOS UN CONTENEDOR FLEX */
const loginContainerFlex = document.createElement("div");
loginContainerFlex.classList.add(
  "h-full",
  "flex",
  "flex-col",
  "flex-wrap",
  "justify-center",
  "items-center",
  "bg-gradient-to-br",
  "from-cyan-500",
  "to-blue-500"
);

loginPage.append(loginContainerFlex);

/* CREAMOS UN HEADER */
const loginHeaderForm = document.createElement("h1");
loginHeaderForm.innerText = "Sign in to continue to Home";
loginHeaderForm.classList.add("text-center");

loginContainerFlex.append(loginHeaderForm);

/* CREAMOS UN FORMULARIO */
const loginForm = document.createElement("form");
loginForm.classList.add(
  "flex",
  "flex-col",
  "justify-start",
  "w-96",
  "gap-1",
  "px-12",
  "py-14",
  "rounded",
  "bg-white"
);

const loginImageAvatar = document.createElement("img");
loginImageAvatar.src = "img/logologintrello.png";
loginImageAvatar.classList.add("self-center", "w-2/5", "mb-8");

const loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "loginEmail";

const loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.placeholder = "Email";
loginEmailInput.id = "loginEmail";
loginEmailInput.required = "required";
loginEmailInput.title = "Please use @ and . on your email";
loginEmailInput.classList.add(
  "h-10",
  "border-gray-400",
  "border-2",
  "rounded",
  "border-solid",
  "text-slate-800",
  "text-base",
  "pl-2"
);

const loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "loginPassword";

const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.placeholder = "Password";
loginPasswordInput.id = "loginPassword";
loginPasswordInput.required = "required";
loginPasswordInput.title = "Please enter at least 8 characters without spaces";
loginPasswordInput.classList.add(
  "h-10",
  "border-gray-400",
  "border-2",
  "rounded",
  "border-solid",
  "text-slate-800",
  "text-base",
  "pl-2"
);

const loginButton = document.createElement("button");
loginButton.innerText = "Sign in";
loginButton.classList.add(
  'w-full',
  'h-8',
  'self-start',
  'rounded',
  'border-none',
  'text-white',
  'font-bold',
  "bg-gradient-to-br",
  "from-cyan-500",
  "to-blue-500",
);

const loginCheckboxContainer = document.createElement("span");
loginCheckboxContainer.classList.add('flex');

const loginLabelPasswordCheckbox = document.createElement("label");
loginLabelPasswordCheckbox.type = "text";
loginLabelPasswordCheckbox.innerText = "Show password";
loginLabelPasswordCheckbox.classList.add('text-xs', 'mx-2', 'my-3');

const loginPasswordCheckbox = document.createElement("input");
loginPasswordCheckbox.type = "checkbox";

loginPasswordCheckbox.onchange = function showPassword() {
  const showElement = loginPasswordInput;
  if (showElement.type === "password") {
    showElement.type = "text";
  } else {
    showElement.type = "password";
  }
};

loginCheckboxContainer.append(
  loginPasswordCheckbox,
  loginLabelPasswordCheckbox
);

loginForm.append(
  loginImageAvatar,
  loginEmailLabel,
  loginEmailInput,
  loginPasswordLabel,
  loginPasswordInput,
  loginCheckboxContainer,
  loginButton
);
loginContainerFlex.append(loginForm);

/* CREAMOS ENLACE CREATE AN ACCOUNT */
const loginLinkRegister = document.createElement("a");
loginLinkRegister.href = "";
loginLinkRegister.innerText = "Create an account";
loginLinkRegister.classList.add('mt-2', 'text-white', 'text-base', 'hover:text-black');

loginLinkRegister.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "Navigate to register page");

  loginPasswordInput.type = "password";

  loginForm.reset();
  loginPage.remove();
  document.body.append(registerPage);
};

loginContainerFlex.append(loginLinkRegister);

/* CONFIRMAMOS USUARIO */
loginForm.onsubmit = function (event) {
  event.preventDefault();

  log("DEBUG", "Submit login");

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  try {
    user = authenticateUser(email, password);

    loginForm.reset();
    loginPage.remove();
    homePage.append(tasksPanelSection);
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
    updateNameInput.setAttribute("value", user.name);
    updateEmailInput.setAttribute("value", user.email);
    tasksPanelSecondTitle.innerText = user.name;

    clearTasksCards();
    renderTasksCards();

    document.body.append(homePage);
  } catch (error) {
    alert(error.message);

    loginPasswordInput.value = "";
  }
};

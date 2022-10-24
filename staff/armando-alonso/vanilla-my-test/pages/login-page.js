log("INFO", "Login Page");

const loginForm = document.createElement("form");
loginForm.classList.add("container");

loginForm.onsubmit = function (event) {
  event.preventDefault();

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

try {
  user = authenticateUser(email, password);

  loginForm.reset();

  loginPage.remove();

  homeUserName.innerText = user.name;

  clearTasksCards()

  renderTasksCards()

  document.body.append(homePage);

} catch (error) {
    alert(error.message)

    loginPasswordInput.value = ''
}

  
};

const loginTitle = document.createElement("h2");
loginTitle.innerText = "Login";

const loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "Email-login";
loginEmailLabel.classList.add("container__item--left");
loginEmailLabel.innerText = "Email";

const loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.id = "email-login";
loginEmailInput.placeholder = "Email";

const loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "pasword-login";
loginPasswordLabel.classList.add("container__item--left");
loginPasswordLabel.innerText = "Password";

const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.id = "password-login";
loginPasswordInput.placeholder = "Password";

const loginButton = document.createElement("button");
loginButton.classlist = "";
loginButton.innerText = "Login";

loginForm.append(
  loginTitle,
  loginEmailLabel,
  loginEmailInput,
  loginPasswordLabel,
  loginPasswordInput,
  loginButton
);

const loginRegisterLink = document.createElement("a");
loginRegisterLink.href = "";
loginRegisterLink.classlist = "";
loginRegisterLink.innerText = "Register";

loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  loginPage.remove();

  document.body.append(registerPage);
};

const loginPage = document.createElement("main");
loginPage.className = "container container--full";

loginPage.append(loginForm, loginRegisterLink);

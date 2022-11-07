log("INFO", "start app");

var users = [
  { name: "Pepito Grillo", email: "pepito@grillo.com", password: "123123123" },
  { name: "Carlos", email: "carlos@gmail.com", password: "123123123" },
];

// DONE inject login with js

log("DEBUG", "mount login");

var loginForm = document.createElement("form");
loginForm.className = "container";

loginForm.onsubmit = function (event) {
  event.preventDefault();

  // GET EMAIL AND PASSWORD FROM INPUTS
  var email = loginEmailInput.value;
  var password = loginPasswordInput.value;

  var userMatches = false;

  //   var userMatches = users.some(
  //     (user) => user.email === email && user.password === password
  //   );

  //  var userMatches = users.some(function(user) {
  //  return user.email === email && user.password === password
  //   });

  // VERIFY IF EMAIL AND PASSWORD MATCHES TO SOME USER IN DB
  for (var i = 0; i < users.length; i++) {
    // GET USER FROM DB IN INDEX "I" AND ASING IT TO VARIABLE USER
    var user = users[i];

    if (user.email === email && user.password === password) {
      userMatches = true;

      break;
    }
  }

  if (userMatches) {
    // IF MATCHES -> RESET FORM & NAVIGATE TO HOME
    loginForm.reset();

    loginPage.remove();
    document.body.append(homePage);
  } else {
    // ELSE -> SHOW ALERT MESSAGE
    alert("wrong credentials");
  }
};

var loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "login-email";
loginEmailLabel.className = "container__item--left";
loginEmailLabel.innerText = "E-mail";

var loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.id = "login-email";
loginEmailInput.placeholder = "input your e-mail";

var loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "login-password";
loginPasswordLabel.className = "container__item--left";
loginPasswordLabel.innerText = "Password";

var loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.id = "login-password";
loginPasswordInput.placeholder = "input your password";

var loginSubmitButton = document.createElement("button");
loginSubmitButton.className = "container__item--right";
loginSubmitButton.innerText = "Login";

loginForm.append(
  loginEmailLabel,
  loginEmailInput,
  loginPasswordLabel,
  loginPasswordInput,
  loginSubmitButton
);

var loginRegisterLink = document.createElement("a");
loginRegisterLink.href = "";
loginRegisterLink.innerText = "Register";

loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to register");

  loginPage.remove();
  document.body.append(registerPage);
};

var loginPage = document.createElement("main");
loginPage.className = "container";
loginPage.append(loginForm, loginRegisterLink);

document.body.append(loginPage);

// DONE inject register with js

log("DEBUG", "mount register");

var registerForm = document.createElement("form");
registerForm.className = "container";

// TODO implement register submit

registerForm.onsubmit = function (event) {
  event.preventDefault();

  log("DEBUG", "submit register");

  var user = {
    name: registerNameInput.value,
    email: registerEmailInput.value,
    password: registerPasswordInput.value,
  };

  users.push(user);

  registerForm.reset();

  alert("user registered");

  registerLoginLink.click();
};

var registerNameLabel = document.createElement("label");
registerNameLabel.htmlFor = "register-name";
registerNameLabel.className = "container__item--left";
registerNameLabel.innerText = "Name";

var registerNameInput = document.createElement("input");
registerNameInput.type = "name";
registerNameInput.id = "register-name";
registerNameInput.placeholder = "input your name";

var registerEmailLabel = document.createElement("label");
registerEmailLabel.htmlFor = "register-email";
registerEmailLabel.className = "container__item--left";
registerEmailLabel.innerText = "E-mail";

var registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.id = "register-email";
registerEmailInput.placeholder = "input your e-mail";

var registerPasswordLabel = document.createElement("label");
registerPasswordLabel.htmlFor = "register-password";
registerPasswordLabel.className = "container__item--left";
registerPasswordLabel.innerText = "Password";

var registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.id = "register-password";
registerPasswordInput.placeholder = "input your password";

var registerSubmitButton = document.createElement("button");
registerSubmitButton.className = "container__item--right";
registerSubmitButton.innerText = "Register";

registerForm.append(
  registerNameLabel,
  registerNameInput,
  registerEmailLabel,
  registerEmailInput,
  registerPasswordLabel,
  registerPasswordInput,
  registerSubmitButton
);

var registerLoginLink = document.createElement("a");
registerLoginLink.href = "";
registerLoginLink.innerText = "Login";

registerLoginLink.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to login");

  registerPage.remove();
  document.body.append(loginPage);
};

var registerPage = document.createElement("main");
registerPage.className = "container";
registerPage.append(registerForm, registerLoginLink);

// document.body.append(registerPage)

// DONE inject home with

log("DEBUG", "mount home");

var homeHeader = document.createElement("header");
var homeHeaderLink = document.createElement("a");
homeHeaderLink.href = "";
var homeHeaderImage = document.createElement("img");
homeHeaderImage.src = "https://fakeimg.pl/30/0000ff";

homeHeaderLink.append(homeHeaderImage);
homeHeader.append(homeHeaderLink);

var homePage = document.createElement("main");
homePage.className = "container";

homePage.append(homeHeader);

// document.body.append(homePage)

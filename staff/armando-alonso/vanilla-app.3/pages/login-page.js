log("DEBUG", "start login");

var loginForm = document.createElement("form");
loginForm.classList.add("form");

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var email = loginEmail.value;
  var password = loginPassword.value;

  const validUser = authenticateUsers(email, password)

  if (validUser instanceof Error) {
      alert(validUser.message);

    return
  }

  loginForm.reset();
  loginPage.remove();
  document.body.append(homePage);
  homeUser.innerText = validUser.name
};



var loginH1 = document.createElement("h1");
loginH1.innerText = "Login";

var loginEmail = document.createElement("input");
loginEmail.classList.add("input");
loginEmail.type = "email";
loginEmail.placeholder = "E-mail";

var loginPassword = document.createElement("input");
loginPassword.classList.add("input");
loginPassword.type = "password";
loginPassword.placeholder = "Password";

var loginButton = document.createElement("button");
loginButton.classList.add("button");
loginButton.innerText = "Login";

var loginAnchor = document.createElement("a");
loginAnchor.classList.add("enlace");
loginAnchor.innerText = "Register";
loginAnchor.href = "";

loginForm.append(loginH1, loginEmail, loginPassword, loginButton);

var loginPage = document.createElement("main");
loginPage.classList.add("container");
loginPage.append(loginForm, loginAnchor);

document.body.append(loginPage);

loginAnchor.onclick = function (event) {
  event.preventDefault();

  log("Debug", "navigate to register");

  loginPage.remove();
  document.body.append(registerPage);
};
log("INFO", "Login Page");

var loginForm = document.createElement("form");
loginForm.classList.add("container");

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var email = loginEmailInput.value
    var password = loginPasswordInput.value

    var result = authenticateUser(email, password)
    
    if (result instanceof Error) {

      alert(result.message)
      
      return
    }

    user = result

    loginForm.reset()
    loginPage.remove()
    homeUserName.innerText = user.name
    document.body.append(homePage)

}

var loginTitle = document.createElement("h2");
loginTitle.innerText = "Login";

var loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "Email-login";
loginEmailLabel.classList.add("container__item--left");
loginEmailLabel.innerText = "Email";

var loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.id = "email-login";
loginEmailInput.placeholder = "Email";

var loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "pasword-login";
loginPasswordLabel.classList.add("container__item--left");
loginPasswordLabel.innerText = "Password";

var loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.id = "password-login";
loginPasswordInput.placeholder = "Password";

var loginButton = document.createElement("button");
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

var loginRegisterLink = document.createElement("a");
loginRegisterLink.href = "";
loginRegisterLink.classlist = "";
loginRegisterLink.innerText = "Register";

loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  loginPage.remove();

  document.body.append(registerPage);
};

var loginPage = document.createElement("main");
loginPage.className = 'container container--full'

loginPage.append(loginForm, loginRegisterLink);


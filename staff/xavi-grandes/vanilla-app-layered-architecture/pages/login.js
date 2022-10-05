var body = document.querySelector("body");

var loginDivContainer = document.createElement("div");
loginDivContainer.classList.add("loginContainer");

var loginForm = document.createElement("form");
loginForm.method = "post";

loginForm.onsubmit = function (event) {
  event.preventDefault();
  // GET EMAIL AND PASSWORD FROM INPUTS
  var email = loginInputEmail.value;
  var password = loginInputPassword.value;
  // VERIFY IF EMAIL AND PASSWORD MATCHES TO SOME USER IN DB
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    // GET USER FROM DB IN INDEX "I" AND ASING IT TO VARIABLE USER
    if (user.email === email) {
      if (user.password === password) {
        loginForm.reset();

        loginDivContainer.remove();
        document.body.append(homeHeader);
      } // ELSE -> SHOW ALERT MESSAGE
      else alert("Email or password uncorrect");
      return;
    }
  }
  alert("user not registered");
};

var loginH1 = document.createElement("h1");
loginH1.innerText = "LOG IN";

var loginLine = document.createElement("hr");

var loginDivInputEmail = document.createElement("div");
loginDivInputEmail.classList.add("input", "email");

var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "loginemail";
loginLabelEmail.innerText = "Email";

var loginInputEmail = document.createElement("input");
loginInputEmail.type = "email";
loginInputEmail.name = "email";
loginInputEmail.id = "loginemail";
loginInputEmail.placeholder = "input your email";

var loginDivInputPasword = document.createElement("div");
loginDivInputPasword.classList.add("input", "password");

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "loginPassword";
loginLabelPassword.innerText = "Password";

var loginInputPassword = document.createElement("input");
loginInputPassword.type = "password";
loginInputPassword.name = "password";
loginInputPassword.id = "loginPassword";
loginInputPassword.placeholder = "input your password";

var loginButton = document.createElement("button");
loginButton.className = "btn";
loginButton.innerText = "login";

var loginAnchor = document.createElement("a");
loginAnchor.className = "regiterLink";
loginAnchor.innerText = "Register";

// En este apartado agrupo los contenidos de cada contenedor con .append
loginDivContainer.append(loginH1, loginLine, loginForm, loginAnchor);
loginForm.append(loginDivInputEmail, loginDivInputPasword, loginButton);
loginDivInputEmail.append(loginLabelEmail, loginInputEmail);
loginDivInputPasword.append(loginLabelPassword, loginInputPassword);
body.append(loginDivContainer);


// Explico la función que queremos ejecutar
loginAnchor.onclick = function (event) {
    event.preventDefault();
    
    log("DEBUG", "navigate to register");
    
    loginDivContainer.remove();
    document.body.append(registerDivContainer);
};

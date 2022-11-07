log("DEBUG", "start register");

var registerForm = document.createElement("form");
registerForm.classList.add("form");
registerForm.id = "formulario";

registerForm.onsubmit = function (event) {
  event.preventDefault();


  log("DEBUG", "submit register");

  var name = registerUser.value
  var email = registerEmail.value;
  var password = registerPassword.value

  const newUser = registUser(name, email, password)

  if (newUser instanceof Error) {
        alert(newUser.message)

        return
  }

  registerForm.reset();

  alert("user registered");

  registerAnchor.click();
};

var registerH1 = document.createElement("h1");
registerH1.innerText = "Register";

var registerUser = document.createElement("input");
registerUser.classList.add("input");
registerUser.id = "usuario";
registerUser.type = "text";
registerUser.placeholder = "User";

var registerEmail = document.createElement("input");
registerEmail.classList.add("input");
registerEmail.id = "email";
registerEmail.type = "email";
registerEmail.placeholder = "E-mail";

var registerPassword = document.createElement("input");
registerPassword.classList.add("input");
registerPassword.id = "password";
registerPassword.type = "password";
registerPassword.placeholder = "Password";

var registerButton = document.createElement("button");
registerButton.classList.add("button");
registerButton.innerText = "Register";

var registerAnchor = document.createElement("a");
registerAnchor.classList.add("enlace");
registerAnchor.style = "color: white; text-decoration: none";
registerAnchor.innerText = "Login";
registerAnchor.href = "";

registerForm.append(
  registerH1,
  registerUser,
  registerEmail,
  registerPassword,
  registerButton,
);

registerAnchor.onclick = function (event) {
  event.preventDefault();

  log("Debug", "navigate to login");

  registerPage.remove();
  document.body.append(loginPage);
};

var registerPage = document.createElement("main");
registerPage.classList.add("container");
registerPage.append(registerForm, registerAnchor);

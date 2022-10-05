log("DEBUG", "mount register");

// la variable divContainer es igual a - un elemento div en el documento
// la variable divContainer tiene una class llamada 'contaniner'
var registerDivContainer = document.createElement("div");
registerDivContainer.classList = "RegisterContainer";

var registerForm = document.createElement("form");
// registerForm.method = 'post'
registerForm.onsubmit = function (event) {
  event.preventDefault();
  //previene que el navegador por defecto refresque la página cuando se realiza el submit de los datos

  var user = {
    name: registerInputName.value,
    email: registerInputEmail.value,
    password: registerInputPasword.value,
  };

  users.push(user);

  registerForm.reset();

  alert("user registered");

  registerAnchor.click();
};

var registerH1 = document.createElement("h1");
registerH1.innerText = "REGISTER";

var registerLine = document.createElement("hr");

var registerDivName = document.createElement("div");
registerDivName.classList.add("input", "name");

var registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "name";
registerLabelName.innerHTML = "Name";

var registerInputName = document.createElement("input");
registerInputName.type = "name";
registerInputName.name = "name";
registerInputName.id = "name";
registerInputName.placeholder = "Input your name";

var registerDivEmail = document.createElement("div");
registerDivEmail.classList.add("input", "email");

var registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";
registerLabelEmail.innerText = "E-mail";

var registerInputEmail = document.createElement("input");
registerInputEmail.type = "email";
registerInputEmail.name = "email";
registerInputEmail.id = "registerEmail";
registerInputEmail.placeholder = "input your email";

var registerDivPassword = document.createElement("div");
registerDivPassword.classList.add("input", "password");

var registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";
registerLabelPassword.innerText = "Pasword";

var registerInputPasword = document.createElement("input");
registerInputPasword.type = "password";
registerInputPasword.name = "password";
registerInputPasword.id = "registerPassword";
registerInputPasword.placeholder = "Input your password";

var registerButton = document.createElement("button");
registerButton.innerText = "Register";

var registerAnchor = document.createElement("a");
registerAnchor.className = "loginLink";
registerAnchor.innerText = "Log In";

registerDivContainer.append(
  registerH1,
  registerLine,
  registerForm,
  registerAnchor
);
registerForm.append(
  registerDivName,
  registerDivEmail,
  registerDivPassword,
  registerButton
);
registerDivName.append(registerLabelName, registerInputName);
registerDivEmail.append(registerLabelEmail, registerInputEmail);
registerDivPassword.append(registerLabelPassword, registerInputPasword);

// al hacer click en la variable registerAnchor que es un enlace.
registerAnchor.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to login");

  registerDivContainer.remove();
  document.body.append(loginDivContainer);
};
log("DEBUG", "mount register");

// la variable divContainer es igual a - un elemento div en el documento
// la variable divContainer tiene una class llamada 'contaniner'
const registerPage = document.createElement("div");
registerPage.classList = "RegisterContainer";

const registerForm = document.createElement("form");

registerForm.onsubmit = function (event) {
  event.preventDefault();
  //previene que el navegador por defecto refresque la página cuando se realiza el submit de los datos

  const name = registerInputName.value;
  const email = registerInputEmail.value;
  const password = registerInputPassword.value;

  try {
    registerUser(name, email, password);

    registerForm.reset();

    alert("user registered");

    registerLoginLink.click();
  } catch (error) {
    alert(error.message);

    registerInputPassword.value = '';
  }
}

const registerH1 = document.createElement("h1");
registerH1.innerText = "REGISTER";

const registerLine = document.createElement("hr");

const registerDivName = document.createElement("div");
registerDivName.classList.add("input", "name");

const registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "name";
registerLabelName.innerHTML = "Name";

const registerInputName = document.createElement("input");
registerInputName.type = "name";
registerInputName.name = "name";
registerInputName.id = "name";
registerInputName.placeholder = "Input your name";
registerInputName.pattern = "[a-zA-Z]{1,}";
registerInputName.required = true;
registerInputName.oninvalid = function () {
  alert(
    "Use characters from A to Z for names (min 1 character, and not numerics)"
  );
};

const registerDivEmail = document.createElement("div");
registerDivEmail.classList.add("input", "email");

const registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";
registerLabelEmail.innerText = "E-mail";

const registerInputEmail = document.createElement("input");
registerInputEmail.type = "email";
registerInputEmail.name = "email";
registerInputEmail.id = "registerEmail";
registerInputEmail.placeholder = "input your email";
registerInputEmail.required = true;

const registerDivPassword = document.createElement("div");
registerDivPassword.classList.add("input", "password");

const registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";
registerLabelPassword.innerText = "Pasword";

const registerInputPassword = document.createElement("input");
registerInputPassword.type = "password";
registerInputPassword.name = "password";
registerInputPassword.id = "registerPassword";
registerInputPassword.placeholder = "Input your password";
registerInputPassword.pattern = "[A-Za-z0-9S]{8,}";
registerInputPassword.required = true;
registerInputPassword.minLength = 8;
registerInputPassword.title = "Use min 8 characters for the password";

const registerButton = document.createElement("button");
registerButton.innerText = "Register";

const registerLoginLink = document.createElement("a");
registerLoginLink.className = "loginLink";
registerLoginLink.innerText = "Log In";

registerLoginLink.onclick = function (event) {
  event.preventDefault();

  registerPage.remove();
  document.body.append(loginPage);
  document.body.className = "body-login";
};

registerPage.append(registerH1, registerLine, registerForm, registerLoginLink);
registerForm.append(
  registerDivName,
  registerDivEmail,
  registerDivPassword,
  registerButton
);
registerDivName.append(registerLabelName, registerInputName);
registerDivEmail.append(registerLabelEmail, registerInputEmail);
registerDivPassword.append(registerLabelPassword, registerInputPassword);

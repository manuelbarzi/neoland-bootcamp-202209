log("INFO", "Register Page");

var registerForm = document.createElement("form");
registerForm.className = 'container'

registerForm.onsubmit = function (event) {
  event.preventDefault();

 
    var name = registerUserInput.value
    var email = registerEmailInput.value
    var password = registerPasswordInput.value


  var result = registerUser(name, email, password)

  if (result instanceof Error) {
    alert(result.message)

    return
  }

  registerForm.reset();

  alert("User Registered");

  registerLoginLink.click();
};

var registerTitle = document.createElement("h2");
registerTitle.innerText = "Register";

var registerUserLabel = document.createElement("label");
registerUserLabel.htmlFor = "user-register";
registerUserLabel.classList.add("container__item--left");
registerUserLabel.innerText = "User";

var registerUserInput = document.createElement("input");
registerUserInput.type = "text";
registerUserInput.id = "user-register";
registerUserInput.placeholder = "User";
registerUserInput.pattern = '[a-zA-Z]{1,}'
registerUserInput.required = true
registerUserInput.oninvalid = function () {
  alert('Use characters from A to Z for names (min 1 character, and not numerics)')
}
registerUserInput.title = 'Use characters from A to Z for names (min 1 character, and not numerics)'

var registerEmailLabel = document.createElement("label");
registerEmailLabel.htmlFor = "email-register";
registerEmailLabel.classList.add("container__item--left");
registerEmailLabel.innerText = "Email";

var registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.id = "email-register";
registerEmailInput.placeholder = "Email";
registerEmailInput.required = true

var registerPasswordLabel = document.createElement("label");
registerPasswordLabel.htmlFor = "password-register";
registerPasswordLabel.classList.add("container__item--left");
registerPasswordLabel.innerText = "Password";

var registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.id = "password-register";
registerPasswordInput.placeholder = "Password";
// registerPasswordInput.minLength = 8
// TODO improve following regex to support also symbols ($,%, ...)
registerPasswordInput.pattern = '[A-Za-z0-9\S]{8,}'
registerPasswordInput.required = true
registerPasswordInput.title = 'Use min 8 characters for the password and no spaces'

var registerButton = document.createElement("button");
registerButton.classList = "";
registerButton.innerText = "Register";

registerForm.append(
  registerTitle,
  registerUserLabel,
  registerUserInput,
  registerEmailLabel,
  registerEmailInput,
  registerPasswordLabel,
  registerPasswordInput,
  registerButton
);

var registerLoginLink = document.createElement("a");
registerLoginLink.href = "";
registerLoginLink.classlist = "";
registerLoginLink.innerText = "Login";

registerLoginLink.onclick = function (event) {
  event.preventDefault();

  registerPage.remove();

  document.body.append(loginPage);
};

var registerPage = document.createElement("main");
registerPage.className = 'container  container--full'

registerPage.append(registerForm, registerLoginLink);

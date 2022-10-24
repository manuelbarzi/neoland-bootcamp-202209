log("INFO", "Register Page");

const registerForm = document.createElement("form");
registerForm.className = 'container'

registerForm.onsubmit = function (event) {
  event.preventDefault();

 
    const name = registerUserInput.value
    const email = registerEmailInput.value
    const password = registerPasswordInput.value

try {
  
  registerUser(name, email, password)

  registerForm.reset();

  alert("User Registered");

  registerLoginLink.click();

} catch (error) {

  alert(error.message)

  registerPasswordInput.value = ''
}
  
};

const registerTitle = document.createElement("h2");
registerTitle.innerText = "Register";

const registerUserLabel = document.createElement("label");
registerUserLabel.htmlFor = "user-register";
registerUserLabel.classList.add("container__item--left");
registerUserLabel.innerText = "User";

const registerUserInput = document.createElement("input");
registerUserInput.type = "text";
registerUserInput.id = "user-register";
registerUserInput.placeholder = "User";
registerUserInput.pattern = '[a-zA-Z]{1,}'
registerUserInput.required = true
registerUserInput.oninvalid = function () {
  alert('Use characters from A to Z for names (min 1 character, and not numerics)')
}
registerUserInput.title = 'Use characters from A to Z for names (min 1 character, and not numerics)'

const registerEmailLabel = document.createElement("label");
registerEmailLabel.htmlFor = "email-register";
registerEmailLabel.classList.add("container__item--left");
registerEmailLabel.innerText = "Email";

const registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.id = "email-register";
registerEmailInput.placeholder = "Email";
registerEmailInput.required = true

const registerPasswordLabel = document.createElement("label");
registerPasswordLabel.htmlFor = "password-register";
registerPasswordLabel.classList.add("container__item--left");
registerPasswordLabel.innerText = "Password";

const registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.id = "password-register";
registerPasswordInput.placeholder = "Password";
// registerPasswordInput.minLength = 8
// TODO improve following regex to support also symbols ($,%, ...)
registerPasswordInput.pattern = '[A-Za-z0-9\S]{8,}'
registerPasswordInput.required = true
registerPasswordInput.title = 'Use min 8 characters for the password and no spaces'

const registerButton = document.createElement("button");
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

const registerLoginLink = document.createElement("a");
registerLoginLink.href = "";
registerLoginLink.classlist = "";
registerLoginLink.innerText = "Login";

registerLoginLink.onclick = function (event) {
  event.preventDefault();

  registerPage.remove();

  document.body.append(loginPage);
};

const registerPage = document.createElement("main");
registerPage.className = 'container  container--full'

registerPage.append(registerForm, registerLoginLink);

log("INFO", "Login Page");

const loginForm = document.createElement("form");
loginForm.className = ("flex flex-col gap-y-2 rounded-xl shadow-2xl bg-[#cccab5] p-8");

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
loginTitle.className = 'flex justify-center text-[#ffffff] text-xl mb-3'

const loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "Email-login";
loginEmailLabel.className = ("");
loginEmailLabel.innerText = "Email";

const loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.id = "email-login";
loginEmailInput.placeholder = "Email";

const loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "pasword-login";
loginPasswordLabel.className = ("");
loginPasswordLabel.innerText = "Password";

const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.id = "password-login";
loginPasswordInput.placeholder = "Password";


const loginButton = document.createElement("button");
loginButton.className = "flex text-[#ffffff] justify-center";
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
loginRegisterLink.className = "";
loginRegisterLink.innerText = "Register";

loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  loginPage.remove();

  document.body.append(registerPage);
};

const loginPage = document.createElement("main");
loginPage.className = "flex flex-col items-center justify-center";

loginPage.append(loginForm, loginRegisterLink);

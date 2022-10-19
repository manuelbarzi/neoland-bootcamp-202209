const loginPage = document.createElement('div');
loginPage.className = 'loginContainer';

const loginForm = document.createElement('form');
loginForm.method = 'post';

loginForm.onsubmit = function (event) {
  event.preventDefault();

  const email = loginInputEmail.value;
  const password = loginInputPassword.value;

  try {
  const result = authenticateUser(email, password);

  user = result;

  loginForm.reset();

  loginPage.remove();
  homeUserNameText.innerText = user.name;

  clearTasksCards()

  renderTasksCards()

  document.body.className = 'body-home';
  document.body.append(homePage);
  } catch (error) {
    alert(error.message)

    loginInputPassword.value = ''
  }
};

const loginH1 = document.createElement('h1');
loginH1.innerText = 'LOG IN';

const loginLine = document.createElement('hr');

const loginDivInputEmail = document.createElement('div');
loginDivInputEmail.className = 'input', 'email';

const loginLabelEmail = document.createElement('label');
loginLabelEmail.htmlFor = 'loginemail';
loginLabelEmail.innerText = 'Email';

const loginInputEmail = document.createElement('input');
loginInputEmail.type = 'email';
loginInputEmail.name = 'email';
loginInputEmail.id = 'loginemail';
loginInputEmail.placeholder = 'input your email';

const loginDivInputPasword = document.createElement('div');
loginDivInputPasword.classList.add('input', 'password');

const loginLabelPassword = document.createElement('label');
loginLabelPassword.htmlFor = 'loginPassword';
loginLabelPassword.innerText = 'Password';

const loginInputPassword = document.createElement('input');
loginInputPassword.type = 'password';
loginInputPassword.name = 'password';
loginInputPassword.id = 'loginPassword';
loginInputPassword.placeholder = 'input your password';

const loginSubmitButton = document.createElement('button');
loginSubmitButton.className = 'btn';
loginSubmitButton.innerText = 'login';

const loginRegisterLink = document.createElement('a');
loginRegisterLink.className = 'regiterLink';
loginRegisterLink.innerText = 'Register';

// En este apartado agrupo los contenidos de cada contenedor con .append
loginPage.append(loginH1, loginLine, loginForm, loginRegisterLink);
loginForm.append(loginDivInputEmail, loginDivInputPasword, loginSubmitButton);
loginDivInputEmail.append(loginLabelEmail, loginInputEmail);
loginDivInputPasword.append(loginLabelPassword, loginInputPassword);
// ---------------------------------------------------------------------------------------
// document.body.append(loginPage);
// ---------------------------------------------------------------------------------------

// Explico la función que queremos ejecutar
loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  log('DEBUG', 'navigate to register');

  loginPage.remove();
  document.body.append(registerPage);
  document.body.className = 'body-register';
};

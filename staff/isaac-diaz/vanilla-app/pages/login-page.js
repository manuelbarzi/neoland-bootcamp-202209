// Apartado de Login

var loginForm = document.createElement('form')
loginForm.className = 'container'

loginForm.onsubmit = function (event){
   event.preventDefault()

   var email = loginInputEmail.value;
   var password = loginInputPassword.value;

   var result = authenticateUser(email, password);
   
   
   if (result instanceof Error){
      alert(result.message)

      return
   }

   user = result

 loginForm.reset()

 loginPage.remove()
 headerUserNameText.innerText = result.name
 document.body.append(homePage)
}

var saludo = document.createElement('h2');
saludo.innerText = 'Welcome!!';

var loginLabelEmail = document.createElement('label');
loginLabelEmail.htmlFor = 'login-email';
loginLabelEmail.className = 'container__item--left';
loginLabelEmail.innerText = 'E-mail';

var loginInputEmail = document.createElement('input');
loginInputEmail.type = 'email';
loginInputEmail.id = 'login-email';
loginInputEmail.placeholder = 'Input your E-mail'

var loginLabelPassword = document.createElement('label');
loginLabelPassword.htmlFor = 'login-password';
loginLabelPassword.className = 'container__item--left';
loginLabelPassword.innerText = 'Password';

var loginInputPassword = document.createElement('input');
loginInputPassword.type = 'password';
loginInputPassword.id = 'password';
loginInputPassword.placeholder = 'Input your password';

var loginButton = document.createElement('button');
loginButton.className = 'container__item.--right';
loginButton.innerText = 'Login';

var loginRegisterLink = document.createElement('a');
loginRegisterLink.href = '#';
loginRegisterLink.innerText = 'Register';

loginForm.append(saludo, loginLabelEmail, loginInputEmail, loginLabelPassword, loginInputPassword, loginButton);

loginRegisterLink.onclick = function (event) {
   event.preventDefault()
   loginPage.remove()
   document.body.append(registerPage)
}

var loginPage = document.createElement('main');
loginPage.className = 'container';
loginPage.append(loginForm, loginRegisterLink);


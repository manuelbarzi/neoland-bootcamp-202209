// Apartado de Login

const loginForm = document.createElement('form')
loginForm.className = 'flex flex-col gap-2 my-8'

loginForm.onsubmit = function (event) {
   event.preventDefault()

   const email = loginInputEmail.value;
   const password = loginInputPassword.value;

   try {
      user = authenticateUser(email, password);

      loginForm.reset()

      loginPage.remove()

      headerUserNameText.innerText = user.name

      clearTasksCards()

      renderTasksCards()

      document.body.append(homePage)
   } catch (error) {
      alert(error.message)

      loginInputPassword.value = ''
   }
}

const saludo = document.createElement('h2');
saludo.innerText = 'Lacasitos';
saludo.className = 'flex flex-col items-center text-black-400 bg-gray-200 rounded-xl'

const loginLabelEmail = document.createElement('label');
loginLabelEmail.htmlFor = 'login-email';
loginLabelEmail.className = 'text-black-600';
loginLabelEmail.innerText = 'E-mail';

const loginInputEmail = document.createElement('input');
loginInputEmail.type = 'email';
loginInputEmail.id = 'login-email';
loginInputEmail.placeholder = 'Input your E-mail'
loginInputEmail.className = 'p-2 border rounded-xl bg-gray-200'

const loginLabelPassword = document.createElement('label');
loginLabelPassword.htmlFor = 'login-password';
loginLabelPassword.className = '';
loginLabelPassword.innerText = 'Password';

const loginInputPassword = document.createElement('input');
loginInputPassword.type = 'password';
loginInputPassword.id = 'password';
loginInputPassword.placeholder = 'Input your password';
loginInputPassword.className = 'p-2 border rounded-xl bg-gray-200'

const loginButton = document.createElement('button');
loginButton.className = 'p-2 border rounded-xl bg-gray-400';
loginButton.innerText = 'Login';

const loginRegisterLink = document.createElement('a');
loginRegisterLink.className = 'underline p-2 border around border bg-blue-300'
loginRegisterLink.href = '';
loginRegisterLink.innerText = 'Register';

loginForm.append(saludo, loginLabelEmail, loginInputEmail, loginLabelPassword, loginInputPassword, loginButton);

loginRegisterLink.onclick = function (event) {
   event.preventDefault()

   loginPage.remove()

   document.body.append(registerPage)
}

const loginPage = document.createElement('main')
loginPage.className = 'flex flex-col items-center gap-2 bg-green-100 h-full'
loginPage.append(loginForm, loginRegisterLink)
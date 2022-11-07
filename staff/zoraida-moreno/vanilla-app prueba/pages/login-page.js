log('DEBUG', 'mount login')

var loginForm = document.createElement('form');
loginForm.className = 'container'

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginInputEmail.value
    var password = loginInputPassword.value

    var result = authenticateUser(email, password)
    

    if ( result instanceof Error) {
        alert(error.message)

        return
    }

    user = result

    loginForm.reset()

    loginPage.remove()
    headerNameText.innerText = user.name
    document.body.append(homePage)
}

var loginLabelEmail = document.createElement('label');
loginLabelEmail.classList.add('container__item--left');
loginLabelEmail.htmlFor = 'login-email';
loginLabelEmail.innerText = 'E-mail';

var loginInputEmail = document.createElement('input');
loginInputEmail.type = 'email';
loginInputEmail.id = 'login-email';
loginInputEmail.placeholder = 'Input your e-mail';

var loginLabelPassword = document.createElement('label');
loginLabelPassword.htmlFor = 'login-password';
loginLabelPassword.classList.add('container__item--left');
loginLabelPassword.innerText = 'Password';

var loginInputPassword = document.createElement('input');
loginInputPassword.type = 'password';
loginInputPassword.id = 'login-pasword';
loginInputPassword.placeholder = 'Input your password';

var loginButton = document.createElement('button');
loginButton.className = 'container__item--right';
loginButton.innerText = 'Login';

loginForm.append(loginLabelEmail, loginInputEmail, loginLabelPassword, loginInputPassword, loginButton);

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
loginRegisterLink.innerText = 'Register'

loginRegisterLink.onclick = function (event) {
    event.preventDefault();

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

var loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(loginForm, loginRegisterLink)
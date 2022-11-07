log('DEBUG', 'mount login')

const loginForm = document.createElement('form');
loginForm.className = 'flex flex-col gap-2'

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    const email = loginInputEmail.value
    const password = loginInputPassword.value

    try {
    user = authenticateUser(email, password)
    
    loginForm.reset()

    loginPage.remove()

    headerNameText.innerText = user.name

    clearTasksCards()

    renderTasksCards()

    document.body.append(homePage)
} catch(error) {
        alert(error.message)

        loginInputPassword.value = ''
    }    
}

const loginLabelEmail = document.createElement('label');
loginLabelEmail.className = 'container__item--left';
loginLabelEmail.htmlFor = 'login-email';
loginLabelEmail.innerText = 'E-mail';

const loginInputEmail = document.createElement('input');
loginInputEmail.type = 'email';
loginInputEmail.id = 'login-email';
loginInputEmail.placeholder = 'Input your e-mail';
loginInputEmail.className = 'border-b border-black'

const loginLabelPassword = document.createElement('label');
loginLabelPassword.htmlFor = 'login-password';
loginLabelPassword.className = 'container__item--left';
loginLabelPassword.innerText = 'Password';

const loginInputPassword = document.createElement('input');
loginInputPassword.type = 'password';
loginInputPassword.id = 'login-pasword';
loginInputPassword.placeholder = 'Input your password';
loginInputPassword.className = 'border-b border-black'

const loginButton = document.createElement('button');
loginButton.className = 'p-2 border rounded-xl hover:animate-spin';
loginButton.innerText = 'Login';

loginForm.append(loginLabelEmail, loginInputEmail, loginLabelPassword, loginInputPassword, loginButton);

const loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
loginRegisterLink.innerText = 'Register'
loginRegisterLink.className = 'underline'

loginRegisterLink.onclick = function (event) {
    event.preventDefault();

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

const loginPage = document.createElement('main')
loginPage.className = 'flex flex-col items.center gap-2'
loginPage.append(loginForm, loginRegisterLink)
const loginDivContenedor = document.createElement('div');
loginDivContenedor.className = 'container reset'


const loginForm = document.createElement('form');
loginForm.className = 'container borde-login';
loginForm.onsubmit = function (event) {
    event.preventDefault()


    const email = loginEmailInput.value;
    const password = loginPasswordInput.value

    try {
        user =  authenticateUser(email, password)

        clearTaskCard()
        renderTasksCards()
        loginForm.reset()
        tasksTodoForm.reset()
        loginDivContenedor.remove()
        userNameText.innerText = user.name
        homeNav.append(homeLinkHome, menuButton)
        document.body.append(homeContenedor)

        const tasksRender = retrieveTasks(user.email)

    } catch (error) {
        alert(error.message)

        loginPasswordInput.value = ''
    }

}

const loginH2 = document.createElement('h2');
loginH2.innerText = 'Log in'



const loginEmailLabel = document.createElement('label');
loginEmailLabel.innerText = 'E-mail';
loginEmailLabel.htmlFor = 'login-email';
loginEmailLabel.className = 'container__item-left';


const loginEmailInput = document.createElement('input');
loginEmailInput.className = 'input-form'
loginEmailInput.type = 'email';
loginEmailInput.placeholder = 'Input your E-mail';
loginEmailInput.name = 'login-email';
loginEmailInput.id = 'login-email';

const loginPasswordLabel = document.createElement('label');
loginPasswordLabel.innerText = 'Password';
loginPasswordLabel.htmlFor = 'login-password';
loginPasswordLabel.className = 'container__item-left';

const loginPasswordInput = document.createElement('input');
loginPasswordInput.className = 'input-form'
loginPasswordInput.type = 'password';
loginPasswordInput.placeholder = 'Input you password';
loginPasswordInput.name = 'login-password';
loginPasswordInput.id = 'login-password'

const LoginButton = document.createElement('button');
LoginButton.innerText = 'Log in'
LoginButton.className = 'container__item-right'



const hr = document.createElement('hr')

const divRegister = document.createElement('div');
divRegister.className = 'div-register'

const loginParraf = document.createElement('p');
loginParraf.innerText = 'Didnt have an account?';

const loginLinkRegister = document.createElement('a');
loginLinkRegister.href = '';
loginLinkRegister.innerText = 'Register';
loginLinkRegister.className = 'register-text'
loginLinkRegister.onclick = function (event) {
    event.preventDefault()

    loginDivContenedor.remove()
    document.body.append(registerDivContenedor)
}


divRegister.append(loginParraf, loginLinkRegister)
loginForm.append(loginH2, loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, LoginButton, hr, divRegister)
loginDivContenedor.append(loginForm)

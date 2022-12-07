log('DEBUG', 'mount login')

const loginForm = document.createElement('form')
loginForm.className = 'container'

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    const email = loginEmailInput.value
    const password = loginPasswordInput.value

    try {
        user = authenticateUser(email, password)

        loginForm.reset()

        loginPage.remove()
        
        headerUserNameText.innerText = user.name
    
        clearTasksCards()
    
        renderTasksCards()
    
        document.body.append(homePage)    
    } catch(error) {
        alert(error.message)

        loginPasswordInput.value = ''
    }
}

const loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'login-email'
loginEmailLabel.className = 'container__item--left'
loginEmailLabel.innerText = 'E-mail'

const loginEmailInput = document.createElement('input')
loginEmailInput.type = 'email'
loginEmailInput.id = 'login-email'
loginEmailInput.placeholder = 'input your e-mail'

const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'login-password'
loginPasswordLabel.className = 'container__item--left'
loginPasswordLabel.innerText = 'Password'

const loginPasswordInput = document.createElement('input')
loginPasswordInput.type = 'password'
loginPasswordInput.id = 'login-password'
loginPasswordInput.placeholder = 'input your password'

const loginSubmitButton = document.createElement('button')
loginSubmitButton.className = 'container__item--right'
loginSubmitButton.innerText = 'Login'

loginForm.append(loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, loginSubmitButton)

const loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ""
loginRegisterLink.innerText = 'Register'

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

const loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(loginForm, loginRegisterLink)
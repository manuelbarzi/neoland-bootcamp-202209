log('DEBUG', 'mount login')

var loginForm = document.createElement('form')
loginForm.className = 'container'

function authenticateUser(email, password) {
    // TODO ok -> null, ko -> error

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            if (user.password === password)
                return user
            else
                return new Error('wrong password')
        }
    }

    return new Error('user not registered')
}

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginEmailInput.value
    var password = loginPasswordInput.value

    var result = authenticateUser(email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    loginForm.reset()

    loginPage.remove()
    homeUserNameText.innerText = result.name
    document.body.append(homePage)
}

var loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'login-email'
loginEmailLabel.className = 'container__item--left'
loginEmailLabel.innerText = 'E-mail'

var loginEmailInput = document.createElement('input')
loginEmailInput.type = 'email'
loginEmailInput.id = 'login-email'
loginEmailInput.placeholder = 'input your e-mail'

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'login-password'
loginPasswordLabel.className = 'container__item--left'
loginPasswordLabel.innerText = 'Password'

var loginPasswordInput = document.createElement('input')
loginPasswordInput.type = 'password'
loginPasswordInput.id = 'login-password'
loginPasswordInput.placeholder = 'input your password'

var loginSubmitButton = document.createElement('button')
loginSubmitButton.className = 'container__item--right'
loginSubmitButton.innerText = 'Login'

loginForm.append(loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, loginSubmitButton)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ""
loginRegisterLink.innerText = 'Register'

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

var loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(loginForm, loginRegisterLink)
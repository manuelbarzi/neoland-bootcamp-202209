log('INFO', 'start app')

var users = [
    { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' },
    { name: 'Mickey Mouse', email: 'mickey@mouse.com', password: '123123123' },
    { name: 'Wendy Darling', email: 'wendy@darling.com', password: '123123123' },
]

// DONE inject login with js

log('DEBUG', 'mount login')

var loginForm = document.createElement('form')
loginForm.className = 'container'

// TODO implement login submit

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginEmailInput.value
    var password = loginPasswordInput.value

    // TODO check user in db

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            if (user.password === password) {
                loginForm.reset()

                loginPage.remove()
                homeUserNameText.innerText = user.name
                document.body.append(homePage)
            } else
                alert('wrong password')

            return
        }
    }

    alert('user not registered')
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

// DONE inject register with js

log('DEBUG', 'mount register')

var registerForm = document.createElement('form')
registerForm.className = 'container'

// DONE implement register submit

registerForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit register')

    var email = registerEmailInput.value

    // DONE check user in db

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            alert('ERROR user already exists')

            return
        }
    }

    var user = {
        name: registerNameInput.value,
        email: email,
        password: registerPasswordInput.value
    }

    users.push(user)

    registerForm.reset()

    alert('user registered')

    registerLoginLink.click()
}

var registerNameLabel = document.createElement('label')
registerNameLabel.htmlFor = 'register-name'
registerNameLabel.className = 'container__item--left'
registerNameLabel.innerText = 'Name'

var registerNameInput = document.createElement('input')
registerNameInput.type = 'name'
registerNameInput.id = 'register-name'
registerNameInput.placeholder = 'input your name'

var registerEmailLabel = document.createElement('label')
registerEmailLabel.htmlFor = 'register-email'
registerEmailLabel.className = 'container__item--left'
registerEmailLabel.innerText = 'E-mail'

var registerEmailInput = document.createElement('input')
registerEmailInput.type = 'email'
registerEmailInput.id = 'register-email'
registerEmailInput.placeholder = 'input your e-mail'

var registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'register-password'
registerPasswordLabel.className = 'container__item--left'
registerPasswordLabel.innerText = 'Password'

var registerPasswordInput = document.createElement('input')
registerPasswordInput.type = 'password'
registerPasswordInput.id = 'register-password'
registerPasswordInput.placeholder = 'input your password'

var registerSubmitButton = document.createElement('button')
registerSubmitButton.className = 'container__item--right'
registerSubmitButton.innerText = 'Register'

registerForm.append(registerNameLabel, registerNameInput, registerEmailLabel, registerEmailInput, registerPasswordLabel, registerPasswordInput, registerSubmitButton)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ""
registerLoginLink.innerText = 'Login'

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to login')

    registerPage.remove()
    document.body.append(loginPage)
}

var registerPage = document.createElement('main')
registerPage.className = 'container'
registerPage.append(registerForm, registerLoginLink)

// document.body.append(registerPage)

// DONE inject home with 

log('DEBUG', 'mount home')

var homeHeader = document.createElement('header')
var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
var homeHeaderImage = document.createElement('img')
homeHeaderImage.src = 'https://fakeimg.pl/50x25/?text=hola%20mundo&font=lobster'
var homeUserNameText = document.createElement('span')
homeUserNameText.innerText = 'User Name'
homeUserNameText.className = 'container container--full-height container--padding-h-s'

homeHeaderLink.append(homeHeaderImage)
homeHeader.append(homeHeaderLink, homeUserNameText)
homeHeader.className = 'container container--row container--full-width container--content-space-between'

var homePage = document.createElement('main')
homePage.className = 'container container--full container--content-start'

homePage.append(homeHeader)

document.body.append(loginPage)
// document.body.append(homePage)
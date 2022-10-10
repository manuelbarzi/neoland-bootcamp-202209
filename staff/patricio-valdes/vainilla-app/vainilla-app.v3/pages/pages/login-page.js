log('DEBUG', 'mount login')

// creacion de formulario y clase

var loginForm = document.createElement('form')
loginForm.className = 'container'

// evento click boton

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginEmailInput.value
    var password = loginPasswordInput.value

   // funcion logica
   
    var result = authenticateUser(email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    user = result

// reseteo de pagina login

    loginForm.reset()

    loginPage.remove()
    homeUserNameText.innerText = user.name
    document.body.append(homePage)
}

//creacion de atributos de formulario

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

//display

loginForm.append(loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, loginSubmitButton)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ""
loginRegisterLink.innerText = 'Register'

// cambio a pagina register - reset y cierre

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginPage.remove()

// display a register

    document.body.append(registerPage)
}



var loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(loginForm, loginRegisterLink)
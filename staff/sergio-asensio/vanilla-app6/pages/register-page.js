log('DEBUG', 'mount register')

var registerForm = document.createElement('form')
registerForm.className = 'container'

registerForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit register')

    var name = registerNameInput.value
    var email = registerEmailInput.value
    var password = registerPasswordInput.value

    const result = registerUser(name, email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }
        
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
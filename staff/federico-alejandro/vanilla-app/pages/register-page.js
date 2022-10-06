log('DEBUG', 'mount register')

var registerPage = document.createElement('main')
registerPage.className = 'container container--register'

registerPage.onsubmit = function(event) {
    event.preventDefault();
    
    log('DEBUG', 'submit register')

    var name = registerName.value;
    var email =  registerEmail.value;
    var password = registerPassword.value

    const result = registerUser(name, email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    registerForm.reset()

    alert('user registered')

    registerLoginLink.click()
}

    


var registerLabelName = document.createElement('label')
registerLabelName.htmlFor = 'name'
registerLabelName.className = 'container__item--left'
registerLabelName.innerText = 'Name'
var registerName = document.createElement('input')
registerName.type = 'name'
registerName.name = 'name'
registerName.id = 'name'
registerName.placeholder = 'input your name'

var registerEmail = document.createElement('input')
var registerLabelEmail = document.createElement('label')
registerLabelEmail.htmlFor = 'email'
registerLabelEmail.className = 'container__item--left'
registerLabelEmail.innerText = 'E-mail'
registerEmail.type = 'email'
registerEmail.name = 'email'
registerEmail.id = 'email'
registerEmail.placeholder = 'input your email'

var registerLabelPassword = document.createElement('label')
var registerPassword = document.createElement('input')
registerLabelPassword.className = 'container__item--left'
registerLabelPassword.htmlFor = 'Password'
registerLabelPassword.innerText = 'Password'
registerPassword.type = 'password'
registerPassword.name = ''
registerPassword.id = 'password'
registerPassword.placeholder = 'input your password'

var registerButton = document.createElement('button')
registerButton.innerText = 'Register'

var registerLoginLink = document.createElement ('a')
registerLoginLink.href =""
registerLoginLink.innerText = 'login'
registerLoginLink.className = 'login--link'
registerLoginLink.onclick = function(event) {
    event.preventDefault()

    log('DEBUG', 'navigate to login')

    registerPage.remove()
    document.body.append(loginPage)
 }

var registerForm = document.createElement('form')
registerForm.className = 'container'
registerForm.append(registerLabelName, registerName, registerLabelEmail, registerEmail, registerLabelPassword, registerPassword, registerButton, registerLoginLink)
registerPage.append(registerForm)


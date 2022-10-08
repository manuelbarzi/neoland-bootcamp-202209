log('DEBUG', 'mount register')

var registerForm = document.createElement ('form')
registerForm.className = 'container'

registerForm.onsubmit = function (event) {
    event.preventDefault()

        log('DEBUG', 'submit register')

        var name = inputRegisterName.value
        var email = inputRegisterEmail.value
        var password = inputRegisterPassword.value
    
const result = registerUser(name, email, password)

if (result instanceof Error) {
    alert( result.message)

    return
}

    registerForm.reset()

    alert('user registered')

    registerLoginLink.click()
}

var labelRegisterName = document.createElement('label')
labelRegisterName.htmlFor = 'register-name'
labelRegisterName.className = 'container__item--left'
labelRegisterName.innerText = 'Name'

var inputRegisterName = document.createElement('input')
inputRegisterName.type = 'name'
inputRegisterName.id = 'register-name'
inputRegisterName.placeholder = 'Input your name'
inputRegisterName.pattern = '[a-zA]{1,}'
inputRegisterName.required = true
inputRegisterName.oninvalid = function() {
    alert('Use characters from A to Z for names (min 1 character, and not numerics)')
}


var labelRegisterEmail = document.createElement('label');
labelRegisterEmail.className = 'container__item--left';
labelRegisterEmail.htmlFor = 'register-email';
labelRegisterEmail.innerText = 'E-mail';

var inputRegisterEmail = document.createElement('input');
inputRegisterEmail.type = 'email';
inputRegisterEmail.id = 'register-email';
inputRegisterEmail.placeholder = 'Input your email';
inputRegisterEmail.required = true

var labelRegisterPassword = document.createElement('label');
labelRegisterPassword.htmlFor = 'register-password';
labelRegisterPassword.className = 'container__item--left';
labelRegisterPassword.innerText = 'Password';


var inputRegisterPassword = document.createElement('input');
inputRegisterPassword.type = 'password';
inputRegisterPassword.id = 'register-password';
inputRegisterPassword.placeholder = 'Input your password';
//registerPasswordInput.minLength = 8
// TODO improve following regex to support also symbols ($, %, ...)
inputRegisterPassword.pattern = '[A-Za-z0-9\S]{8,}'
inputRegisterPassword.required = true
inputRegisterPassword.title = 'Use min 8 characters for the password and no spaces'

var registerButton = document.createElement('button')
registerButton.className = 'container__item--right'
registerButton.innerText = 'Register'

registerForm.append(labelRegisterName, inputRegisterName, labelRegisterEmail, inputRegisterEmail, labelRegisterPassword, inputRegisterPassword, registerButton)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
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
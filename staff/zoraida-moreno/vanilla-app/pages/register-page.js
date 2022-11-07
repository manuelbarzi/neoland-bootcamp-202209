log('DEBUG', 'mount register')

const registerForm = document.createElement ('form')
registerForm.className = 'flex flex-col gap2'

registerForm.onsubmit = function (event) {
    event.preventDefault()

        log('DEBUG', 'submit register')

        const name = inputRegisterName.value
        const email = inputRegisterEmail.value
        const password = inputRegisterPassword.value
    
    try {
        registerUser(name, email, password)

        registerForm.reset()

        alert('user registered')

        registerLoginLink.click()
    } catch (error) {
        alert(error.message)

        registerPasswordInput.value = ''
        }
}

const labelRegisterName = document.createElement('label')
labelRegisterName.htmlFor = 'register-name'
labelRegisterName.className = 'container__item--left'
labelRegisterName.innerText = 'Name'

const inputRegisterName = document.createElement('input')
inputRegisterName.type = 'name'
inputRegisterName.id = 'register-name'
inputRegisterName.placeholder = 'Input your name'
//TODO refine this regex as it doesn't accept a compose name
//inputRegisterName.pattern = '[a-zA]{1,}'
inputRegisterName.required = true
inputRegisterName.className = 'border-b border-black'
inputRegisterName.oninvalid = function() {
    alert('Use characters from A to Z for names (min 1 character, and not numerics)')
}


const labelRegisterEmail = document.createElement('label');
labelRegisterEmail.className = 'container__item--left';
labelRegisterEmail.htmlFor = 'register-email';
labelRegisterEmail.innerText = 'E-mail';

const inputRegisterEmail = document.createElement('input');
inputRegisterEmail.type = 'email';
inputRegisterEmail.id = 'register-email';
inputRegisterEmail.placeholder = 'Input your email';
inputRegisterEmail.required = true
inputRegisterEmail.className = 'border-b border-black'

const labelRegisterPassword = document.createElement('label');
labelRegisterPassword.htmlFor = 'register-password';
labelRegisterPassword.className = 'container__item--left';
labelRegisterPassword.innerText = 'Password';

const inputRegisterPassword = document.createElement('input');
inputRegisterPassword.type = 'password';
inputRegisterPassword.id = 'register-password';
inputRegisterPassword.placeholder = 'Input your password';
//registerPasswordInput.minLength = 8
// TODO improve following regex to support also symbols ($, %, ...)
inputRegisterPassword.pattern = '[A-Za-z0-9\S]{8,}'
inputRegisterPassword.required = true
inputRegisterPassword.title = 'Use min 8 characters for the password and no spaces'
inputRegisterPassword.className = 'border-b border-black'

const registerButton = document.createElement('button')
registerButton.className = 'p-2 border rounded-xl hover:animate-spin'
registerButton.innerText = 'Register'

registerForm.append(labelRegisterName, inputRegisterName, labelRegisterEmail, inputRegisterEmail, labelRegisterPassword, inputRegisterPassword, registerButton)

const registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerText = 'Login'
registerLoginLink.className = 'underline'

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to login')

    registerPage.remove()
    document.body.append(loginPage)
}

const registerPage = document.createElement('main')
registerPage.className = 'flex flex-col items.center gap-2'
registerPage.append(registerForm, registerLoginLink)
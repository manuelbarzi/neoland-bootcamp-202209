log('DEBUG', 'mount register')

var registerForm = document.createElement('form')
registerForm.className = 'grid gap-4 grid-cols-4 grid-rows-4 '

registerForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit register')

    var name = registerNameInput.value
    var email = registerEmailInput.value
    var password = registerPasswordInput.value

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

var registerNameLabel = document.createElement('label')
registerNameLabel.htmlFor = 'register-name'
registerNameLabel.className = 'text-center font-bold text-cyan-900'
registerNameLabel.innerText = 'Name'

var registerNameInput = document.createElement('input')
registerNameInput.type = 'name'
registerNameInput.id = 'register-name'
registerNameInput.className ='focus:outline-0'
registerNameInput.placeholder = 'Input your name'
// TODO refine this regex as it doesn't accept a composed name
// registerNameInput.pattern = '[a-zA-Z]{1,}'
registerNameInput.required = true
registerNameInput.oninvalid = function () {
    alert('Use characters from A to Z for names (min 1 character, and not numerics)')
}

var registerEmailLabel = document.createElement('label')
registerEmailLabel.htmlFor = 'register-email'
registerEmailLabel.className = 'text-center font-bold text-cyan-900'
registerEmailLabel.innerText = 'E-mail'

var registerEmailInput = document.createElement('input')
registerEmailInput.type = 'email'
registerEmailInput.id = 'register-email'
registerEmailInput.placeholder = 'Input your e-mail'
registerEmailInput.className = 'focus:outline-0'
registerEmailInput.required = true

var registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'register-password'
registerPasswordLabel.className = 'font-bold text-cyan-900 text-center col-star-2 col-end-3'
registerPasswordLabel.innerText = 'Password'

var registerPasswordInput = document.createElement('input')
registerPasswordInput.type = 'password'
registerPasswordInput.id = 'register-password'
registerPasswordInput.className= 'focus:outline-0'
registerPasswordInput.placeholder = 'Input your password'
//registerPasswordInput.minLength = 8
// TODO improve following regex to support also symbols ($, %, ...)
registerPasswordInput.pattern = '[A-Za-z0-9\S]{8,}'
registerPasswordInput.required = true
registerPasswordInput.title = 'Use min 8 characters for the password and no spaces'

var registerSubmitButton = document.createElement('button')
registerSubmitButton.className = 'row-start-3 row-end-4 col-start-2 col-end-4 bg-cyan-400 hover:bg-cyan-00 py-1 px-4 font-bold text-gray-100 rounded-md ml-3 hover:bg-blue-600'
registerSubmitButton.innerText = 'Register'

registerForm.append(registerNameLabel, registerNameInput, registerEmailLabel, registerEmailInput, registerPasswordLabel, registerPasswordInput, registerSubmitButton)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ""
registerLoginLink.className='  text-rose-900 font-bold underline bg-color-red block items-center mt-6 text-center'
registerLoginLink.innerText = 'Login'

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to login')

    registerPage.remove()
    document.body.append(loginPage)
}

var registerPage = document.createElement('main')
registerPage.className = 'h-screen flex flex-col justify-center items-center'
registerPage.append(registerForm, registerLoginLink)
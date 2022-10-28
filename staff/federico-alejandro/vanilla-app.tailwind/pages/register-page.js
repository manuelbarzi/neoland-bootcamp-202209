log('DEBUG', 'mount register')

var registerPage = document.createElement('main')
registerPage.className = 'flex flex-col gap-6 w-60  bg-indigo-600 rounded-lg h-80 shadow-2xl shadow-gray-900'

registerPage.onsubmit = function(event) {
    event.preventDefault();
    
    log('DEBUG', 'submit register')

    var name = registerName.value
    var email =  registerEmail.value
    var password = registerPassword.value

    try {
        registerUser(name, email, password)
    
        registerForm.reset()

        alert('user registered')

        registerLoginLink.click()

    } catch (error) {
        alert(error.message)

        registerPassword.value = ''
    }
   
    //if (result instanceof Error) {
        //alert(result.message)
}

var registerLabelName = document.createElement('label')
registerLabelName.htmlFor = 'name'
registerLabelName.className = ' font-bold text-white italic'
registerLabelName.innerText = 'Name'
var registerName = document.createElement('input')
registerName.className = 'border-b border-black rounded-md'
registerName.type = 'name'
registerName.name = 'name'
registerName.id = 'name'
registerName.placeholder = ' Input your name'
registerName.pattern = '[A-Za-z]{1,}' 
registerName.requierd = true
registerName.oninvalid = function() {
    alert('Use characters from A to Z for names (min 1 character, and not numerics')
}


var registerLabelEmail = document.createElement('label')
var registerEmail = document.createElement('input')
registerLabelEmail.htmlFor = 'email'
registerLabelEmail.className = 'font-bold text-white italic justify-start'
registerLabelEmail.innerText = 'E-mail'
registerEmail.type = 'email'
registerEmail.name = 'email'
registerEmail.id = 'email'
registerEmail.placeholder = ' Input your email'
registerEmail.required = true
registerEmail.className = 'border-b border-black rounded-md'

var registerLabelPassword = document.createElement('label')
var registerPassword = document.createElement('input')
registerLabelPassword.className = 'font-bold text-white italic'
registerLabelPassword.htmlFor = 'Password'
registerLabelPassword.innerText = 'Password'
registerPassword.type = 'password'
registerPassword.name = ''
registerPassword.id = 'password'
registerPassword.placeholder = ' Input your password'
registerPassword.className = 'border-b border-black rounded-md '
//registerPassword.minLength = 8
// TODO improve following regex to support also symbols ($, %,..)
registerPassword.pattern = '[A-Za-z0-9\S]{8,}'
registerPassword.required = true
registerPassword.title = 'Use min 8 characters for the password and no spaces'


var registerButton = document.createElement('button')
registerButton.innerText = 'Register'
registerButton.className = 'font-bold text-white italic'

var registerLoginLink = document.createElement ('a')
registerLoginLink.href =""
registerLoginLink.innerText = 'login'
registerLoginLink.className = 'login--link font-bold text-white italic'

registerLoginLink.onclick = function(event) {
    event.preventDefault()

    log('DEBUG', 'navigate to login')

    registerPage.remove()
    document.body.append(loginPage)
 }

var registerForm = document.createElement('form')
registerForm.className = 'flex flex-col items-center py-1 gap-4 border-5 border-stone-900 h-96'
registerForm.append(registerLabelName, registerName, registerLabelEmail, registerEmail, registerLabelPassword, registerPassword, registerButton, registerLoginLink)
registerPage.append(registerForm)


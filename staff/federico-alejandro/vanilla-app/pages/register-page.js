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
  //if (typeof name !== 'string') return new Error('Name is not a string')
  //if (name.length <2) return new Error('name length is less than 1') 
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
registerName.pattern = '[A-Za-z]{1,}' 
registerName.requierd = true
registerName.oninvalid = function() {
    alert('Use characters from A to Z for names (min 1 character, and not numerics')
}


var registerLabelEmail = document.createElement('label')
var registerEmail = document.createElement('input')
registerLabelEmail.htmlFor = 'email'
registerLabelEmail.className = 'container__item--left'
registerLabelEmail.innerText = 'E-mail'
registerEmail.type = 'email'
registerEmail.name = 'email'
registerEmail.id = 'email'
registerEmail.placeholder = 'input your email'
registerEmail.required = true

var registerLabelPassword = document.createElement('label')
var registerPassword = document.createElement('input')
registerLabelPassword.className = 'container__item--left'
registerLabelPassword.htmlFor = 'Password'
registerLabelPassword.innerText = 'Password'
registerPassword.type = 'password'
registerPassword.name = ''
registerPassword.id = 'password'
registerPassword.placeholder = 'input your password'
//registerPassword.minLength = 8
// TODO improve following regex to support also symbols ($, %,..)
registerPassword.pattern = '[A-Za-z0-9\S]{8,}'
registerPassword.required = true
registerPassword.title = 'Use min 8 characters for the password and no spaces'

var registerPhoneNumberLabel = document.createElement('label')
var registerPhoneNumber = document.createElement('input')
registerPhoneNumberLabel.className = 'container__item--left'
registerPhoneNumberLabel.htmlFor = 'Phone Number'
registerPhoneNumberLabel.innerText = 'Phone'
registerPhoneNumber.type = 'Phone Number'
registerPhoneNumber.name = ''
registerPhoneNumber.id ='Phone'
registerPhoneNumber.placeholder = 'Ej. +34668899999'
registerPhoneNumber.required = true
registerPhoneNumber.pattern = '\+\d{2,3}\s\d{9}'//esta bien??

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
registerForm.append(registerLabelName, registerName, registerLabelEmail, registerEmail, registerLabelPassword, registerPassword, registerPhoneNumberLabel, registerPhoneNumber, registerButton, registerLoginLink)
registerPage.append(registerForm)


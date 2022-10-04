var link = document.createElement('link')
link.rel="stylesheet"
link.href="style.css"
document.head.append(link)

document.body.className = 'container'

var nombre = document.createElement('input')
var labelName = document.createElement('label')
labelName.htmlFor = 'name'
labelName.className = 'container__item--left'
labelName.innerText = 'Name'
nombre.type = 'text'
nombre.name = 'name'
nombre.id = 'name'
nombre.placeholder = 'input your name'

var email = document.createElement('input')
var labelEmail = document.createElement('label')
labelEmail.htmlFor = 'email'
labelEmail.className = 'container__item--left'
labelEmail.innerText = 'E-mail'
email.type = 'email'
email.name = 'email'
email.id = 'email'
email.placeholder = 'input your email'

var labelPassword = document.createElement('label')
var password = document.createElement('input')
labelPassword.className = 'container__item--left'
labelPassword.htmlFor = 'Password'
labelPassword.innerText = 'Password'
password.type = 'password'
password.name = ''
password.id = 'password'
password.placeholder = 'input your password'

var button = document.createElement('button')
button.innerText = 'Register'



var form = document.createElement('form')
form.append(labelName, nombre, labelEmail, email, labelPassword, password, button)
document.body.append(form)
form.className = 'container'

var link = document.createElement ('link')
link.rel="stylesheet"
link.href="style.css"
document.head.append(link)

document.body.className ='container'


var h1 = document.createElement('h1')
h1.innerHTML='HOLA!'
document.body.append(h1)


var email = document.createElement('input')
var labelEmail = document.createElement('label')
labelEmail.htmlFor = 'email'
labelEmail.className= 'container__item--left'
labelEmail.innerText = "E-mail"
email.type = 'email'
email.name = 'email'
email.id = 'email'
email.placeholder = 'input your email'

var password = document.createElement ('input')
var labelPassword = document.createElement('label')
labelPassword.htmlFor = 'password'
labelPassword.innerText = "Password"
labelPassword.className ='container__item--left'
password.type = 'password'
password.id = 'password'
password.name = ''
password.placeholder = 'input you password'



var button = document.createElement('button')
button.innerText = 'login'





var form = document.createElement('form')
form.append(labelEmail, email, labelPassword, password, button)
document.body.append(form)
form.className='container'

var anchor = document.createElement('a')
anchor.href = "register.html"
anchor.innerText = "Register"

document.body.append(anchor)
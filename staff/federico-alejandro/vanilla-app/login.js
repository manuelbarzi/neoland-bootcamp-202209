log('FATAL', 'BOOM')


var link = document.createElement ('link')
link.rel="stylesheet"
link.href="style.css"
document.head.append(link)

document.body.className ='container'


var h1 = document.createElement('h1')
h1.innerHTML='HOLA!'
document.body.append(h1)


var loginEmail = document.createElement('input')
var loginLabelEmail = document.createElement('label')
loginLabelEmail.htmlFor = 'email'
loginLabelEmail.className= 'container__item--left'
loginLabelEmail.innerText = "E-mail"
loginEmail.type = 'email'
loginEmail.name = 'email'
loginEmail.id = 'email'
loginEmail.placeholder = 'input your email'

var loginPassword = document.createElement ('input')
var loginLabelPassword = document.createElement('label')
loginLabelPassword.htmlFor = 'password'
loginLabelPassword.innerText = "Password"
loginLabelPassword.className ='container__item--left'
loginPassword.type = 'password'
loginPassword.id = 'password'
loginPassword.name = ''
loginPassword.placeholder = 'input you password'

var loginButton = document.createElement('button')
loginButton.innerText = 'login'


var anchor = document.createElement('a')
anchor.href = "register.html"
anchor.innerText = "Register"

loginRegisterLink.onclik = function(event) {
   event.preventDefault()
   log('DEBUG', 'navigate to regisrer')
   loginPage.remove()
   document.body.append(registerPage)
}

/*var loginPage = document.createElement ('main')
loginPage.className = 'container'
loginPage.append(loginForm, loginRegisterLink)*/


  
/*LOGINREGISTERLINK.ONCLICK = FUNTION {
    event.preventDefault ()
    log('DEBUG', navigate to register)
    loginpage.remove()
    document.body.append(loginPage o Registerpage) pasar de una pagina a otra 
}*/





var form = document.createElement('form')
form.append(loginLabelEmail, loginEmail, loginLabelPassword, loginPassword, button)
document.body.append(form)
form.className='container'

document.body.append(anchor)
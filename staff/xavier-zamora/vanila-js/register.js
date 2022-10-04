//selector var
var body = document.querySelector('body')
var form = document.createElement('form')
var a = document.createElement('main')
var email = document.createElement('input')
var password = document.createElement('input')
var password2 = document.createElement('input')
var button = document.createElement('button')

//atributes
email.type = "email"
email.required = "true"
email.className = "Email"

password.type = "password"
password.required = "true"

password2.type = "password"
password2.required = "true"

button.textContent = "SEND"

//insert 
body.appendChild(a)
a.appendChild(form)
form.innerHTML = "<h2>REGISTER</h2>"
form.appendChild(email)
form.appendChild(password)
form.appendChild(password2)
form.appendChild(button)

//placeholders
email.placeholder = "Insert Email"
password.placeholder = "Insert Password"
password2.placeholder = "Repeat your password"

//styles
body.style.height = "100%"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.backgroundImage = "url('https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center center"
body.style.backgroundSize = "cover"

form.style.display = "flex"
form.style.alignItems = "center"
form.style.paddingTop = "40px"
form.style.flexDirection = "column"
form.style.height = "20rem"

button.style.margin = "1.5rem"
email.style.margin = "0.3rem"
password.style.margin = "0.3rem"
password2.style.margin = "0.3rem"

a.style.border = "6px solid rgba(0,255,0,1)"
a.style.borderRadius = "5%"
a.style.backgroundColor = "rgba(17, 132, 0, 1)"
a.style.height = "20rem"
a.style.width = "18rem"
a.style.boxShadow = "0.6rem 0.6rem  62.5rem 1.2rem green"

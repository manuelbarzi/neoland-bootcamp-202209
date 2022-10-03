//selector var
var body = document.querySelector('body')
var form = document.querySelector('form')

var form = document.createElement('form')
var email = document.createElement('input')
email.placeholder = "insert email"
var password = document.createElement('input')
password.placeholder = "insert password"
var button = document.createElement('button')
button.textContent = "SEND"
var a = document.createElement('div')

//atributes
email.type = "text"
password.type = "password"
email.required = "true"
password.required = "true"
email.style.margin = "10px"
form.action = "index.html"
form.method = "post"

//insert
body.appendChild(a)
a.appendChild(form)
form.innerHTML = "<h2>LOG IN</h2>"
form.appendChild(email)
form.appendChild(password)
form.appendChild(button)

body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "60rem"
body.style.backgroundImage = "url('https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center center"
body.style.backgroundSize = "cover"

a.style.display = "flex"
a.style.justifyContent = "center"
a.style.alignItems = "center"
a.style.backgroundColor = "white"
a.style.height = "20rem"
a.style.width = "18rem"
a.style.boxShadow = "10px 10px 1000px 20px green"

form.style.display = "flex"
form.style.flexDirection = "column"
form.style.alignItems = "center"
button.style.margin = "1.25rem"

a.style.border = "6px solid rgba(0,255,0,1)"
a.style.borderRadius = "5%"





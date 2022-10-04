var user = []
var users = [{
    name: "Aitor Tilla", email: 'aitor@tilla.com', password: 'aitortillabuena'
}]

//---------------THIS IS LOGIN----------------------
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
var a = document.createElement('main')
var link = document.createElement('a')

//atributes
email.type = "email"
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
form.appendChild(link)
link.innerHTML = "REGISTER"
link.href = "#"

body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "100%"
body.style.backgroundImage = "url('https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center center"
body.style.backgroundSize = "cover"

a.style.display = "flex"
a.style.justifyContent = "center"
a.style.alignItems = "center"
a.style.backgroundColor = "rgba(17, 132, 0, 1)"
a.style.height = "20rem"
a.style.width = "18rem"
a.style.boxShadow = "0.6rem 0.6rem  62.5rem 1.2rem green"

form.style.display = "flex"
form.style.flexDirection = "column"
form.style.alignItems = "center"
button.style.margin = "2rem"

a.style.border = "6px solid rgba(0,255,0,1)"
a.style.borderRadius = "5%"
//--------------------FINISH LOG IN--------------------------------

//---------------------THIS IS REGISTER-----------------------------
//selector var
var body = document.querySelector('body')
var formA = document.createElement('form')
var aA = document.createElement('main')
var emailA = document.createElement('input')
var passwordA = document.createElement('input')
var password2A = document.createElement('input')
var buttonA = document.createElement('button')
var linkA = document.createElement('a')

//atributes
emailA.type = "email"
emailA.required = "true"
emailA.className = "form_email"

passwordA.type = "password"
passwordA.required = "true"
passwordA.className = "form_password"

password2A.type = "password"
password2A.required = "true"
password2A.className = "form_password2"


buttonA.textContent = "SEND"

//insert 
body.appendChild(aA)
aA.appendChild(formA)
formA.innerHTML = "<h2>REGISTER</h2>"
formA.appendChild(emailA)
formA.appendChild(passwordA)
formA.appendChild(password2A)
formA.appendChild(buttonA)
formA.appendChild(linkA)
linkA.innerHTML = "LOGIN"
linkA.href = "#"

//placeholders
emailA.placeholder = "Insert Email"
passwordA.placeholder = "Insert Password"
password2A.placeholder = "Repeat your password"

//styles
body.style.height = "100%"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.backgroundImage = "url('https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center center"
body.style.backgroundSize = "cover"

formA.style.display = "flex"
formA.style.alignItems = "center"
formA.style.paddingTop = "40px"
formA.style.flexDirection = "column"
formA.style.height = "20rem"

buttonA.style.margin = "1.5rem"
emailA.style.margin = "0.3rem"
passwordA.style.margin = "0.3rem"
password2A.style.margin = "0.3rem"

aA.style.border = "6px solid rgba(0,255,0,1)"
aA.style.borderRadius = "5%"
aA.style.backgroundColor = "rgba(17, 132, 0, 1)"
aA.style.height = "20rem"
aA.style.width = "18rem"
aA.style.boxShadow = "0.6rem 0.6rem  62.5rem 1.2rem green"
//-------------FINISH REGISTER-------------------

//-------------THIS IS HOME----------------------
//-------------FINISH HOME-----------------------

//-------------- LOGIN SETUP ------------------------
aA.remove()
document.body.append(a)
//-------------- FINISH LOGIN SETUP-----------------

//-----------------FUNCTIONS-------------------------
link.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'change to REGISTER page')
    a.remove()
    document.body.append(aA)
}

linkA.onclick = function(event) {
    event.preventDefault()

    log('DEBUG', 'change to register LOGIN page')   
    aA.remove()
    document.body.append(a)
}

formA.onsubmit = function(event){
    event.preventDefault()
    let user = {
        email: emailA.value, 
        password: passwordA.value,
        password2A: password2A.value,
    }
    if(user.password.value != user.password2A.value || user.email.length <= 8 || user.password.length <= 8){
       validate()
    }else{
      users.push(user)
      pushUsers()
    }
}
function validate(){
    log('ERROR', 'password not macht')
    formA.reset()
    alert('Error: Password not match, email is smaller than 8 characters or password is smaller than 8 characters. Please correct this for register.')
}
function pushUsers(){
    console.log(users)
    log('DEBUG', 'user register')
    linkA.click()
}


//--------------FINISH FUNCTIONS---------------------
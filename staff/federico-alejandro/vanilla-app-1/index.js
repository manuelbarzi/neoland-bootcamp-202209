log('INFO','star app')

var users = [  
    { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' },
    { name: 'fede', email: 'fede@neoalnd,com', password: '123456'},
    
    
 ];

document.body.className ='container'


var h1 = document.createElement('h1')
h1.innerHTML='login'

log('DEBUG', 'mount login')

var form = document.createElement('form')
form.className='container'

form.onsubmit = function(event) {
    event.preventDefault();
}

var loginLabelEmail = document.createElement('label')
loginLabelEmail.htmlFor = 'email'
loginLabelEmail.className= 'container__item--left'
loginLabelEmail.innerText = "E-mail"


var loginEmail = document.createElement('input')
loginEmail.type = 'email'
loginEmail.name = 'email'
loginEmail.id = 'email'
loginEmail.placeholder = 'input your email'


var loginLabelPassword = document.createElement('label')
loginLabelPassword.htmlFor = 'password'
loginLabelPassword.innerText = "Password"
loginLabelPassword.className ='container__item--left'


var loginPassword = document.createElement ('input')
loginPassword.type = 'password'
loginPassword.id = 'password'
loginPassword.name = ''
loginPassword.placeholder = 'input you password'

var loginButton = document.createElement('button')
loginButton.innerText = 'login'


var anchor = document.createElement('a')
anchor.href = ""
anchor.innerText = "Register"

anchor.onclick = function(event) {
   event.preventDefault();
   log('DEBUG', 'navigate to regisrer');
   loginPage.remove();
   document.body.append(registerPage);
};






var loginPage = document.createElement('main')
loginPage.className = 'container';




form.append(loginLabelEmail, loginEmail, loginLabelPassword, loginPassword, loginButton);
loginPage.append(form, anchor)
document.body.append( h1, loginPage)


log('DEBUG', 'mount register');

/*REGISTRO*/

var registerPage = document.createElement('main')
registerPage.className = 'container'

registerPage.onsubmit = function(event) {
    event.preventDefault();
    log('DEBUG', 'submit register')
}

var registerName = document.createElement('input')
var registerLabelName = document.createElement('label')
registerLabelName.htmlFor = 'name'
registerLabelName.className = 'container__item--left'
registerLabelName.innerText = 'Name'
registerName.type = 'text'
registerName.name = 'name'
registerName.id = 'name'
registerName.placeholder = 'input your name'

var registerEmail = document.createElement('input')
var registerLabelEmail = document.createElement('label')
registerLabelEmail.htmlFor = 'email'
registerLabelEmail.className = 'container__item--left'
registerLabelEmail.innerText = 'E-mail'
registerEmail.type = 'email'
registerEmail.name = 'email'
registerEmail.id = 'email'
registerEmail.placeholder = 'input your email'

var registerLabelPassword = document.createElement('label')
var registerPassword = document.createElement('input')
registerLabelPassword.className = 'container__item--left'
registerLabelPassword.htmlFor = 'Password'
registerLabelPassword.innerText = 'Password'
registerPassword.type = 'password'
registerPassword.name = ''
registerPassword.id = 'password'
registerPassword.placeholder = 'input your password'

var registerButton = document.createElement('button')
registerButton.innerText = 'Register'

var registerLoginLink = document.createElement ('a')
registerLoginLink.href =""
registerLoginLink.innerText = 'login '


registerLoginLink.onclick = function(event) {
    event.preventDefault()
    log('DEBUG', 'navigate to regisrer')
    registerPage.remove()
    document.body.append(loginPage)
 }
 








var registerForm = document.createElement('form')

registerForm.className = 'container'


log('DEBUG', 'mount home')


var homeHeader = document.createElement('header')
var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''


registerPage.append(registerForm, registerLoginLink)
registerForm.append(registerLabelName, registerName, registerLabelEmail, registerEmail, registerLabelPassword, registerPassword, registerButton)
document.body.append(registerForm)
registerPage.append(registerForm, registerLoginLink)




/*HOME*/


var homeHeaderImage = document.createElement('img')
homeHeaderImage.src = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"


homeHeaderLink.append(homeHeaderImage)
homeHeader.append(homeHeaderLink)

var homePage = document.createElement('main');
homePage.className = 'container'


// REGISTER SUBMIT // 

registerForm.onsubmit = function(event) {
     event.preventDefault()

     log('DEBUG', 'submit register')

     var user = {
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value
     }

     users.push(user)

     registerForm.reset()

     alert('user registred')

     registerLoginLink.click()

}



var email = loginEmailInput.value;
var password = loginPasswordInput.value;
var userMatches = falso

//VERIFICA SI EMAIL Y PASSWORD COINCIDEN //

for (var i=0; i< users.length; i++) {

    var user = users[i];

    if (user.email === email && user.password === password) {
        userMatches = true;

        break;
    }
}

if (userMatches) { 
 //IF MATCHES -> RESET FROM Y NAVIGATE TO HOME //
    loginPage.reset()
    loginPage.remove();
//document.body.append(homePage);

} else {
// ELSE -> MUESTRA MENSAJE DE ALERTA //
    alert('wrong credentials') 
} 
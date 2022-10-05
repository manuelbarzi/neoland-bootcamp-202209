var users = [
    {
        name: 'Ignacio Nuñez',
        email: 'ignacio@gmail.com',
        password: 'hola123'
    }
]

// HOME

var homeHeader = document.createElement('header')
homeHeader.className= 'home-header'

var homeNav = document.createElement('nav')
homeNav.className= 'home-nav'

var homeContenedor= document.createElement('div')
homeContenedor.className='home-contenedor'

var homeLinkHome = document.createElement('a');
homeLinkHome.href=''
homeLinkHome.innerText='Home'
homeLinkHome.className='home-link-home'
homeLinkHome.onclick = function (event) {
    event.preventDefault()

    loginDivContenedor.remove()
    registerDivContenedor.remove()
    document.body.append(homeContenedor)
}

var homeLinkLogin = document.createElement('a');
homeLinkLogin.href=''
homeLinkLogin.innerText='Log In'
homeLinkLogin.className='home-link-login'
homeLinkLogin.onclick = function (event) {
    event.preventDefault()

    registerDivContenedor.remove()
    homeContenedor.remove()
    document.body.append(loginDivContenedor)
}


var homeLinkRegister = document.createElement('a');
homeLinkRegister.href=''
homeLinkRegister.innerText='Register'
homeLinkRegister.className='home-link-register'
homeLinkRegister.onclick = function (event) {
    event.preventDefault()

    loginDivContenedor.remove()
    homeContenedor.remove()
    document.body.append(registerDivContenedor)
}

var homeTitle = document.createElement('h1')
homeTitle.className= 'home-title'
homeTitle.innerText='GameOver'

homeNav.append(homeTitle, homeLinkHome, homeLinkLogin, homeLinkRegister)
homeHeader.append(homeNav)
document.body.append(homeHeader, homeContenedor)


// LOGIN





var loginDivContenedor = document.createElement('div');
loginDivContenedor.className = 'container reset'

var loginForm = document.createElement('form');
loginForm.className = 'container borde-login';
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var userMatches = false

    if (loginEmailInput.value && loginPasswordInput.value) {

        // debugger;

        var email = loginEmailInput.value;
        var password = loginPasswordInput.value

        for (i = 0; i < users.length; i++) {
            var user = users[i]

            if (user.email === email && user.password === password) {
                userMatches = true
                break;
            } else {
                alert('wrong identification')
            }
        } 
        if  (userMatches){
            loginDivContenedor.remove()
            document.body.append(homeHeader)
        }
    }
    else {
        alert('put your email and/or your password')
    }
}

var loginH2 = document.createElement('h2');
loginH2.innerText = 'Log in'



var loginEmailLabel = document.createElement('label');
loginEmailLabel.innerText = 'E-mail';
loginEmailLabel.htmlFor = 'login-email';
loginEmailLabel.className = 'container__item-left';

var loginPasswordLabel = document.createElement('label');
loginPasswordLabel.innerText = 'Password';
loginPasswordLabel.htmlFor = 'login-password';
loginPasswordLabel.className = 'container__item-left';

var loginEmailInput = document.createElement('input');
loginEmailInput.className = 'input-form'
loginEmailInput.type = 'email';
loginEmailInput.placeholder = 'Input your E-mail';
loginEmailInput.name = 'login-email';
loginEmailInput.id = 'login-email';

var loginPasswordInput = document.createElement('input');
loginPasswordInput.className = 'input-form'
loginPasswordInput.type = 'password';
loginPasswordInput.placeholder = 'Input you password';
loginPasswordInput.name = 'login-password';
loginPasswordInput.id = 'login-password'

var LoginButton = document.createElement('button');
LoginButton.innerText = 'Log in'
LoginButton.className = 'container__item-right'



var hr = document.createElement('hr')

var divRegister = document.createElement('div');
divRegister.className = 'div-register'

var loginParraf = document.createElement('p');
loginParraf.innerText = 'Didnt have an account?';

var loginLinkRegister = document.createElement('a');
loginLinkRegister.href = '';
loginLinkRegister.innerText = 'Register';
loginLinkRegister.className = 'register-text'
loginLinkRegister.onclick = function (event) {
    event.preventDefault()

    loginDivContenedor.remove()
    document.body.append(registerDivContenedor)
}


divRegister.append(loginParraf, loginLinkRegister)
loginForm.append(loginH2, loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, LoginButton, hr, divRegister)
loginDivContenedor.append(loginForm)



//REGISTER



var registerDivContenedor = document.createElement('div');
registerDivContenedor.className = 'container reset';

var registerForm = document.createElement('form');
registerForm.className = 'container borde-register';
registerForm.onsubmit = function (event) {
    event.preventDefault()

    var user = {
        name: registerNameInput.value,
        email: registerEmailInput.value,
        password: registerPasswordInput.value
    }

    users.push(user)

    registerForm.reset();

    alert('User registered');

    registerLinkLogin.click()

}

var registerH2 = document.createElement('h2')
registerH2.innerText = 'Register'

var registerNameLabel = document.createElement('label');
registerNameLabel.htmlFor = 'register-name';
registerNameLabel.innerText = 'Name';
registerNameLabel.className = 'container__item-left';

var registerNameInput = document.createElement('input');
registerNameInput.type = 'register-name';
registerNameInput.name = 'register-name';
registerNameInput.id = 'register-name';
registerNameInput.placeholder = 'Input your Name'
registerNameInput.className = 'input-form'



var registerEmailLabel = document.createElement('label');
registerEmailLabel.htmlFor = 'register-email';
registerEmailLabel.innerText = 'E-mail';
registerEmailLabel.className = 'container__item-left';

var registerEmailInput = document.createElement('input');
registerEmailInput.type = 'register-email';
registerEmailInput.name = 'register-email';
registerEmailInput.id = 'register-email';
registerEmailInput.placeholder = 'Input your E-mail';
registerEmailInput.className = 'input-form';




var registerPasswordLabel = document.createElement('label');
registerPasswordLabel.htmlFor = 'register-password';
registerPasswordLabel.innerText = 'Password';
registerPasswordLabel.className = 'container__item-left';

var registerPasswordInput = document.createElement('input');
registerPasswordInput.name = 'register-password';
registerPasswordInput.type = 'password';
registerPasswordInput.id = 'register-password';
registerPasswordInput.placeholder = 'Input your password';
registerPasswordInput.className = 'input-form';



var registerButton = document.createElement('button');
registerButton.innerText = 'Register';
registerButton.className = 'container__item-right';



var registerHr = document.createElement('hr');

var divLogin = document.createElement('div');
divLogin.className = 'div-register';

var registerParraf = document.createElement('p');
registerParraf.innerText = 'Alreade have an account?';

var registerLinkLogin = document.createElement('a');
registerLinkLogin.href = '';
registerLinkLogin.innerText = 'Log in';
registerLinkLogin.className = 'register-text'
registerLinkLogin.onclick = function (event) {
    event.preventDefault()

    registerDivContenedor.remove()
    document.body.append(loginDivContenedor)
}




divLogin.append(registerParraf, registerLinkLogin)
registerForm.append(registerH2, registerNameLabel, registerNameInput, registerEmailLabel, registerEmailInput, registerPasswordLabel, registerPasswordInput, registerButton, registerHr, divLogin);
registerDivContenedor.append(registerForm);



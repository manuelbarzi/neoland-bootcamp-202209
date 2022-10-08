log('INFO', 'start app')

var users = [];

// DONE inject login with js

log('DEBUG', 'mount login')

var form = document.createElement('form');
form.classList.add('container');

var labelEmail = document.createElement('label');
labelEmail.classList.add('container__item--left');
labelEmail.htmlFor = 'email';
labelEmail.innerText = 'E-mail';

var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.placeholder = 'Input your mail';

var labelPassword = document.createElement('label');
labelPassword.htmlFor = 'password';
labelPassword.classList.add('container__item--left');
labelPassword.innerText = 'Password';

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'pasword';
inputPassword.placeholder = 'Input your password';

var button = document.createElement('button');
button.className = 'container__item--right';
button.innerText = 'Login';

var registerLink = document.createElement('a')
registerLink.href = ''
registerLink.innerText = 'Registrate'
registerLink.onclick = function (event) {
    event.preventDefault();

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

form.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'onsubmit login')

    var email = inputEmail.value
    var password = inputPassword.value

    /* for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            if (user.password === password) {
                loginForm.reset()

                loginPage.remove()
                homeUserNameText.innerText = user.name
                document.body.append(homePage)
            } else
                alert('wrong password')

            return
        }
    }

    alert('user not registered')
}*/

    var userMatches = false;
    
    for(var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.email === email && user.password === password) {
            userMatches = true;

            break;
        }
    }

    if (userMatches){
        form.reset();

        loginPage.remove();
        document.body.append(homePage);
    } else {

        alert('User not found')
    }    
};


form.append(labelEmail, inputEmail, labelPassword, inputPassword, button, registerLink);

var loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(form)

document.body.append(loginPage)

// DONE inject register with js

log('DEBUG', 'navigate to register')

var registerForm = document.createElement('form')
registerForm.className = 'container'

// TODO implement register submit

registerForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit register')

    /*
    var email = registerEmailInput.value

    // DONE check user in db

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            alert('ERROR user already exists')

            return
        }
    }
*/

    var user = {
        name: inputRegisterName.value,
        email: inputRegisterEmail.value,
        password: inputRegisterPassword.value
    }

    users.push(user)

    registerForm.reset()

    alert('user registered')

    registerLoginLink.click()
}

var labelRegisterName = document.createElement('label')
labelRegisterName.htmlFor = 'register-name'
labelRegisterName.className = 'container__item--left'
labelRegisterName.innerText = 'Name'

var inputRegisterName = document.createElement('input')
inputRegisterName.type = 'name'
inputRegisterName.id = 'register-name'
inputRegisterName.placeholder = 'Input your name'


var labelRegisterEmail = document.createElement('label');
labelRegisterEmail.className = 'container__item--left';
labelRegisterEmail.htmlFor = 'register-email';
labelRegisterEmail.innerText = 'E-mail';

var inputRegisterEmail = document.createElement('input');
inputRegisterEmail.type = 'email';
inputRegisterEmail.id = 'register-email';
inputRegisterEmail.placeholder = 'Input your mail';

var labelRegisterPassword = document.createElement('label');
labelRegisterPassword.htmlFor = 'register-password';
labelRegisterPassword.className = 'container__item--left';
labelRegisterPassword.innerText = 'Password';


var inputRegisterPassword = document.createElement('input');
inputRegisterPassword.type = 'password';
inputRegisterPassword.id = 'pasword';
inputRegisterPassword.placeholder = 'Input your password';


var registerButton = document.createElement('button')
registerButton.className = 'container__item--right'
registerButton.innerText = 'Register'

registerForm.append(labelRegisterName, inputRegisterName, labelRegisterEmail, inputRegisterEmail, labelRegisterPassword, inputRegisterPassword, registerButton)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerText = 'Login'

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to login')

    registerPage.remove()
    document.body.append(loginPage)
}

var registerPage = document.createElement('main')
registerPage.className = 'container'
registerPage.append(registerForm, registerLoginLink)

// document.body.append(registerPage)

//DONE inject home with

log('DEBUG', 'mount home')

var homeHeader = document.createElement('header')
var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
var homeHeaderImage = document.createElement('img')
homeHeaderImage.src = 'https://fakeimg.pl/30/0000ff'
var homeUserNameText = document.createElement('span')
homeUserNameText.innerText = 'User Name'
homeUserNameText.className = 'container container--full-height container--padding-h-s'

homeHeaderLink.append(homeHeaderImage)
homeHeader.append(homeHeaderLink, homeUserNameText)
homeHeader.className = 'container container--row container--full-width container--content-space-between'

var homePage = document.createElement ('main')
homePage.className = 'container container--full container--content-start'

homePage.append(homeHeader)

document.body.append(loginPage)

// document.body.append(homePage)

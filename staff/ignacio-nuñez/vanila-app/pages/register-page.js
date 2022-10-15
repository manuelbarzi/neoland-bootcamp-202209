var registerDivContenedor = document.createElement('div');
registerDivContenedor.className = 'container reset';

var registerForm = document.createElement('form');
registerForm.className = 'container borde-register';

registerForm.onsubmit = function (event) {
    event.preventDefault()


    var name = registerNameInput.value
    var email = registerEmailInput.value
    var password = registerPasswordInput.value

    if (name && email && password) {
        const result = registerUser(name, email, password)

        if (result instanceof Error) {
            alert(result.message)

            return
        }

        alert('User registered');
        registerForm.reset();
        registerLinkLogin.click()

    } else {
        alert('Put your dates')
    }
}



var registerH2 = document.createElement('h2')
registerH2.innerText = 'Register'

var registerNameLabel = document.createElement('label');
registerNameLabel.htmlFor = 'register-name';
registerNameLabel.innerText = 'Name';
registerNameLabel.className = 'container__item-left';

var registerNameInput = document.createElement('input');
registerNameInput.type = 'text';
registerNameInput.name = 'register-name';
registerNameInput.id = 'register-name';
registerNameInput.placeholder = 'Input your Name'
registerNameInput.className = 'input-form'
registerNameInput.required = true
registerNameInput.pattern = '[A-Za-z]{1,}'
registerNameInput.oninvalid = function () {
    alert('Use characters from A to Z for names')
}



var registerEmailLabel = document.createElement('label');
registerEmailLabel.htmlFor = 'register-email';
registerEmailLabel.innerText = 'E-mail';
registerEmailLabel.className = 'container__item-left';

var registerEmailInput = document.createElement('input');
registerEmailInput.type = 'email';
registerEmailInput.name = 'register-email';
registerEmailInput.id = 'register-email';
registerEmailInput.placeholder = 'Input your E-mail';
registerEmailInput.className = 'input-form';
registerEmailInput.required = true



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
// TODO improve following regex to support also symbols ($, %, ...)
registerPasswordInput.pattern = '[A-Za-z0-9\S]{7,}'
registerPasswordInput.required = true
registerPasswordInput.title = 'Use min 8 characters for the password and no spaces'




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
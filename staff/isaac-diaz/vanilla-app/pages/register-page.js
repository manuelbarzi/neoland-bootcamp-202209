log('INFO', 'Starting APP');

var registerForm = document.createElement('form')
registerForm.classname = 'container'

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = registerInputName.value
    var email = registerInputEmail.value
    var password = registerInputPassword.value

    const result = registerUser(name, email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    registerForm.reset()

    alert('user registered')

    regiterLoginLink.click()
}

var registerFondo = document.createElement('div');
registerFondo.className = 'rectangle';

var form = document.createElement('form');
form.className = 'container';

var register = document.createElement('h2');
register.innerText = 'Register';

var registerLabelName = document.createElement('label');
registerLabelName.htmlFor = 'register-name'
registerLabelName.className = 'continer__item--left';
registerLabelName.innerText = 'Name';

var registerInputName = document.createElement('input');
registerInputName.type = 'text';
registerInputName.className = 'nombre';
registerInputName.id = 'nombre';
registerInputName.placeholder = 'Nombre';

var registerLabelEmail = document.createElement('label');
registerLabelEmail.htmlFor = 'register-email'
registerLabelEmail.className = 'continer__item--left';
registerLabelEmail.innerText = 'E-mail';

var registerInputEmail = document.createElement('input');
registerInputEmail.type = 'email';
registerInputEmail.className = 'email';
registerInputEmail.id = 'email';
registerInputEmail.placeholder = 'Input your E-mail';

var registerLabelPassword = document.createElement('label');
registerLabelPassword.htmlFor = 'password'
registerLabelPassword.className = 'password';
registerLabelPassword.innerText = 'Password';


var registerInputPassword = document.createElement('input');
registerInputPassword.type = 'password';
registerInputPassword.className = 'password';
registerInputPassword.id = 'password';
registerInputPassword.placeholder = 'Input your password'

var registerButton = document.createElement('button');
registerButton.className = 'container__item--left';
registerButton.innerText = 'Register';

var anchorRegister = document.createElement('a')
anchorRegister.href = ''
anchorRegister.className = 'anchor'
anchorRegister.innerText = 'Login'

anchorRegister.onclick = function (event) {
    event.preventDefault()
    registerPage.remove()
    document.body.append(loginPage)
}

var registerPage = document.createElement('main')
registerPage.className = 'container'
registerPage.append(registerForm, anchorRegister)

registerForm.append(register, registerLabelName, registerInputName, registerLabelEmail, registerInputEmail, registerLabelPassword, registerInputPassword, registerButton);

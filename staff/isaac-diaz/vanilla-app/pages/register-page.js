log('INFO', 'Starting APP');

var registerForm = document.createElement('form')
registerForm.className = 'flex flex-col gap-2 my-4'

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = registerInputName.value
    var email = registerInputEmail.value
    var password = registerInputPassword.value

    try {
        registerUser(name, email, password)

        registerForm.reset()

        alert('user registered')

        registerLoginLink.click()
    } catch (error) {
        alert(error.message)

        registerInputPassword.value = ''
    }
}

var register = document.createElement('h2');
register.innerText = 'Register';
register.className = 'flex flex-col items-start p-2'

var registerLabelName = document.createElement('label');
registerLabelName.htmlFor = 'register-name'
registerLabelName.className = 'text-black';
registerLabelName.innerText = 'Name';

var registerInputName = document.createElement('input');
registerInputName.className ='bg-gray-200 border rounded-xl'
registerInputName.type = 'name';
registerInputName.id = 'register-name';
registerInputName.placeholder = 'Input your name';
registerInputName.required = true
registerInputName.oninvalid = function () {
    alert('Use characters from A to Z for names (min 1 character, and not numerics)')
}

var registerLabelEmail = document.createElement('label');
registerLabelEmail.htmlFor = 'register-email'
registerLabelEmail.className = 'continer__item--left';
registerLabelEmail.innerText = 'E-mail';

var registerInputEmail = document.createElement('input');
registerInputEmail.className ='bg-gray-200 border rounded-xl'
registerInputEmail.type = 'email';
registerInputEmail.id = 'email';
registerInputEmail.placeholder = 'Input your E-mail';
registerInputEmail.required = true

var registerLabelPassword = document.createElement('label');
registerLabelPassword.htmlFor = 'register-password'
registerLabelPassword.className = '';
registerLabelPassword.innerText = 'Password';


var registerInputPassword = document.createElement('input');
registerInputPassword.className = 'bg-gray-200 border rounded-xl'
registerInputPassword.type = 'password';
registerInputPassword.id = 'password';
registerInputPassword.placeholder = 'Input your password'
registerInputPassword.pattern = '[A-Za-z0-9\S]{8,}'
registerInputPassword.required = true
registerInputPassword.title = 'Use min 8 characters for the password and no spaces'

var registerButton = document.createElement('button');
registerButton.className = 'border rounded-xl p-2 bg-gray-200';
registerButton.innerText = 'Register';

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.className = 'underline p-2 border around border bg-blue-300'
registerLoginLink.innerText = 'Login'

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerPage.remove()

    document.body.append(loginPage)
}

var registerPage = document.createElement('main')
registerPage.className = 'flex flex-col items-center bg-green-100'
registerPage.append(registerForm, registerLoginLink)

registerForm.append(register, registerLabelName, registerInputName, registerLabelEmail, registerInputEmail, registerLabelPassword, registerInputPassword, registerButton);

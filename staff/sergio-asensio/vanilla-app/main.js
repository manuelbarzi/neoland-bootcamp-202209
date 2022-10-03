var body = document.querySelector('body');
body.classList.add ('container');

var form = document.createElement ('form');
    form.classList.add('container');
    form.method = 'post';

var labelEmail = document.createElement ('label');
    labelEmail.classList.add('containet__item--left');
    labelEmail.htmlFor = 'email';
    labelEmail.innerText= 'E-mail';

var inputEmail = document.createElement ('input')
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.id = 'email';
    inputEmail.placeholder = 'input your email';


var labelPassword = document.createElement ('label');
    labelPassword.classList.add('containet__item--right');
    labelPassword.htmlFor = 'password';
    labelPassword.innerText= 'Password';


var inputPassword = document.createElement ('input');
    inputPassword.type = 'password';
    inputPassword.name = 'password';
    inputPassword.id = 'password';
    inputPassword.placeholder = 'input your password';

var button = document.createElement ('button');
    button.innerText = 'Login'

var anchor = document.createElement ('a');
    // anchor.href = 'register.html'
form.append(labelEmail, inputEmail, labelPassword, inputPassword, button);
body.append(form, anchor);


console.log(body);





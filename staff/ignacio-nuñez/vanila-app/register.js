var style = document.createElement('link');
style.rel='stylesheet';
style.href='style.css';
document.head.append(style);


var divContenedor= document.createElement('div')
divContenedor.className='container reset'

var form = document.createElement('form');
form.className='container borde-register';





var labelName= document.createElement('label');
labelName.htmlFor='name';
labelName.innerText='Name';
labelName.className='container__item-left';

var inputName= document.createElement('input');
inputName.type= 'email';
inputName.name='email';
inputName.id= 'email';
inputName.placeholder= 'Input your Name'
inputName.className='input-form'



var labelEmail= document.createElement('label');
labelEmail.htmlFor='email';
labelEmail.innerText='E-mail'
labelEmail.className='container__item-left'

var inputEmail= document.createElement('input');
inputEmail.type='email';
inputEmail.name= 'email';
inputEmail.id='email';
inputEmail.placeholder='Input your E-mail'
inputEmail.className='input-form'




var labelPassword= document.createElement('label');
labelPassword.htmlFor='password';
labelPassword.innerText='Password'
labelPassword.className='container__item-left'

var inputPassword= document.createElement('input');
inputPassword.type='password';
inputPassword.name= 'password';
inputPassword.id='password';
inputPassword.placeholder='Input your password'
inputPassword.className='input-form'


var button = document.createElement('button');
button.innerText= 'Register';
button.className='container__item-right';



var hr= document.createElement('hr')

var divLogin= document.createElement('div')
divLogin.className= 'div-register'

var parrafAccount= document.createElement('p');
parrafAccount.innerText='Alreade have an account?';

var linkLogIn= document.createElement('a')
linkLogIn.href='index.html';
linkLogIn.innerText='Log in';
linkLogIn.className='register-text'

var linkHome= document.createElement('a')
linkHome.innerText='Home';
linkHome.href='home.html';
linkHome.className='home-text'



divLogin.append(parrafAccount, linkHome, linkLogIn)
form.append(labelName, inputName, labelEmail, inputEmail, labelPassword, inputPassword, button, hr, divLogin);
divContenedor.append(form);
document.body.append(divContenedor);

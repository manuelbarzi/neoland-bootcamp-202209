log('INFO', 'start app')

var users = [
    {name: 'Pepito Grillo', email:'pepito@grillo.com', password:'123213'}
]

// DONE inject log in with js

var body = document.querySelector('body')

var loginDivContainer = document.createElement('div')
loginDivContainer.classList.add('loginContainer')

var loginForm = document.createElement('form');
loginForm.method = 'post';

var loginH1 = document.createElement('h1');
loginH1.innerText = 'LOG IN';

var loginLine = document.createElement('hr')

var loginDivInputEmail = document.createElement ('div')
loginDivInputEmail.classList.add('input', 'email')

var loginLabelEmail = document.createElement('label')
loginLabelEmail.htmlFor = 'loginemail'
loginLabelEmail.innerText = 'Email'

var loginInputEmail = document.createElement('input')
loginInputEmail.type = 'email'
loginInputEmail.name = 'email'
loginInputEmail.id = 'loginemail'
loginInputEmail.placeholder = 'input your email'

var loginDivInputPasword = document.createElement ('div')
loginDivInputPasword.classList.add('input', 'password')

var loginLabelPassword = document.createElement('label')
loginLabelPassword.htmlFor = 'loginPassword'
loginLabelPassword.innerText = 'Password'

var loginInputPassword = document.createElement('input')
loginInputPassword.type = 'password'
loginInputPassword.name = 'password'
loginInputPassword.id = 'loginPassword'
loginInputPassword.placeholder = 'input your password'

var loginButton = document.createElement('button')
loginButton.classList = 'btn'
loginButton.innerText = 'login' 

var loginAnchor = document.createElement('a')
loginAnchor.className = 'regiterLink'
loginAnchor.innerText = 'Register'
// loginAnchor.href = 'register.html'

// En este apartado agrupo los contenidos de cada contenedor con .append
loginDivContainer.append(loginH1, loginLine, loginForm, loginAnchor)
loginForm.append(loginDivInputEmail, loginDivInputPasword, loginButton, )
loginDivInputEmail.append(loginLabelEmail, loginInputEmail)
loginDivInputPasword.append(loginLabelPassword, loginInputPassword)

//con esta linea decimos que todo lo que hemos redactado este dentro del body para poder verlo online
body.append(loginDivContainer)


// Explico la función que queremos ejecutar
loginAnchor.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginDivContainer.remove()
    document.body.append(registerDivContainer)
}


loginButton.onclick = function (event) {
    loginDivContainer.remove()
    document.body.append(homeHeader)
}



// DONE inject register with js

log('DEBUG', 'mount register')


// la variable divContainer es igual a - un elemento div en el documento
// la variable divContainer tiene una class llamada 'contaniner'
var registerDivContainer = document.createElement('div')
    registerDivContainer.classList = ('RegisterContainer')

var registerForm = document.createElement('form')    
    // registerForm.method = 'post'
registerForm.onsubmit = function(event) {
    event.preventDefault()
    //previene que el navegador por defecto refresque la página cuando se realiza el submit de los datos
    
    log('DEBUG', 'submit register')
    
    var user = { 
        name: registerInputName.value, 
        email: registerInputEmail.value, 
        password: registerInputPasword.value 
    }

    users.push(user)

    registerForm.reset()

    alert('user registered')

    registerAnchor.click()
}

var registerH1 = document.createElement('h1');
    registerH1.innerText = 'REGISTER';

var registerLine = document.createElement('hr')

var registerDivName = document.createElement('div')
    registerDivName.classList.add('input', 'name')

var registerLabelName = document.createElement('label')
    registerLabelName.htmlFor = 'name'
    registerLabelName.innerHTML = 'Name'

var registerInputName = document.createElement('input')
registerInputName.type = 'name'
registerInputName.name = 'name'
registerInputName.id = 'name'
registerInputName.placeholder = 'Input your name'

var registerDivEmail = document.createElement('div')
    registerDivEmail.classList.add('input', 'email')

var registerLabelEmail = document.createElement('label')
    registerLabelEmail.htmlFor = 'registerEmail'
    registerLabelEmail.innerText = 'E-mail'

var registerInputEmail = document.createElement('input')
    registerInputEmail.type = 'email'
    registerInputEmail.name ='email'
    registerInputEmail.id ='registerEmail'
    registerInputEmail.placeholder ='input your email'

var registerDivPassword = document.createElement('div')
    registerDivPassword.classList.add('input', 'password')

var registerLabelPassword = document.createElement('label')
    registerLabelPassword.htmlFor ='registerPassword'
    registerLabelPassword.innerText ='Pasword'

var registerInputPasword = document.createElement('input')
    registerInputPasword.type='password'
    registerInputPasword.name='password'
    registerInputPasword.id='registerPassword'
    registerInputPasword.placeholder='Input your password'

var registerButton = document.createElement('button')
    registerButton.innerText='Register'

var registerAnchor = document.createElement('a')
    registerAnchor.className = 'loginLink'
    registerAnchor.innerText='Log In'

registerDivContainer.append(registerH1, registerLine, registerForm, registerAnchor)
registerForm.append(registerDivName, registerDivEmail, registerDivPassword, registerButton)
registerDivName.append(registerLabelName, registerInputName)
registerDivEmail.append(registerLabelEmail, registerInputEmail)
registerDivPassword.append(registerLabelPassword, registerInputPasword)


// al hacer click en la variable registerAnchor que es un enlace.
registerAnchor.onclick = function (event) {
    event.preventDefault() 

    log('DEBUG', 'navigate to login')

    registerDivContainer.remove()
    document.body.append(loginDivContainer)
}


// // DONE inject home with js

var homeHeader = document.createElement('header')

var homeButtonMenu = document.createElement('button')

var homeSpanMenu = document.createElement('span')
    homeSpanMenu.className ='material-symbols-outlined'
    homeSpanMenu.innerText='menu'

var homeNav = document.createElement('nav')
    homeNav.className='burguer-list'

var homeButtonProfile = document.createElement('button')

var homeButtonExit = document.createElement('button')

var homeSpanExit = document.createElement('span')
    homeSpanExit.className ='material-symbols-outlined'
    homeSpanExit.innerText='Log out'

var homeSection = document.createElement('section')

var homeParagraph = document.createElement('p')
    homeParagraph.innerText ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe in voluptates, inventore ratione laboriosam debitis cupiditate aspernatur ex tenetur atque nemo et totam soluta dolor facilis, laudantium fuga! Commodi'
    // el operador no deja contener más texto

homeHeader.append(homeButtonMenu, homeNav)
homeButtonMenu.append(homeSpanMenu)
homeNav.append(homeButtonProfile, homeButtonExit)
homeButtonExit.append(homeSpanExit)
homeSection.append(homeParagraph)
// body.append(homeHeader, homeSection)




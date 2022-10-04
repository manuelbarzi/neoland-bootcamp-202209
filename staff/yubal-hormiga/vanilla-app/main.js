var users = [ 
    {name: 'yubal', email: 'yubal@yahoo.es', password:'12345'} 
];

/**CREAMOS */
/*Div principal*/
log('DEBUG', 'mount login')

var mainLogin = document.createElement('div')
mainLogin.classList.add('container__bg')


/*fieldset*/
var fieldset = document.createElement('fieldset')
fieldset.classList.add('container__field')

/*legend*/
var legend = document.createElement('legend')
legend.textContent = 'Registro'
legend.classList.add('container__legend')

/*form*/


var form = document.createElement('form')
form.classList.add('container')
form.method = 'post'


form.onsubmit = function(event) {
    event.preventDefault()
    
    log('DEBUG', 'submit register')
    
        
    var user = { 
        name: nombre.value, 
        email: mailRegister.value, 
        password: passwordRegister.value 
    }

    users.push(user)

    form.reset()

    alert('user registered')

    registro.click()
}


/*Nombre*/

var registerNameInput = document.createElement('input')
registerNameInput.placeholder = 'Input your Name'
registerNameInput.type = 'text'
registerNameInput.id = 'nombre'

/*Primer Label y Input*/
var registerEmailLabel = document.createElement('label')
registerEmailLabel.for = 'email'
// registerEmailLabel.textContent = 'Email' 
registerEmailLabel.classList.add('container__item--left')


var registerEmailInput = document.createElement('input')
registerEmailInput.type = "email"
registerEmailInput.id = 'mailRegister'
registerEmailInput.placeholder = 'Input your email'


/*Segundo label e Input*/
var loginMailLabel = document.createElement('label')
loginMailLabel.for = 'emailRegister'
// loginMailLabel.textContent = 'Email' 
loginMailLabel.classList.add('container__item--left')

var loginPasswordInput = document.createElement('input')
loginPasswordInput.type = "password"
loginPasswordInput.id = 'passwordRegister'
loginPasswordInput.placeholder = 'Input your password'

/*CREAMOS BOTON*/
var button = document.createElement('button')
button.textContent = 'Registro'
button.classList.add('btn')

/*CREAMOS REGISTRO*/
var registro = document.createElement('a')
registro.href = "register.html"
registro.textContent = 'Loging'


registro.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    mainLogin.remove()
    document.body.append(containerRg)
}

/******AÑADIMOS DENTRO DEL FORM LABES E INPUTS*************/

registerEmailLabel.appendChild(registerEmailInput)
loginMailLabel.appendChild(loginPasswordInput)

/**AÑADIMOS LOS LABELS AL FORM */
form.appendChild(registerNameInput)
form.appendChild(registerEmailLabel)
form.appendChild(loginMailLabel)
/*AÑADIMOS EL BOTON AL FORM*/
form.appendChild(button)
/*AÑDIMOS EL LEGEND AL FIELDSED*/
fieldset.appendChild(legend)

/*AÑADIMOS FORM AL FIELSED*/
fieldset.appendChild(form)

/*AÑADIMOS EL FIELSED AL DIV*/
mainLogin.appendChild(fieldset)
mainLogin.appendChild(registro)


/**************************************/
/**CREAMOS */
/*Div principal*/
var containerRg = document.createElement('div')
containerRg.classList.add('container__bg')


/*fieldset*/
var fieldset = document.createElement('fieldset')
fieldset.classList.add('container__field')

/*legend*/
var legend = document.createElement('legend')
legend.textContent = 'Login'
legend.classList.add('container__legend')

/*form*/
var form = document.createElement('form')
form.classList.add('container')
form.method = 'post'

/*Primer Label y Input*/
var registerEmailLabel = document.createElement('label')
registerEmailLabel.for = 'email'
// registerEmailLabel.textContent = 'Email' 
registerEmailLabel.classList.add('container__item--left')


var registerEmailInput = document.createElement('input')
registerEmailInput.type = "email"
registerEmailInput.id = 'mail'
registerEmailInput.placeholder = 'Input your email'


/*Segundo label e Input*/
var loginMailLabel = document.createElement('label')
loginMailLabel.for = 'email'
// loginMailLabel.textContent = 'Email' 
loginMailLabel.classList.add('container__item--left')

var loginPasswordInput = document.createElement('input')
loginPasswordInput.type = "password"
loginPasswordInput.id = 'password'
loginPasswordInput.placeholder = 'Input your password'

/*CREAMOS BOTON*/
var button = document.createElement('button')
button.textContent = 'login'
button.classList.add('btn')

/*CREAMOS REGISTRO*/
var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = "register.html"
loginRegisterLink.textContent = 'Registro'

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    containerRg.remove()
    document.body.append(mainLogin)
}

/******AÑADIMOS DENTRO DEL FORM LABES E INPUTS*************/
registerEmailLabel.appendChild(registerEmailInput)
loginMailLabel.appendChild(loginPasswordInput)

/**AÑADIMOS LOS LABELS AL FORM */
form.appendChild(registerEmailLabel)
form.appendChild(loginMailLabel)
/*AÑADIMOS EL BOTON AL FORM*/
form.appendChild(button)
/*AÑDIMOS EL LEGEND AL FIELDSED*/
fieldset.appendChild(legend)

/*AÑADIMOS FORM AL FIELSED*/
fieldset.appendChild(form)

/*AÑADIMOS EL FIELSED AL DIV*/
containerRg.appendChild(fieldset)
containerRg.appendChild(loginRegisterLink)



/***LO INSERTAMOS EN EL HTML */


const contenedor = document.querySelector('body')
contenedor.appendChild(mainLogin)
// contenedor.appendChild(registro)
// contenedor.appendChild(containerRg)
// contenedor.appendChild(registroRg)




const body = document.querySelector('body')
body.classList.add('container')

//console.log(body)

//console.log(registro)
//console.log(containerBg)
//console.log(fieldset)
//console.log(legend)
//console.log(form)
//console.log(registerEmailLabel)
//console.log(registerEmailInput)
//console.log(loginMailLabel)
//console.log(loginPasswordInput)



/**CREAMOS */
/*Div principal*/
var containerBg = document.createElement('div')
containerBg.classList.add('container__bg')


/*fieldset*/
var fieldset = document.createElement('fieldset')
fieldset.classList.add('container__field')

/*legend*/
var legend = document.createElement('legend')
legend.textContent = 'Acceso'
legend.classList.add('container__legend')

/*form*/
var form = document.createElement('form')
form.classList.add('container')
form.method = 'post'

/*Primer Label y Input*/
var labelOne = document.createElement('label')
labelOne.for = 'email'
labelOne.textContent = 'Email' 
labelOne.classList.add('container__item--left')


var inputOne = document.createElement('input')
inputOne.type = "email"
inputOne.id = 'mail'
inputOne.placeholder = 'Input your email'


/*Segundo label e Input*/
var labelTwo = document.createElement('label')
labelTwo.for = 'email'
labelTwo.textContent = 'Email' 
labelTwo.classList.add('container__item--left')

var inputTwo = document.createElement('input')
inputTwo.type = "password"
inputTwo.id = 'password'
inputTwo.placeholder = 'Input your password'

/*CREAMOS BOTON*/
var botton = document.createElement('button')
botton.textContent = 'login'
botton.classList.add('btn')

/*CREAMOS REGISTRO*/
var registro = document.createElement('a')
registro.href = "register.html"
registro.textContent = 'Registro'

/******AÑADIMOS DENTRO DEL FORM LABES E INPUTS*************/
labelOne.appendChild(inputOne)
labelTwo.appendChild(inputTwo)

/**AÑADIMOS LOS LABELS AL FORM */
form.appendChild(labelOne)
form.appendChild(labelTwo)
/*AÑADIMOS EL BOTON AL FORM*/
form.appendChild(botton)
/*AÑDIMOS EL LEGEND AL FIELDSED*/
fieldset.appendChild(legend)

/*AÑADIMOS FORM AL FIELSED*/
fieldset.appendChild(form)

/*AÑADIMOS EL FIELSED AL DIV*/
containerBg.appendChild(fieldset)


/***LO INSERTAMOS EN EL HTML */

const contenedor = document.querySelector('body')
contenedor.appendChild(containerBg)
contenedor.appendChild(registro)

const body = document.querySelector('body')
body.classList.add('container')

//console.log(body)

//console.log(registro)
//console.log(containerBg)
//console.log(fieldset)
//console.log(legend)
//console.log(form)
//console.log(labelOne)
//console.log(inputOne)
//console.log(labelTwo)
//console.log(inputTwo)



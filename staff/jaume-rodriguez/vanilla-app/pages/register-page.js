/* TODO VALIDAR 2 CONTRASEÑAS*/
/* TODO MÁXIMO DE CARACTERES */
/* TODO MEJORAR COLORES EN ALERT WRONG LOGIN Y USER */
/* TODO OBLIGUE A @ Y .COM AL EMAIL */

/* CREAMOS UN REGISTER PAGE */
var registerPage = document.createElement("main");

/* CREAMOS UN CONTENEDOR FLEX */
var registerContainerFlex = document.createElement("div")
registerContainerFlex.classList.add("container-flex");

/* -- */
registerPage.append(registerContainerFlex);

/* CREAMOS UN HEADER */
var registerHeaderForm = document.createElement("h1");
registerHeaderForm.innerText = "Create your Account to continue to Sign in";

/* -- */
registerContainerFlex.append(registerHeaderForm);

/* CREAMOS UN FORMULARIO */
var registerForm = document.createElement("form");
registerForm.classList.add("form");

/* -- */
var registerImageAvatar = document.createElement("img");
registerImageAvatar.src = "img/avatarlogo.png";

/* -- */
var registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "registerName"

var registerNameInput = document.createElement("input");
registerNameInput.type = "text";
registerNameInput.placeholder = "Enter a name";
registerNameInput.required = "required";
registerNameInput.id = "registerName"

/* -- */
var registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";

var registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.placeholder = "Enter an e-mail";
registerEmailInput.id = "registerEmail";
registerEmailInput.required = "required"

/* -- */
var registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";

var registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.placeholder = "Enter a password";
registerPasswordInput.id = "registerPassword"
registerPasswordInput.required = "required"

/* -- */
var registerButton = document.createElement("button");
registerButton.innerText = "Register";
registerButton.classList.add("button");

/* -- */
registerForm.append(registerImageAvatar,registerLabelName, registerNameInput,registerLabelEmail, registerEmailInput,registerLabelPassword, registerPasswordInput, registerButton);
registerContainerFlex.append(registerForm);

/* CREAMOS ENLACE SIGN IN */
var registerLinkLogin = document.createElement("a");
registerLinkLogin.href = "";
registerLinkLogin.innerText = "Sign in";
registerLinkLogin.classList.add("anchor__login");

/* -- */
registerLinkLogin.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    registerPage.remove();
    registerForm.reset();
    document.body.append(loginPage);
}

/* -- */
registerContainerFlex.append(registerLinkLogin);

/* CREAMOS UNA BASE DE DATOS - BD */
registerForm.onsubmit = function(event) {
    event.preventDefault();
    console.log("DEBUG", "Submit register");

    var name = registerNameInput.value;
    var email = registerEmailInput.value;
    var password = registerPasswordInput.value;

    const result = registerUser(name, email, password);

    if (result instanceof Error) {
        alert(result.message)

        return
    }
    console.log(users);
    
    registerForm.reset();
    registerPage.remove();
    document.body.append(loginPage);
}
/* ----------------------- */
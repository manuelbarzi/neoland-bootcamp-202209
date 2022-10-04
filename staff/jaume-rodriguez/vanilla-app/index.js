/* TODO VALIDAR 2 CONTRASEÑAS*/
/* LOGIN PAGE */

log("INFO", "Start App")

/* BASE DE DATOS */

var users = [];

/* CREAMOS UN CONTENEDOR FLEX */
var loginContainerFlex = document.createElement("div")
document.body.append(loginContainerFlex);

/* CREAMOS UN HEADER */

var loginHeaderForm = document.createElement("h1");
loginHeaderForm.innerText = "Sign in to continue to Home";

loginContainerFlex.append(loginHeaderForm);

/* CREAMOS UN FORMULARIO */
var loginForm = document.createElement("form");

var loginImageAvatar = document.createElement("img");
loginImageAvatar.src = "avatarlogo.png";

var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "loginEmail";

var loginEmail = document.createElement("input");
loginEmail.type = "email";
loginEmail.placeholder = "Email";
loginEmail.id = "loginEmail";
loginEmail.required = "required"

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "loginPassword";

var loginPassword = document.createElement("input");
loginPassword.type = "password";
loginPassword.placeholder = "Password";
loginPassword.id = "loginPassword"
loginPassword.required = "required"

var loginButton = document.createElement("button");
loginButton.innerText = "Sign in";

loginForm.append(loginImageAvatar, loginLabelEmail, loginEmail,loginLabelPassword, loginPassword, loginButton);

loginContainerFlex.append(loginForm);

/* CREAMOS ENLACE CREATE AN ACCOUNT */

var loginLinkRegister = document.createElement("a");
loginLinkRegister.href = "";
loginLinkRegister.innerText = "Create an account";
loginLinkRegister.classList.add("anchor__login");

loginLinkRegister.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to register");

    loginPage.remove();
    document.body.append(registerPage);
}

loginContainerFlex.append(loginLinkRegister);

/* CREAMOS UN LOGIN PAGE */
var loginPage = document.createElement("main");

loginPage.append(loginContainerFlex);
document.body.append(loginPage);


/* AGREGAMOS ESTILOS */
loginContainerFlex.classList.add("container-flex");
loginForm.classList.add("form");
loginButton.classList.add("button");
loginLinkRegister.classList.add("anchor__login");

/* ----------------------- */

/* REGISTER PAGE */

/* CREAMOS UN CONTENEDOR FLEX */
var registerContainerFlex = document.createElement("div")
document.body.append(registerContainerFlex);

/* CREAMOS UN HEADER */

var registerHeaderForm = document.createElement("h1");
registerHeaderForm.innerText = "Create your Account to continue to Sign in ";

registerContainerFlex.append(registerHeaderForm);

/* CREAMOS UN FORMULARIO */
var registerForm = document.createElement("form");

var registerImageAvatar = document.createElement("img");
registerImageAvatar.src = "avatarlogo.png";

var registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "registerName"

var registerName = document.createElement("input");
registerName.type = "text";
registerName.placeholder = "Enter a name";
registerName.required = "required";
registerName.id = "registerName"

var registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";

var registerEmail = document.createElement("input");
registerEmail.type = "email";
registerEmail.placeholder = "Enter an e-mail";
registerEmail.id = "registerEmail";
registerEmail.required = "required"

var registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";

var registerPassword = document.createElement("input");
registerPassword.type = "password";
registerPassword.placeholder = "Enter a password";
registerPassword.id = "registerPassword"
registerPassword.required = "required"

var registerButton = document.createElement("button");
registerButton.innerText = "Register";

registerForm.append(registerImageAvatar,registerLabelName, registerName,registerLabelEmail, registerEmail,registerLabelPassword, registerPassword, registerButton);

registerContainerFlex.append(registerForm);

/* CREAMOS ENLACE SIGN IN */

var registerLinkLogin = document.createElement("a");
registerLinkLogin.href = "";
registerLinkLogin.innerText = "Sign in";
registerLinkLogin.classList.add("anchor__login");

registerLinkLogin.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    registerPage.remove();
    document.body.append(loginPage);
}

registerContainerFlex.append(registerLinkLogin);

/* CREAMOS UN REGISTER PAGE */
var registerPage = document.createElement("main");

registerPage.append(registerContainerFlex);
document.body.append(registerPage);

/* AGREGAMOS ESTILOS */
registerContainerFlex.classList.add("container-flex");
registerForm.classList.add("form");
registerButton.classList.add("button");

/* CREAMOS UNA BASE DE DATOS */

registerForm.onsubmit = function(event) {
    event.preventDefault();

    console.log("INFO", "Submit register");

    var user = {
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value
    }
    users.push(user);
    registerForm.reset();
    console.log(users);
    registerLinkLogin.click();
}

/* ----------------------- */
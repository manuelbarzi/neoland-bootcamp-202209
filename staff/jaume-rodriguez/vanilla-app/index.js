/* TODO VALIDAR 2 CONTRASEÑAS*/
/* TODO MÁXIMO DE CARACTERES */
log("INFO", "Start App")

/* BASE DE DATOS */
var users = [{
    name:"",
    email:"",
    password:""
}];

/* LOGIN PAGE */
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

var loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.placeholder = "Email";
loginEmailInput.id = "loginEmail";
loginEmailInput.required = "required"

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "loginPassword";

var loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.placeholder = "Password";
loginPasswordInput.id = "loginPassword"
loginPasswordInput.required = "required"

var loginButton = document.createElement("button");
loginButton.innerText = "Sign in";

loginForm.append(loginImageAvatar, loginLabelEmail, loginEmailInput,loginLabelPassword, loginPasswordInput, loginButton);

loginContainerFlex.append(loginForm);

/* CONFIRMAMOS USUARIO */

  //   var userMatches = users.some(
  //     (user) => user.email === email && user.password === password
  //   );

  //  var userMatches = users.some(function(user) {
  //  return user.email === email && user.password === password
  //   });
  
loginForm.onsubmit = function(event){
    event.preventDefault();
    var email = loginEmailInput.value
    var password = loginPasswordInput.value
    var userMatches = false;

    for (var i= 0; i < users.length; i++){
    var user = users[i];
    if (user.email === email && user.password === password){
        userMatches = true;

        break;
        }
    }

if (userMatches){
    loginForm.reset();

    loginPage.remove();
    document.body.append(homePage);
} else {
    alert("wrong credentials");
}
};

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

var registerNameInput = document.createElement("input");
registerNameInput.type = "text";
registerNameInput.placeholder = "Enter a name";
registerNameInput.required = "required";
registerNameInput.id = "registerName"

var registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";

var registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.placeholder = "Enter an e-mail";
registerEmailInput.id = "registerEmail";
registerEmailInput.required = "required"

var registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";

var registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.placeholder = "Enter a password";
registerPasswordInput.id = "registerPassword"
registerPasswordInput.required = "required"

var registerButton = document.createElement("button");
registerButton.innerText = "Register";

registerForm.append(registerImageAvatar,registerLabelName, registerNameInput,registerLabelEmail, registerEmailInput,registerLabelPassword, registerPasswordInput, registerButton);

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
        name: registerNameInput.value,
        email: registerEmailInput.value,
        password: registerPasswordInput.value
    }
    users.push(user);
    registerForm.reset();
    console.log(users);
    registerLinkLogin.click();
};

/* HOME PAGE */

/* CREAMOS MAIN */
var homePage = document.createElement("main");

/* CREAMOS HEADER */
var homeHeader = document.createElement("header");
var homeTitulo = document.createElement("h1");
homeTitulo.innerText ="Web Site Jaume";

homeHeader.append(homeTitulo);
document.body.append(homeHeader);

homePage.append(homeHeader);

/* CREAMOS UNA BARRA DE NAVEGACIÓN FLEX*/
var homeBarnav = document.createElement("div");
var homeLinkHome = document.createElement("p");
homeLinkHome.innerText = "Home";

var homeLogOut = document.createElement("a");
homeLogOut.href = "";
homeLogOut.innerText = "Log out";

homePage.append(homeBarnav);
homeBarnav.append(homeLinkHome, homeLogOut);

homeLogOut.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    homePage.remove();
    document.body.append(loginPage);
}

/* AGREGAMOS ESTILOS */
homeHeader.classList.add("header");
homeBarnav.classList.add("barra-navegacion");
homeLinkHome.classList.add("link--active");
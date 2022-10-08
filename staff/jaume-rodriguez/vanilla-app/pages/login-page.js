/* TODO MEJORAR COLORES EN ALERT WRONG LOGIN Y USER */

/* CREAMOS UN LOGIN PAGE */
var loginPage = document.createElement("main");

/* CREAMOS UN CONTENEDOR FLEX */
var loginContainerFlex = document.createElement("div")
loginContainerFlex.classList.add("container-flex");

/* -- */
loginPage.append(loginContainerFlex);

/* CREAMOS UN HEADER */
var loginHeaderForm = document.createElement("h1");
loginHeaderForm.innerText = "Sign in to continue to Home";

/* -- */
loginContainerFlex.append(loginHeaderForm);

/* CREAMOS UN FORMULARIO */
var loginForm = document.createElement("form");
loginForm.classList.add("form");

/* -- */
var loginImageAvatar = document.createElement("img");
loginImageAvatar.src = "img/avatarlogo.png";

/* -- */
var loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "loginEmail";

var loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.placeholder = "Email";
loginEmailInput.id = "loginEmail";
loginEmailInput.required = "required"
loginEmailInput.title = "Please use @ and . on your email"

/* -- */
var loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "loginPassword";

var loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.placeholder = "Password";
loginPasswordInput.id = "loginPassword"
loginPasswordInput.required = "required"
loginPasswordInput.title = "Please enter at least 8 characters without spaces"

/* -- */
var loginButton = document.createElement("button");
loginButton.innerText = "Sign in";
loginButton.classList.add("button");

/* -- */
var loginCheckboxContainer = document.createElement("span");
loginCheckboxContainer.classList.add("form__checkbox__container");

var loginLabelPasswordCheckbox = document.createElement("label");
loginLabelPasswordCheckbox.type = "text";
loginLabelPasswordCheckbox.innerText = "Show password"
loginLabelPasswordCheckbox.classList.add("form__checkbox--text")

var loginPasswordCheckbox = document.createElement("input");
loginPasswordCheckbox.type = "checkbox";

loginPasswordCheckbox.onchange = function showPassword() {
    var showElement = loginPasswordInput;
    if (showElement.type === "password") {
      showElement.type = "text";
    } else {
      showElement.type = "password";
    }
  } 

  loginCheckboxContainer.append(loginPasswordCheckbox, loginLabelPasswordCheckbox)

/* -- */
loginForm.append(loginImageAvatar, loginEmailLabel, loginEmailInput,loginPasswordLabel, loginPasswordInput, loginCheckboxContainer, loginButton);
loginContainerFlex.append(loginForm);

/* CREAMOS ENLACE CREATE AN ACCOUNT */
var loginLinkRegister = document.createElement("a");
loginLinkRegister.href = "";
loginLinkRegister.innerText = "Create an account";
loginLinkRegister.classList.add("anchor__login");

/* -- */
loginLinkRegister.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to register page");

    loginPasswordInput.type = "password";

    loginForm.reset();
    loginPage.remove();
    document.body.append(registerPage);
}

/* -- */
loginContainerFlex.append(loginLinkRegister);

/* CONFIRMAMOS USUARIO */
loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'Submit login')

    var email = loginEmailInput.value
    var password = loginPasswordInput.value
    
    var result = authenticateUser(email, password)

    if (result instanceof Error) {
        alert(result.message)

        loginPasswordInput.value = "";
        return
        
    }

    user = result;

    console.log(result);
    loginForm.reset();
    loginPage.remove();
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsTitle.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
    updateNameInput.placeholder = user.name;
    updateEmailInput.placeholder = user.email;
    document.body.append(homePage);
}
/* ----------------------- */
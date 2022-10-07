var loginPage = document.createElement("div");
loginPage.classList.add("loginContainer");

var loginForm = document.createElement("form");
loginForm.method = "post";

loginForm.onsubmit = function (event) {
event.preventDefault();

var email = loginInputEmail.value;
var password = loginInputPassword.value;

var result = authenticateUser(email, password)

if (result instanceof Error) {
    alert(result.message)

    return
}

user = result

loginForm.reset();

loginPage.remove();
document.body.append(homePage);
document.body.className = "body-home"
homeUserNameText.innerText = user.name
}

var loginH1 = document.createElement("h1");
loginH1.innerText = "LOG IN";

var loginLine = document.createElement("hr");

var loginDivInputEmail = document.createElement("div");
loginDivInputEmail.classList.add("input", "email");

var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "loginemail";
loginLabelEmail.innerText = "Email";

var loginInputEmail = document.createElement("input");
loginInputEmail.type = "email";
loginInputEmail.name = "email";
loginInputEmail.id = "loginemail";
loginInputEmail.placeholder = "input your email";

var loginDivInputPasword = document.createElement("div");
loginDivInputPasword.classList.add("input", "password");

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "loginPassword";
loginLabelPassword.innerText = "Password";

var loginInputPassword = document.createElement("input");
loginInputPassword.type = "password";
loginInputPassword.name = "password";
loginInputPassword.id = "loginPassword";
loginInputPassword.placeholder = "input your password";

var loginButton = document.createElement("button");
loginButton.className = "btn";
loginButton.innerText = "login";

var loginAnchor = document.createElement("a");
loginAnchor.className = "regiterLink";
loginAnchor.innerText = "Register";

// En este apartado agrupo los contenidos de cada contenedor con .append
loginPage.append(loginH1, loginLine, loginForm, loginAnchor);
loginForm.append(loginDivInputEmail, loginDivInputPasword, loginButton);
loginDivInputEmail.append(loginLabelEmail, loginInputEmail);
loginDivInputPasword.append(loginLabelPassword, loginInputPassword);
// ---------------------------------------------------------------------------------------
// document.body.append(loginPage);
// ---------------------------------------------------------------------------------------


// Explico la función que queremos ejecutar
loginAnchor.onclick = function (event) {
    event.preventDefault();
    
    log("DEBUG", "navigate to register");
    
    loginPage.remove();
    document.body.append(registerPage);
    document.body.className = "body-register"
};

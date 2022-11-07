log("INFO", "start app");

var users = [
  { name: "Pepito Grillo", email: "pepito@grillo", password: "123456789" },
  { name: "arman", email: "arman@grillo", password: "12345" },
  { name: "paco", email: "paco@grillo", password: "123456" },
  { name: "pepe", email: "pepe@grillo", password: "1234567" },
  { name: "juan", email: "juan@grillo", password: "1234" },
  { name: "mario", email: "mario@grillo", password: "12345678" },
  { name: "jose", email: "jose@grillo", password: "123" },
];

var head = document.querySelector("head");
var body = document.querySelector("body");
body.classList.add("container");

var link = document.createElement("link");
link.href = "index.css";
link.rel = "stylesheet";
link.type = "text/css";

var link2 = document.createElement("link");
link2.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
link2.rel = "stylesheet";

head.append(link);

// TODO inject login with js

log("DEBUG", "start login");

var loginForm = document.createElement("form");
loginForm.classList.add("form");

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var email = loginEmail.value;
  var password = loginPassword.value;

  var userMatches = false;

  for (let i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email && user.password === password) {
      userMatches = true;
      //
      break;
    }
  }

  if (userMatches) {
    alert("user acepted");
    loginForm.reset();
    loginPage.remove();
    document.body.append(homePage);
  } else {
    alert("user denied");
  }
};

var loginH1 = document.createElement("h1");
loginH1.innerText = "Login";

var loginEmail = document.createElement("input");
loginEmail.classList.add("input");
loginEmail.type = "email";
loginEmail.placeholder = "E-mail";

var loginPassword = document.createElement("input");
loginPassword.classList.add("input");
loginPassword.type = "password";
loginPassword.placeholder = "Password";

var loginButton = document.createElement("button");
loginButton.classList.add("button");
loginButton.innerText = "Login";

var loginAnchor = document.createElement("a");
loginAnchor.classList.add("enlace");
loginAnchor.innerText = "Register";
loginAnchor.href = "";

loginForm.append(loginH1, loginEmail, loginPassword, loginButton);

var loginPage = document.createElement("main");
loginPage.classList.add("container");
loginPage.append(loginForm, loginAnchor);

document.body.append(loginPage);

loginAnchor.onclick = function (event) {
  event.preventDefault();

  log("Debug", "navigate to register");

  loginPage.remove();
  document.body.append(registerPage);
};

// TODO inject register with js

log("DEBUG", "start register");

// var registerBody = document.querySelector("body");
// registerBody.classList.add("container");

var registerForm = document.createElement("form");
registerForm.classList.add("form");
registerForm.id = "formulario";

registerForm.onsubmit = function (event) {
  event.preventDefault();

  log("DEBUG", "submit register");

  var email = registerEmail.value;

  for (let i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      alert('user already exists')
      //
      return;
    }
  }

  var user = {
    name: registerUser.value,
    email: registerEmail.value,
    password: registerPassword.value,
  };

  users.push(user);

  registerForm.reset();

  alert("user registered");

  registerAnchor.click();
};

var registerH1 = document.createElement("h1");
registerH1.innerText = "Register";

var registerUser = document.createElement("input");
registerUser.classList.add("input");
registerUser.id = "usuario";
registerUser.type = "text";
registerUser.placeholder = "User";

var registerEmail = document.createElement("input");
registerEmail.classList.add("input");
registerEmail.id = "email";
registerEmail.type = "email";
registerEmail.placeholder = "E-mail";

var registerPassword = document.createElement("input");
registerPassword.classList.add("input");
registerPassword.id = "password";
registerPassword.type = "password";
registerPassword.placeholder = "Password";

var registerButton = document.createElement("button");
registerButton.classList.add("button");
registerButton.innerText = "Register";

// var registerButtonAnchor = document.createElement("a");
// registerButtonAnchor.classList.add("enlace");
// registerButtonAnchor.innerText = "Register";
// registerButtonAnchor.href = "home.html";

// var registerDiv = document.createElement("div");
// registerDiv.classList.add("option");

var registerAnchor = document.createElement("a");
registerAnchor.classList.add("enlace");
registerAnchor.style = "color: white; text-decoration: none";
registerAnchor.innerText = "Login";
registerAnchor.href = "";

// document.body.append(registerForm, registerDiv);
// registerButton.append(registerButtonAnchor);
// registerDiv.append(registerAnchor);
registerForm.append(
  registerH1,
  registerUser,
  registerEmail,
  registerPassword,
  registerButton
);

registerAnchor.onclick = function (event) {
  event.preventDefault();

  log("Debug", "navigate to login");

  registerPage.remove();
  document.body.append(loginPage);
};

var registerPage = document.createElement("main");
registerPage.classList.add("container");
registerPage.append(registerForm, registerAnchor);

// document.body.append(registerPage);

log("DEBUG", "mount home");

var homeNav = document.createElement("nav");
homeNav.classList.add("navbar");

var homeDiv = document.createElement("div");
homeDiv.classList.add("news");

var homeButton = document.createElement("button");
homeButton.classList.add("desplegable");
homeButton.innerText = "Home";

var homeContent = document.createElement("div");
homeContent.classList.add("news-content");

var homeFirst = document.createElement("a");
homeFirst.innerText = "Sports";
homeFirst.href = "#";

var homeSecond = document.createElement("a");
homeSecond.innerText = "Regional";
homeSecond.href = "#";

var homeThird = document.createElement("a");
homeThird.innerText = "Intermantional";
homeThird.href = "#";

homeContent.append(homeFirst, homeSecond, homeThird);
homeDiv.append(homeButton, homeContent);
homeNav.append(homeDiv);

var homePage = document.createElement("main");
homePage.classList.add("container--home");
homePage.append(homeNav);

log("INFO", "start app");

var users = [
  { name: "Pepito Grillo", email: "pepito@grillo.com", password: "123123" },
];

// DONE inject log in with js

var body = document.querySelector("body");

var loginDivContainer = document.createElement("div");
loginDivContainer.classList.add("loginContainer");

var loginForm = document.createElement("form");
loginForm.method = "post";

loginForm.onsubmit = function (event) {
  event.preventDefault();
  // GET EMAIL AND PASSWORD FROM INPUTS
  var email = loginInputEmail.value;
  var password = loginInputPassword.value;

  // VERIFY IF EMAIL AND PASSWORD MATCHES TO SOME USER IN DB
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    // GET USER FROM DB IN INDEX "I" AND ASING IT TO VARIABLE USER
    if (user.email === email) {
      if (user.password === password) {
        loginForm.reset();

        loginDivContainer.remove();
        document.body.append(homeHeader);
      } // ELSE -> SHOW ALERT MESSAGE
      else alert("Email or password uncorrect");
      return;
    }
  }
  alert("user not registered");
};

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
// loginAnchor.href = 'register.html'

// En este apartado agrupo los contenidos de cada contenedor con .append
loginDivContainer.append(loginH1, loginLine, loginForm, loginAnchor);
loginForm.append(loginDivInputEmail, loginDivInputPasword, loginButton);
loginDivInputEmail.append(loginLabelEmail, loginInputEmail);
loginDivInputPasword.append(loginLabelPassword, loginInputPassword);

//con esta linea decimos que todo lo que hemos redactado este dentro del body para poder verlo online
body.append(loginDivContainer);

// Explico la función que queremos ejecutar
loginAnchor.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to register");

  loginDivContainer.remove();
  document.body.append(registerDivContainer);
};

// DONE inject register with js

log("DEBUG", "mount register");

// la variable divContainer es igual a - un elemento div en el documento
// la variable divContainer tiene una class llamada 'contaniner'
var registerDivContainer = document.createElement("div");
registerDivContainer.classList = "RegisterContainer";

var registerForm = document.createElement("form");
// registerForm.method = 'post'
registerForm.onsubmit = function (event) {
  event.preventDefault();
  //previene que el navegador por defecto refresque la página cuando se realiza el submit de los datos

  var user = {
    name: registerInputName.value,
    email: registerInputEmail.value,
    password: registerInputPasword.value,
  };

  users.push(user);

  registerForm.reset();

  alert("user registered");

  registerAnchor.click();
};

var registerH1 = document.createElement("h1");
registerH1.innerText = "REGISTER";

var registerLine = document.createElement("hr");

var registerDivName = document.createElement("div");
registerDivName.classList.add("input", "name");

var registerLabelName = document.createElement("label");
registerLabelName.htmlFor = "name";
registerLabelName.innerHTML = "Name";

var registerInputName = document.createElement("input");
registerInputName.type = "name";
registerInputName.name = "name";
registerInputName.id = "name";
registerInputName.placeholder = "Input your name";

var registerDivEmail = document.createElement("div");
registerDivEmail.classList.add("input", "email");

var registerLabelEmail = document.createElement("label");
registerLabelEmail.htmlFor = "registerEmail";
registerLabelEmail.innerText = "E-mail";

var registerInputEmail = document.createElement("input");
registerInputEmail.type = "email";
registerInputEmail.name = "email";
registerInputEmail.id = "registerEmail";
registerInputEmail.placeholder = "input your email";

var registerDivPassword = document.createElement("div");
registerDivPassword.classList.add("input", "password");

var registerLabelPassword = document.createElement("label");
registerLabelPassword.htmlFor = "registerPassword";
registerLabelPassword.innerText = "Pasword";

var registerInputPasword = document.createElement("input");
registerInputPasword.type = "password";
registerInputPasword.name = "password";
registerInputPasword.id = "registerPassword";
registerInputPasword.placeholder = "Input your password";

var registerButton = document.createElement("button");
registerButton.innerText = "Register";

var registerAnchor = document.createElement("a");
registerAnchor.className = "loginLink";
registerAnchor.innerText = "Log In";

registerDivContainer.append(
  registerH1,
  registerLine,
  registerForm,
  registerAnchor
);
registerForm.append(
  registerDivName,
  registerDivEmail,
  registerDivPassword,
  registerButton
);
registerDivName.append(registerLabelName, registerInputName);
registerDivEmail.append(registerLabelEmail, registerInputEmail);
registerDivPassword.append(registerLabelPassword, registerInputPasword);

// al hacer click en la variable registerAnchor que es un enlace.
registerAnchor.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to login");

  registerDivContainer.remove();
  document.body.append(loginDivContainer);
};

// // DONE inject home with js

var homeHeader = document.createElement("header");

var homeButtonMenu = document.createElement("button");

var homeSpanMenu = document.createElement("span");
homeSpanMenu.className = "material-symbols-outlined";
homeSpanMenu.innerText = "menu";

var homeNav = document.createElement("nav");
homeNav.className = "burguer-list";

var homeButtonProfile = document.createElement("button");

var homeButtonExit = document.createElement("button");
homeButtonExit.innerText = "Log out";

var homeSpanExit = document.createElement("span");
homeSpanExit.className = "material-symbols-outlined";
homeSpanExit.innerText = "exit_to_app";

var homeSection = document.createElement("section");

var homeParagraph = document.createElement("p");
homeParagraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe in voluptates, inventore ratione laboriosam debitis cupiditate aspernatur ex tenetur atque nemo et totam soluta dolor facilis, laudantium fuga! Commodi! Atque repellat suscipit rerum illum autem repudiandae nihil ad inventore consequatur. Rem, unde sint. Mollitia sint accusamus cum ex iure molestias quas voluptas, deserunt magni omnis repellat, voluptate consequatur vero.Accusantium provident expedita consequatur eos ducimus neque iure fugit maiores dolor temporibus eveniet blanditiis unde veritatis quam aliquid doloremque aperiam odio voluptatum iusto labore, dolorem dicta impedit nostrum. Et, sit. Magnam laboriosam rem non! Consectetur beatae, cupiditate veritatis impedit similique atque dolore! Eligendi adipisci, soluta officiis neque nesciunt exercitationem eos ratione accusantium deserunt quas similique, ab architecto sequi ipsa commodi. Illo quis maxime veniam fugit? Tenetur quam nemo voluptatibus quidem totam deserunt, mollitia placeat nobis quod inventore nihil saepe expedita! Minima suscipit molestias voluptatibus! Provident consequatur nihil excepturi quas? Ducimus! Sunt dolores veniam suscipit nemo rem obcaecati voluptas at, nulla maxime quae iste aliquam, enim ex. Non, nesciunt. Iste error repudiandae quo quia eum, laborum tenetur quam quibusdam voluptas soluta! Et odio labore quo velit porro accusantium dolore aut assumenda sapiente nihil excepturi totam, repellendus dicta omnis aliquid mollitia deserunt consequuntur tempora possimus dolores aliquam dolor incidunt illo recusandae. Deleniti! Quidem recusandae aut officiis eum temporibus quas impedit minima repellendus asperiores dolorum, reiciendis debitis, blanditiis repudiandae? Magnam, inventore reiciendis neque rem eum dolorum, odit molestias quae, est eaque vero laboriosam! Explicabo placeat illo quia sint fuga esse eligendi numquam ab perferendis corporis laudantium nesciunt repellendus maiores, alias beatae tenetur a officia ipsa iste provident animi est! Animi dolore unde quaerat? Fuga impedit veniam nesciunt nemo exercitationem repu";

// el operador no deja contener más texto

homeHeader.append(homeButtonMenu, homeNav);
homeButtonMenu.append(homeSpanMenu);
homeNav.append(homeButtonProfile, homeButtonExit);
homeButtonExit.append(homeSpanExit);
homeSection.append(homeParagraph);
// body.append(homeHeader, homeSection)

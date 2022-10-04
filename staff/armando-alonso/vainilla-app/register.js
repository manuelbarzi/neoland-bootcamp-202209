// Declaramos la variable recopilando la información del DOM con querySelector

var head = document.querySelector("head");

// Declaramos el link que necesitamos en el html para que podamos incluir el fichero css

var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";
link.type = "text/css";

// Incluimos el link que tenemos en la variable creada dentro del "html" de la página

head.append(link);

var body = document.querySelector("body");
var form = document.createElement("form");
var h1 = document.createElement("h1");
var user = document.createElement("input");
var email = document.createElement("input");
var password = document.createElement("input");
var button = document.createElement("button");
var buttonAnchor = document.createElement("a");
var div = document.createElement("div");
var anchor = document.createElement("a");

// Incluimos las variables del formulario que acabamos de crear y que son las nuevas etiquetas dentro del body y el form

body.append(form);
form.append(h1, user, email, password, button);
button.append(buttonAnchor);
body.append(div);
div.append(anchor);

// determinamos los textos que y la url de la etiqueta a que vamos a usar

anchor.innerText = "Login";
anchor.href = "login.html";
h1.innerText = "Register";
buttonAnchor.href = "home.html";

// les vamos declarando las clases que vamos a usar que ya existen en el documento css 

body.classList.add("container");
form.classList.add("container", "form");
user.classList.add("input");
email.classList.add("input");
password.classList.add("input");
button.classList.add("button");
buttonAnchor.classList.add("enlace");
anchor.classList.add("enlace");
div.classList.add("option");

// determino los parámetros de placeholder, en este caso no pongo los labels porque son 2 campos de formulario y se entiende rápido 

user.placeholder = "User";
email.placeholder = "E-mail";
password.placeholder = "Password";
buttonAnchor.innerText = "Register";
anchor.style = "color: white ", "text-decoration: none";
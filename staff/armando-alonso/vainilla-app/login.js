var head = document.querySelector("head");

var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";
link.type = "text/css";

head.append(link);

var body = document.querySelector("body");

var form = document.createElement("form");

body.append(form);

var h1 = document.createElement("h1");
h1.innerText = "Login";

var email = document.createElement("input");
var password = document.createElement("input");
var button = document.createElement("button");

form.append(h1, email, password, button);

var div = document.createElement("div");

body.append(div);

var anchor = document.createElement("a");
anchor.classList.add("enlace");
anchor.innerText = "Register";
anchor.href = "register.html";

div.append(anchor);

body.classList.add("container");
form.classList.add("container", "form");
email.classList.add("input");
password.classList.add("input");
button.classList.add("button");
div.classList.add("option");

email.placeholder = "E-mail";
password.placeholder = "Password";
button.innerText = "Login";

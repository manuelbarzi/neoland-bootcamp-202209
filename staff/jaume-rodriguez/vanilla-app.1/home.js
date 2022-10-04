/* HOME.HTML */

/* CREAMOS MAIN */
var main = document.createElement("main");

/* CREAMOS HEADER */
var header = document.createElement("header");
var titulo = document.createElement("h1");
titulo.innerText ="Web Site Jaume";

header.append(titulo);
document.body.append(header);

main.append(header);
document.body.append(main);

/* CREAMOS UNA BARRA DE NAVEGACIÓN FLEX*/
var barnav = document.createElement("div");
var linkHome = document.createElement("p");
linkHome.innerText = "Home";

var linkLogin = document.createElement("a");
linkLogin.href = "login.html";
linkLogin.innerText = "Login";

var linkRegister = document.createElement("a");
linkRegister.href = "register.html";
linkRegister.innerText = "Register";

main.append(barnav);
barnav.append(linkHome, linkLogin, linkRegister);

/* AGREGAMOS ESTILOS */
header.classList.add("header");
barnav.classList.add("barra-navegacion");
linkHome.classList.add("link--active")

/* ----------------------- */
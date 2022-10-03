/* HOME.HTML*/

/* CREAMOS IN MAIN */
var main = document.createElement("main");

/* CREAMOS UN HEADER */
var header = document.createElement("header")
var titulo = document.createElement("h1")

titulo.innerText = "web site Ana";

header.append(titulo);

/* AGREGAMOS EL HEADER */
document.body.append(header);


/* AGREGAMOS EL HEADER AL MAIN */
mai.append(header);
document.body.append(main);


/* CREAMOS UNA BARRA DE NAVEGACION */
var barnav = document.createElement("div");
var linkHome = document.createElement("a");
linkHome.herf = "home.html";
linkHome.innerText = "Home";

var barnav = document.createElement("div");
barnav.innerText ="Home"


/* AGREGAMOS LOS LINKS A LA BARRA DE NAVEGACION */

/* CREAMOS LA BARRA DE NAVEGACION AL MAIN */
main.append(barnav);
barnav.append(linkHome, linkLogin, linkRegister);


/* AGRAGAMOS ESTILOS */
header.classList.add("header");
barnav.classList.add("barra_navegacion");


/* --------*/
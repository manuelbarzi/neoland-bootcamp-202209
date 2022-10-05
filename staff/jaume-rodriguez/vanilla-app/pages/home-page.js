/* TODO CREAR EN HOMEPAGE UN TOP HEADER DE USUARIO */
/* TODO AÑADIR USERNAME AL TÍTULO DE HOMEPAGE */
/* TODO CREAR UN TRELLO */

/* CREAMOS UN HOME PAGE */
var homePage = document.createElement("main");

/* CREAMOS HEADER */
var homeHeader = document.createElement("header");
homeHeader.classList.add("home__header");

/* -- */
var homeHeaderUserName = document.createElement("span");
homeHeaderUserName.classList.add("home__header--username");

var homeHeaderLogo = document.createElement("img");
homeHeaderLogo.src = "img/trellologo.png"
homeHeaderLogo.classList.add("home__header--logo");

/* -- */
homeHeader.append(homeHeaderUserName, homeHeaderLogo);
homePage.append(homeHeader);

/* -- */
var homeLinkLogOut = document.createElement("a");
homeLinkLogOut.href = "";
homeLinkLogOut.innerText = "Log out  ";
homeLinkLogOut.classList.add("home__header--logout");

homeHeader.append(homeLinkLogOut);

/* -- */
homeLinkLogOut.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    homePage.remove();
    document.body.append(loginPage);
}
/* ----------------------- */


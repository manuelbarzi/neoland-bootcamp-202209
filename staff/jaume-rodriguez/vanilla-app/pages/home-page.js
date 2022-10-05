/* TODO CREAR EN HOMEPAGE UN TOP HEADER DE USUARIO */
/* TODO AÑADIR USERNAME AL TÍTULO DE HOMEPAGE */
/* TODO CREAR UN TRELLO */

/* CREAMOS UN HOME PAGE */
var homePage = document.createElement("main");

/* CREAMOS HEADER */
var homeHeader = document.createElement("header");
homeHeader.classList.add("header");

/* -- */
var homeUserName = document.createElement("h1");
homeUserName.innerText ="Web Site Jaume";

/* -- */
homeHeader.append(homeUserName);
homePage.append(homeHeader);

/* CREAMOS UNA BARRA DE NAVEGACIÓN FLEX*/
var homeBarnav = document.createElement("div");
homeBarnav.classList.add("barra-navegacion");

/* -- */
var homeLinkHome = document.createElement("p");
homeLinkHome.innerText = "Home";
homeLinkHome.classList.add("link--active");

/* -- */
var homeLinkLogOut = document.createElement("a");
homeLinkLogOut.href = "";
homeLinkLogOut.innerText = "Log out";

/* -- */
homeBarnav.append(homeLinkHome, homeLinkLogOut);
homePage.append(homeBarnav);

/* -- */
homeLinkLogOut.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    homePage.remove();
    document.body.append(loginPage);
}
/* ----------------------- */


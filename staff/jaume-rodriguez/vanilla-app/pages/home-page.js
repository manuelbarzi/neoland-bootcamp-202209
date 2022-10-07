/* TODO CREAR UNA SECCIÓN DE SETTINGS */
/* TODO PODER CAMBIAR CREDENTIALS AL USUARIO LOGEADO | REGISTRADO */
/* TODO CREAR UN TRELLO */

/* CREAMOS UN HOME PAGE */
var homePage = document.createElement("div");

/* -- CREAMOS HEADER -- */
var homeHeader = document.createElement("header");
homeHeader.classList.add("home__header");

/* -- */
var homeHeaderLogo = document.createElement("img");
homeHeaderLogo.src = "img/trellologo.png"
homeHeaderLogo.classList.add("home__header--logo");

homeHeaderLogo.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to home page");

    homeMenuPanelStatus = "closed";
    homeMenuPanel.remove();
    settingsForm.reset();
    homeSettingsSection.remove();
}

/* -- */
var homeHeaderMenuPanelButton = document.createElement("img");
homeHeaderMenuPanelButton.src = "img/headermenupanelbotton.png"
homeHeaderMenuPanelButton.classList.add("home__header__menu-panel--button");

var homeMenuPanelStatus = "closed";

homeHeaderMenuPanelButton.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Open menu panel");

    if(homeMenuPanelStatus === "closed"){
        homeMenuPanelContainer.append(homeMenuPanel);

        homeMenuPanelStatus = "opened";

    } else{
        homeMenuPanel.remove();

        homeMenuPanelStatus = "closed";
    }
}

/* -- */
homeHeader.append(homeHeaderLogo, homeHeaderMenuPanelButton);
homePage.append(homeHeader);

/* CREAMOS UN MENU PANEL */
var homeMenuPanelContainer = document.createElement("div");
homeMenuPanelContainer.classList.add("home__menu__panel--container");

var homeMenuPanel = document.createElement("div");
homeMenuPanel.classList.add("home__menu__panel");

/* -- */
homePage.append(homeMenuPanelContainer);

/* -- */
var homeMenuPanelUserName = document.createElement("p");
homeMenuPanelUserName.innerText = "User Name";
homeMenuPanelUserName.classList.add("home__menu__panel--user-name");

/* -- */
var homeMenuPanelSeparation = document.createElement("hr");
homeMenuPanelSeparation.classList.add("home__menu__panel--separation");

/* -- */
var homeMenuPanelSettings = document.createElement("a");
homeMenuPanelSettings.href = "";
homeMenuPanelSettings.innerText = "Settings";
homeMenuPanelSettings.classList.add("home__menu__panel--text");

/* -- */
homeMenuPanelSettings.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to settings")

    homeMenuPanelStatus = "closed";
    homeMenuPanel.remove();
    settingsForm.reset();
    homeMain.append(homeSettingsSection);
}

/* -- */
var homeMenuPanelLogOut = document.createElement("a");
homeMenuPanelLogOut.href = "";
homeMenuPanelLogOut.innerText = "Log out";
homeMenuPanelLogOut.classList.add("home__menu__panel--text");

homeMenuPanelLogOut.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    user = null;
    homeMenuPanelStatus = "closed";
    homeMenuPanel.remove();
    settingsForm.reset();
    homeSettingsSection.remove();
    homePage.remove();
    document.body.append(loginPage);
}

/* -- */
homeMenuPanel.append(homeMenuPanelUserName,homeMenuPanelSeparation, homeMenuPanelSettings, homeMenuPanelLogOut);

/* CREAMOS EL CONTAINER DEL CONTENIDO */
var homeMain = document.createElement("main");
homeMain.classList.add("home__main");

homePage.append(homeMain);
/* -- CREAMOS HEADER -- */
var homeNavbar = document.createElement("header");
homeNavbar.classList.add("home__header");

/* -- */
var homeNavbarLogo = document.createElement("img");
homeNavbarLogo.src = "img/trellologo.png"
homeNavbarLogo.classList.add("home__header--logo");

homeNavbarLogo.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Navigate to home page");

    homeMenuDropdownStatus = "closed";
    homeMenuDropdown.remove();
    updateEmailForm.reset();
    updatePasswordForm.reset();
    homeSettingsSection.remove();
}

/* -- */
var homeNavbarMenuDropdownButton = document.createElement("img");
homeNavbarMenuDropdownButton.src = "img/headermenupanelbotton.png";
homeNavbarMenuDropdownButton.classList.add("home__header__menu-panel--button");

var homeMenuDropdownStatus = "closed";

homeNavbarMenuDropdownButton.onclick = function(event){
    event.preventDefault();

    log("DEBUG", "Open menu panel");

    if(homeMenuDropdownStatus === "closed"){
        homeMenuDropdownContainer.append(homeMenuDropdown);

        homeMenuDropdownStatus = "opened";

    } else{
        homeMenuDropdown.remove();

        homeMenuDropdownStatus = "closed";
    }
}

/* -- */
homeNavbar.append(homeNavbarLogo, homeNavbarMenuDropdownButton);
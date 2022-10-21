/* -- CREAMOS HEADER -- */
const homeNavbar = document.createElement("header");
homeNavbar.classList.add(
    "flex",
    "z-0",
    "items-center",
    "px-2",
    "py-3",
    "bg-gradient-to-br",
    "from-cyan-500",
    "to-blue-500"
);

const homeNavbarLogo = document.createElement("img");
homeNavbarLogo.src = "img/trellologo.png";
homeNavbarLogo.classList.add("w-40", "cursor-pointer");

homeNavbarLogo.onclick = function (event) {
    event.preventDefault();

    log("DEBUG", "Navigate to home page");

    homeMenuDropdownStatus = "closed";
    homeMenuDropdown.remove();
    updateEmailForm.reset();
    updatePasswordForm.reset();
    homeSettingsSection.remove();
    homePage.append(tasksPanelSection);
};

const homeNavbarMenuDropdownButton = document.createElement("img");
homeNavbarMenuDropdownButton.src = "img/headermenupanelbotton.png";
homeNavbarMenuDropdownButton.classList.add(
    "w-14",
    "cursor-pointer",
    "ml-auto",
    "invert",
);

let homeMenuDropdownStatus = "closed";

homeNavbarMenuDropdownButton.onclick = function (event) {
    event.preventDefault();

    log("DEBUG", "Open menu panel");

    if (homeMenuDropdownStatus === "closed") {
        homeMenuDropdownContainer.append(homeMenuDropdown);

        homeMenuDropdownStatus = "opened";
    } else {
        homeMenuDropdown.remove();

        homeMenuDropdownStatus = "closed";
    }
};

homeNavbar.append(homeNavbarLogo, homeNavbarMenuDropdownButton);

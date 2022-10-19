/* CREAMOS UN MENU PANEL */
const homeMenuDropdownContainer = document.createElement("div");
homeMenuDropdownContainer.classList.add("home__menu__panel--container");

const homeMenuDropdown = document.createElement("div");
homeMenuDropdown.classList.add("home__menu__panel");

const homeMenuDropdownUserName = document.createElement("p");
homeMenuDropdownUserName.innerText = "User Name";
homeMenuDropdownUserName.classList.add("home__menu__panel--user-name");

const homeMenuDropdownSeparation = document.createElement("hr");
homeMenuDropdownSeparation.classList.add("home__menu__panel--separation");

const homeMenuDropdownSettings = document.createElement("a");
homeMenuDropdownSettings.href = "";
homeMenuDropdownSettings.innerText = "Settings";
homeMenuDropdownSettings.classList.add("home__menu__panel--text");

homeMenuDropdownSettings.onclick = function (event) {
    event.preventDefault();

    log("DEBUG", "Navigate to settings")

    homeMenuDropdownStatus = "closed";
    homeMenuDropdown.remove();
    tasksPanelSection.remove();
    updateNameInput.disabled = true;
    updateEmailInput.disabled = true;
    updatePasswordInput.disabled = true;
    updateNameForm.reset();
    updatePasswordForm.reset();
    updateEmailForm.reset();
    homePage.append(homeSettingsSection);
}

const homeMenuDropdownLogOut = document.createElement("a");
homeMenuDropdownLogOut.href = "";
homeMenuDropdownLogOut.innerText = "Log out";
homeMenuDropdownLogOut.classList.add("home__menu__panel--text");

homeMenuDropdownLogOut.onclick = function (event) {
    event.preventDefault();

    log("DEBUG", "Navigate to login");

    user = null;
    homeMenuDropdownStatus = "closed";
    homeMenuDropdown.remove();
    updateNameInput.disabled = true;
    updateEmailInput.disabled = true;
    updatePasswordInput.disabled = true;
    updateNameForm.reset();
    updatePasswordForm.reset();
    updateEmailForm.reset();
    homeSettingsSection.remove();
    homePage.remove();
    document.body.append(loginPage);
}

homeMenuDropdown.append(homeMenuDropdownUserName, homeMenuDropdownSeparation, homeMenuDropdownSettings, homeMenuDropdownLogOut);
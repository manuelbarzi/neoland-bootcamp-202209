/* CREAMOS UN MENU PANEL */
const homeMenuDropdownContainer = document.createElement("div");
homeMenuDropdownContainer.classList.add("flex", "justify-end", "right-0", "absolute");

const homeMenuDropdown = document.createElement("div");
homeMenuDropdown.classList.add(
    "flex",
    "flex-col",
    "items-end",
    "content-end",
    "z-10",
    "w-64",
    "p-4",
    "rounded-sm",
    "gap-2",
    "bg-white",
    "shadow-sm",
    "shadow-slate-800/50"
);

const homeMenuDropdownUserName = document.createElement("p");
homeMenuDropdownUserName.innerText = "User Name";
homeMenuDropdownUserName.classList.add("text-black", "pr-1");

const homeMenuDropdownSeparation = document.createElement("hr");
homeMenuDropdownSeparation.classList.add("w-full");

const homeMenuDropdownSettings = document.createElement("a");
homeMenuDropdownSettings.href = "";
homeMenuDropdownSettings.innerText = "Settings";
homeMenuDropdownSettings.classList.add("text-black", "pr-1", "hover:font-semibold");

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
homeMenuDropdownLogOut.classList.add("text-black", "pr-1", "hover:font-semibold");

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
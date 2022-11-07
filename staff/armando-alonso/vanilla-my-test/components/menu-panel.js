log("INFO", "Menu Panel");

const homeMenuPanel = document.createElement("div");
homeMenuPanel.className = "flex flex-col items-end";

const homeMenuSettingsLink = document.createElement("button");
homeMenuSettingsLink.className = "material-symbols-outlined";
homeMenuSettingsLink.innerText = "settings";
// homeMenuSettingsLink.href = ''

homeMenuSettingsLink.onclick = function (event) {
  event.preventDefault();

  homeMenuPanel.remove();

  homeMenuPanelStatus = "closed";

  tasksPanel.remove()

  settingsEmailInput.value = user.email;

  homePage.append(settingsPanel);
};

const homeLogoutButton = document.createElement("button");
homeLogoutButton.className = "material-symbols-outlined";
homeLogoutButton.innerText = "logout";

homeLogoutButton.onclick = function () {
  user = null;

  homeMenuPanel.remove();
  homeMenuPanelStatus = "closed";

  settingsPanel.remove()
  homePage.append(tasksPanel)

  homePage.remove();
  document.body.append(loginPage);
};

homeMenuPanel.append(homeMenuSettingsLink, homeLogoutButton);
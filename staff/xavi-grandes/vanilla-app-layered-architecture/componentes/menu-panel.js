var homeMenuPanel = document.createElement("section");
homeMenuPanel.className = "menu-panel";

var homeMenuSettingsLink = document.createElement("a");
homeMenuSettingsLink.className = "material-symbols-outlined a-settings";
homeMenuSettingsLink.innerText = "settings";
homeMenuSettingsLink.href = "";

homeMenuSettingsLink.onclick = function (event) {
  event.preventDefault();

  homeMenuPanel.remove();
  tasksPanel.remove()
  homeMenuPanelStatus = "closed";

  homePage.append(settingsPanel);
};

var homeMenuButtonLogout = document.createElement("button");
homeMenuButtonLogout.className = "material-symbols-outlined btn-logout";
homeMenuButtonLogout.innerText = "logout";

homeMenuButtonLogout.onclick = function () {
  homeMenuPanel.remove();
  homeMenuPanelStatus = "closed";
  // homeMenuPanel.remove();

  homePage.remove();
  document.body.append(loginPage);
  document.body.className = "body-login";
};

homeMenuPanel.append(homeMenuSettingsLink, homeMenuButtonLogout);

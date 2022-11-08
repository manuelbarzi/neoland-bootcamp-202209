const menuPanel = document.createElement("section");
menuPanel.className = "menu-panel";

const MenuSettingsLink = document.createElement("a");
MenuSettingsLink.className = "material-symbols-outlined a-settings";
MenuSettingsLink.innerText = "settings";
MenuSettingsLink.href = "";

MenuSettingsLink.onclick = function (event) {
  event.preventDefault();

  menuPanel.remove();
  tasksPanel.remove()
  headerMenuPanelStatus = "closed";

  tasksPanel.remove()

  settingsEmailInput.value = user.email
  settingsPasswordInput.value = ''

  homePage.append(settingsPanel);
};

const MenuButtonLogout = document.createElement("button");
MenuButtonLogout.className = "material-symbols-outlined btn-logout";
MenuButtonLogout.innerText = "logout";

MenuButtonLogout.onclick = function () {
  
  user = null

  menuPanel.remove();
  headerMenuPanelStatus = "closed";

  settingsPanel.remove();
  homePage.append(tasksPanel)

  homePage.remove();
  
  document.body.append(loginPage);
  document.body.className = "body-login";
};

menuPanel.append(MenuSettingsLink, MenuButtonLogout);

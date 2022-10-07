var homeHeader = document.createElement("header");
homeHeader.className = "home-header";

// var homeHeaderLink = document.createElement('a')
//   homeHeaderLink.href = ''

var homeHeaderLinkImage = document.createElement("a");
homeHeaderLinkImage.href = " ";

var homeHeaderImage = document.createElement("img");
homeHeaderImage.className = "homeImgLogo";
homeHeaderImage.src =
  "https://cdn.iconscout.com/icon/free/png-256/trello-14-1175081.png";

homeHeaderLinkImage.onclick = function (event) {
  event.preventDefault();

  if (homeMenuPanelStatus === "opened") {
    homeMenuPanel.remove();

    homeMenuPanelStatus = "closed";
  }

  settingsPanel.remove()
};

homeHeaderLinkImage.append(homeHeaderImage);

var homeUserNameText = document.createElement("span");
homeUserNameText.innerText = "User Name";
homeUserNameText.className = "#";

var homeMenuButton = document.createElement("button");
homeMenuButton.className = "home-header-button material-symbols-outlined";
homeMenuButton.innerText = "menu";

var homeMenuPanelStatus = "closed";

homeMenuButton.onclick = function () {
  if (homeMenuPanelStatus === "closed") {
    document.body.append(homeMenuPanel);

    homeMenuPanelStatus = "opened";
  } else {
    homeMenuPanel.remove();

    homeMenuPanelStatus = "closed";
  }
};

var homeMenuPanel = document.createElement("section");
homeMenuPanel.className = "menu-panel";

homeHeader.append(
  homeHeaderLinkImage,
  homeUserNameText,
  homeMenuButton,
  // homeMenuPanel
);

var homeMenuSettingsLink = document.createElement("a");
homeMenuSettingsLink.className = "material-symbols-outlined a-settings";
homeMenuSettingsLink.innerText = "settings";
homeMenuSettingsLink.href = "";

homeMenuSettingsLink.onclick = function (event) {
  event.preventDefault();

  homeMenuPanel.remove();
  homeMenuPanelStatus = "closed";

  homePage.append(settingsPanel)
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

var homePage = document.createElement("main");

homePage.append(homeHeader);
document.body.append(homePage)

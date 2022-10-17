log("INFO", "Header Panel");

var homeHeader = document.createElement("header");
homeHeader.className = "container container--full-with";

var homeLink = document.createElement("a");
homeLink.href = "";

homeLink.onclick = function (event) {
  event.preventDefault();

  homeMenuPanel.remove();

  settingsPanel.remove();

  homeMenuPanelStatus = "closed";

  homePage.append(tasksPanel)
};

var homeLogo = document.createElement("img");
homeLogo.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/100px-Trello-logo-blue.svg.png";

homeLink.append(homeLogo);

var homeUserName = document.createElement("span");
homeUserName.className =
  "container container--full-height container--padding-h-s";

var homeAddTask = document.createElement('button')
homeAddTask.className = 'material-symbols-outlined'
homeAddTask.innerText = 'add'

homeAddTask.onclick = function () {
  var result = createTask(user.email)

  if (result instanceof Error) {
    alert(result.messagge)

    return
}
  clearTasksCards()

  renderTasksCards()

}

var homeMenuButton = document.createElement("button");
homeMenuButton.className = "material-symbols-outlined";
homeMenuButton.innerText = "menu";

var homeMenuPanelStatus = "closed";

homeMenuButton.onclick = function () {
  if (homeMenuPanelStatus === "closed") {
    homeHeader.append(homeMenuPanel);

    homeMenuPanelStatus = "opened";
  } else {
    homeMenuPanel.remove();

    homeMenuPanelStatus = "closed";
  }
};

var homeHeaderTopPanel = document.createElement("div");
homeHeaderTopPanel.className =
  "container container--row container--full-with container--content-space-between";

homeHeaderTopPanel.append(homeLink, homeUserName, homeAddTask, homeMenuButton);

homeHeader.append(homeHeaderTopPanel);
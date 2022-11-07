log("INFO", "Header Panel");

const homeHeader = document.createElement("header");
homeHeader.className = "flex flex-col";

const homeLink = document.createElement("a");
homeLink.href = "";

homeLink.onclick = function (event) {
  event.preventDefault();

  homeMenuPanel.remove();

  settingsPanel.remove();

  homeMenuPanelStatus = "closed";

  homePage.append(tasksPanel)
};

const homeLogo = document.createElement("img");
homeLogo.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/100px-Trello-logo-blue.svg.png";
homeLogo.className = ""

homeLink.append(homeLogo);

const homeUserName = document.createElement("span");
homeUserName.className = "";

const homeAddTask = document.createElement('button')
homeAddTask.className = 'material-symbols-outlined'
homeAddTask.innerText = 'add'

homeAddTask.onclick = function () {
  try {
    createTask(user.email)

    clearTasksCards()

    renderTasksCards()
    
  } catch (error) {
    alert(error.message)
  }

}

const homeMenuButton = document.createElement("button");
homeMenuButton.className = "material-symbols-outlined";
homeMenuButton.innerText = "menu";

let homeMenuPanelStatus = "closed";

homeMenuButton.onclick = function () {
  if (homeMenuPanelStatus === "closed") {
    homeHeader.append(homeMenuPanel);

    homeMenuPanelStatus = "opened";
  } else {
    homeMenuPanel.remove();

    homeMenuPanelStatus = "closed";
  }
};

const homeAddMenu = document.createElement('div')
homeAddMenu.className = 'flex'

const homeHeaderTopPanel = document.createElement("div");
homeHeaderTopPanel.className = "flex justify-between p-4";

homeAddMenu.append(homeAddTask, homeMenuButton)

homeHeaderTopPanel.append(homeLink, homeUserName, homeAddMenu);

homeHeader.append(homeHeaderTopPanel);
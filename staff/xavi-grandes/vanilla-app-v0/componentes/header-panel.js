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

  settingsPanel.remove();
  document.body.append(tasksPanel)
};

homeHeaderLinkImage.append(homeHeaderImage);

var homeUserNameText = document.createElement("span");
homeUserNameText.innerText = "User Name";
homeUserNameText.className = "#";

var headerButtonAddTask = document.createElement('button')
headerButtonAddTask.className = 'home-header-button material-symbols-outlined'
headerButtonAddTask.innerText ='add'

headerButtonAddTask.onclick = function(){
  var result = createTask(user.email)

  if (result instanceof Error){
    alert(result.message)

    return
  }

  // clearTasksCards()

  // rederTasksCards()
}


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

homeHeader.append(homeHeaderLinkImage, homeUserNameText, headerButtonAddTask, homeMenuButton);


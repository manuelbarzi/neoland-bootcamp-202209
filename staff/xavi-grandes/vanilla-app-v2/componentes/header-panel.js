const headerPanel = document.createElement("header");
headerPanel.className = "home-header";


const homeHeaderLinkImage = document.createElement("a");
homeHeaderLinkImage.href = " ";

homeHeaderLinkImage.onclick = function (event) {
  event.preventDefault();

  if (homeMenuPanelStatus === "opened") {
    menuPanel.remove();

    homeMenuPanelStatus = "closed";
  }

  settingsPanel.remove();
  homePage.append(tasksPanel)
};

const homeHeaderImage = document.createElement("img");
homeHeaderImage.className = "homeImgLogo";
homeHeaderImage.src =
  "https://cdn.iconscout.com/icon/free/png-256/trello-14-1175081.png";


homeHeaderLinkImage.append(homeHeaderImage);

const homeUserNameText = document.createElement("span");
homeUserNameText.innerText = "User Name";
homeUserNameText.className = "#";

const addTaskButton = document.createElement('button')
addTaskButton.className = 'home-header-button material-symbols-outlined'
addTaskButton.innerText ='add'

addTaskButton.onclick = function(){
  try {
    createTask(user.email)

    clearTasksCards()
    
    renderTasksCards()
  } catch (error) {
    alert.apply(error.message)
  }

}


const homeMenuButton = document.createElement("button");
homeMenuButton.className = "home-header-button material-symbols-outlined";
homeMenuButton.innerText = "menu";

let homeMenuPanelStatus = "closed";

homeMenuButton.onclick = function () {
    if (homeMenuPanelStatus === "closed") {
    document.body.append(menuPanel);

    homeMenuPanelStatus = "opened";
} else {
    menuPanel.remove();

    homeMenuPanelStatus = "closed";
}
};

headerPanel.append(homeHeaderLinkImage, homeUserNameText, addTaskButton, homeMenuButton);


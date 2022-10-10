log("DEBUG", "mount home");

var homeNav = document.createElement("header")
homeNav.classList.add("nav");

var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''

homeHeaderLink.onclick = function(event) {
    event.preventDefault()
    
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(homeSection)

}

var homeLogo = document.createElement("img")
homeLogo.classList.add('logo')
homeLogo.src = 'https://cdn-icons-png.flaticon.com/512/1200/1200328.png'

homeHeaderLink.append(homeLogo)

var homeUser = document.createElement('span')
homeUser.classList.add('profile');
homeUser.innerText = 'User'

var homeDiv = document.createElement('div')
homeDiv.classList.add("news");

var homeButtonMenu = document.createElement("button");
homeButtonMenu.classList.add('material-symbols-outlined','nav--menu');
homeButtonMenu.innerText = "Menu";

var homeMenuPanelStatus = 'closed'

homeButtonMenu.onclick = function () {
    if (homeMenuPanelStatus === 'closed') {
        homeNav.append(homeMenuPanel)

        homeMenuPanelStatus = 'opened'
    }else{
        homeMenuPanel.remove()

        homeMenuPanelStatus = 'closed'
    }
}

var homeMenuPanel = document.createElement('div')
homeMenuPanel.className = 'container'

var homeMenuSettingsLink = document.createElement('a')
homeMenuSettingsLink.className = 'material-symbols-outlined'
homeMenuSettingsLink.innerText = 'settings'
homeMenuSettingsLink.href = ''

homeMenuSettingsLink.onclick = function(event) {
    event.preventDefault()

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    homeSection.remove()

    settingsEmailInput.value = sessionUser.email

    homePage.append(settingsPanel)
}

var homeLogoutButton = document.createElement('button')
homeLogoutButton.className = 'material-symbols-outlined'
homeLogoutButton.innerText = 'logout'

homeLogoutButton.onclick = function() {
    sessionUser = null

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()
    homePage.append(homeSection)

    homePage.remove()

    document.body.append(loginPage)
}

homeMenuPanel.append(homeMenuSettingsLink, homeLogoutButton)



homeDiv.append(homeButtonMenu);
homeNav.append(homeHeaderLink, homeUser, homeDiv);


var homePage = document.createElement("main");
homePage.classList.add("container--home");
homePage.append(homeNav, homeSection);

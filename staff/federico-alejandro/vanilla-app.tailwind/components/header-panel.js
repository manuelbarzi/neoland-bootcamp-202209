var homeHeader = document.createElement('header')
homeHeader.className = 'flex flex-col'

var homeMenuButton = document.createElement ('button')
homeMenuButton.className = ' font-extrabold material-symbols-outlined mr-3'
homeMenuButton.innerText = 'menu'

var homeMenuPanelStatus = 'closed'

homeMenuButton.onclick = function() {
    if (homeMenuPanelStatus === 'closed') {
        homeHeader.append(homeMenuPanel)

        homeMenuPanelStatus = 'opened'
    } else {
        homeMenuPanel.remove()
        
        homeMenuPanelStatus = 'closed'
    }
}

var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
homeHeaderLink.onclick = function(event) {
    event.preventDefault()

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}
var logoTrello = document.createElement('img')
logoTrello.src = 'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'
logoTrello.className = ' h-20 w-40'
 homeHeaderLink.append(logoTrello)

var userName = document.createElement('span')
userName.innerText = 'User Name'
userName.className = 'font-extrabold italic  my-8 ml-3'


/*var searchButton = document.createElement('button')
searchButton.className ='material-symbols-outlined'
searchButton.innerText = 'Search'*/

var homeHeaderTopPanel = document.createElement('div')
homeHeaderTopPanel.className = 'flex justify-between'

/*var homeHeaderTopPanelRight = document.createElement('div')
homeHeaderTopPanelRight.append(searchButton, homeMenuButton)*/

/*var homeHeaderTopPanelLeft = document.createElement('div')*/

/*homeHeaderTopPanelLeft.append(userName, logoTrello)*/
homeHeaderTopPanel.append(userName, homeHeaderLink, homeMenuButton)



homeHeader.append(homeHeaderTopPanel)
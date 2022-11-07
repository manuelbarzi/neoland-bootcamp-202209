var headerPanel = document.createElement('header')

var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
homeHeaderLink.onclick = function(event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}


var headerImage = document.createElement('img')
headerImage.src = 'https://fakeimg.pl/50x25/282828/eae0d0/?retina=1&text=HOLA!'

homeHeaderLink.append(headerImage)

var headerNameText = document.createElement('span')
headerNameText.innerText = 'User Name'
headerNameText.className = 'container container--full-height container--padding-h-m'

var headerMenuButton = document.createElement('button')
headerMenuButton.className = 'material-symbol-outlined'
headerMenuButton.innerText = 'menu'

var headerMenuPanelStatus = 'closed'

headerMenuButton.onclick = function() {
    if(headerMenuPanelStatus === 'closed') {
        headerPanel.append(menuPanel)

        headerMenuPanelStatus = 'opened'
    } else {
        menuPanel.remove()

        headerMenuPanelStatus = 'closed'
    }
}

var headerTopPanel = document.createElement('div')
headerTopPanel.className = 'container container--row container--full-width container--content-space-between'

headerTopPanel.append(homeHeaderLink, headerNameText, headerMenuButton)

headerPanel.className = 'container container--full-full-width'
headerPanel.append(headerTopPanel)
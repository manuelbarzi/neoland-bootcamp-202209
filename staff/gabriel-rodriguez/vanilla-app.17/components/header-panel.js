const headerPanel = document.createElement('header')

const headerHomeLink = document.createElement('a')
headerHomeLink.href = ''
headerHomeLink.onclick = function(event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}

const headerImage = document.createElement('img')
headerImage.src = 'https://fakeimg.pl/50x25/?text=hola%20mundo&font=lobster'

headerHomeLink.append(headerImage)

const headerUserNameText = document.createElement('span')
headerUserNameText.innerText = 'User Name'
headerUserNameText.className = 'container container--full-height container--padding-h-s'

const addTaskButton = document.createElement('button')
addTaskButton.className = 'material-symbols-outlined'
addTaskButton.innerText = 'add'

addTaskButton.onclick = function() {
    try {
        createTask(user.email)

        clearTasksCards()
    
        renderTasksCards()
    } catch(error) {
        alert(error.message)
    }
}

const headerMenuButton = document.createElement('button')
headerMenuButton.className = 'material-symbols-outlined'
headerMenuButton.innerText = 'menu'

let headerMenuPanelStatus = 'closed'

headerMenuButton.onclick = function() {
    if (headerMenuPanelStatus === 'closed') {
        headerPanel.append(menuPanel)

        headerMenuPanelStatus = 'opened'
    } else {
        menuPanel.remove()

        headerMenuPanelStatus = 'closed'
    }
}

const headerTopPanel = document.createElement('div')
headerTopPanel.className = 'container container--row container--full-width container--content-space-between'

headerTopPanel.append(headerHomeLink, headerUserNameText, addTaskButton, headerMenuButton)

headerPanel.className = 'container container--full-width'
headerPanel.append(headerTopPanel)
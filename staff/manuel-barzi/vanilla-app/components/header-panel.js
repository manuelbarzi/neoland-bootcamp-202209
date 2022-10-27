const headerPanel = document.createElement('header')

const headerHomeLink = document.createElement('a')
headerHomeLink.href = ''
headerHomeLink.onclick = function(event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuButton.innerText = 'menu'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}

const headerImage = document.createElement('img')
headerImage.src = 'https://fakeimg.pl/50x25/?text=hola%20mundo&font=lobster'

headerHomeLink.append(headerImage)

const headerUserNameText = document.createElement('span')
headerUserNameText.innerText = 'User Name'
//headerUserNameText.className = ''

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

headerMenuButton.onclick = function() {
    if (headerMenuButton.innerText === 'menu') {
        headerPanel.append(menuPanel)

        headerMenuButton.innerText = 'close'
    } else {
        menuPanel.remove()

        headerMenuButton.innerText = 'menu'
    }
}

const headerTopPanel = document.createElement('div')
headerTopPanel.className = 'flex justify-between'

headerTopPanel.append(headerHomeLink, headerUserNameText, addTaskButton, headerMenuButton)

headerPanel.className = 'flex flex-col'
headerPanel.append(headerTopPanel)

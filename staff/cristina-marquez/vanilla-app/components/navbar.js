// Shared variables
const isContextualMenuActive = false

// DOM definitions

const navBar = document.createElement('header')
navBar.classList = ['homepage-header']


// Create left group container
const navBarLeftGroup = document.createElement('div')
navBarLeftGroup.className = 'homepage-header-left-group'

// Create right group container
const navBarRightGroup = document.createElement('div')
navBarRightGroup.className = 'homepage-header-right-group'


// Left container elements
const navBarHomeIcon = document.createElement('span')
navBarHomeIcon.innerText = 'home'
navBarHomeIcon.className = 'material-symbols-outlined header-icons'

const navBarNewTaskIcon = document.createElement('span')
navBarNewTaskIcon.innerText = 'add'
navBarNewTaskIcon.className = 'material-symbols-outlined header-icons'


navBarNewTaskIcon.onclick = function () {
    createTaskCard(currentUser.email)
    clearTasksCards()
    renderTasks()
}

// Append all elements to group
navBarLeftGroup.append(navBarHomeIcon)


// Right container elements
const userNameSpan = document.createElement('span')
userNameSpan.innerText = ''
userNameSpan.id = 'username-header-span'

const navBarMenuIcon = document.createElement('span')
navBarMenuIcon.innerText = 'menu'
navBarMenuIcon.className = 'material-symbols-outlined header-icons'


// Append all elements to group
navBarRightGroup.append(userNameSpan, navBarNewTaskIcon, navBarMenuIcon)


// Event handlers
navBarHomeIcon.onclick = function (event) {
    event.preventDefault();

    settingsComponent.remove()
    homePage.append(tasksComponent)
}

navBarMenuIcon.onclick = function (event) {
    event.preventDefault();

    if (isContextualMenuActive) {
        // Hide it
        contextualMenuComponent.remove()
        isContextualMenuActive = false
    } else {
        // Show it
        navBar.append(contextualMenuComponent)
        isContextualMenuActive = true
    }
}

navBar.append(navBarLeftGroup, navBarRightGroup)


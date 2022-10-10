//TODO:change status

// Shared variables
var isContextualMenuActive = false

// DOM definitions

var navBar = document.createElement('header')
navBar.classList = ['homepage-header']


// Create left group container
var navBarLeftGroup = document.createElement('div')
navBarLeftGroup.className = 'homepage-header-left-group'

// Create right group container
var navBarRightGroup = document.createElement('div')
navBarRightGroup.className = 'homepage-header-right-group'


// Left container elements
var navBarHomeIcon = document.createElement('span')
navBarHomeIcon.innerText = 'home'
navBarHomeIcon.className = 'material-symbols-outlined header-icons'

var navBarNewTaskIcon = document.createElement('span')
navBarNewTaskIcon.innerText = 'add'
navBarNewTaskIcon.className = 'material-symbols-outlined header-icons'

//TODO:onclick

navBarNewTaskIcon.onclick = function () {
    var result = createTask(currentUser.email)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    clearTasksCards()

    renderTasksCards()
}

// Append all elements to group
navBarLeftGroup.append(navBarHomeIcon)


// Right container elements
var userNameSpan = document.createElement('span')
userNameSpan.innerText = ''
userNameSpan.id = 'username-header-span'

var navBarMenuIcon = document.createElement('span')
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


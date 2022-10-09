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
navBarRightGroup.append(userNameSpan, navBarMenuIcon)



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


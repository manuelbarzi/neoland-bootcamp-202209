//TODO: settings panel

// Shared variables
var isContextualMenuActive = false


var homePage = document.createElement('main')

var homepageHeader = document.createElement('header')
homepageHeader.classList = ['homepage-header']


// Create left group container
var homepageHeaderLeftGroup = document.createElement('div')
homepageHeaderLeftGroup.className = 'homepage-header-left-group'

// Create right group container
var homepageHeaderRightGroup = document.createElement('div')
homepageHeaderRightGroup.className = 'homepage-header-right-group'


// Left container elements
var homepageHomeIcon = document.createElement('span')
homepageHomeIcon.innerText = 'home'
homepageHomeIcon.className = 'material-symbols-outlined header-icons'


// Append all elements to group
homepageHeaderLeftGroup.append(homepageHomeIcon)


// Right container elements
var userNameSpan = document.createElement('span')
userNameSpan.innerText = ''
userNameSpan.id = 'username-header-span'

var homepageContextualMenu = document.createElement('span')
homepageContextualMenu.innerText = 'menu'
homepageContextualMenu.className = 'material-symbols-outlined header-icons'



// Append all elements to group
homepageHeaderRightGroup.append(userNameSpan, homepageContextualMenu)



// Event handlers
homepageContextualMenu.onclick = function (event) {
    event.preventDefault();

    if (isContextualMenuActive) {
        // Hide it
        contextualMenu.remove()
        isContextualMenuActive = false
    } else {
        // Show it
        homePage.append(contextualMenu)
        isContextualMenuActive = true
    }
}

homepageHeader.append(homepageHeaderLeftGroup, homepageHeaderRightGroup)
homePage.append(homepageHeader)


// Create contextual menu
var contextualMenu = document.createElement('div')
contextualMenu.className = 'contextual-menu'

// Contextual menu elements
var contextualMenuSettings = document.createElement('span')
contextualMenuSettings.innerText = 'settings'
contextualMenuSettings.className = 'material-symbols-outlined contextual-menu-element'


var contextualMenuLogout = document.createElement('span')
contextualMenuLogout.innerText = 'exit_to_app'
contextualMenuLogout.className = ' material-symbols-outlined contextual-menu-element'

contextualMenu.append(contextualMenuSettings, contextualMenuLogout)

contextualMenuLogout.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'login')

    homePage.remove()
    document.body.append(loginPage)
}

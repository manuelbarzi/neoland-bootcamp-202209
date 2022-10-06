

var homeHeader = document.createElement('header')
homeHeader.className= 'home-header'

var homeNav = document.createElement('nav')
homeNav.className= 'home-nav'

var homeContenedor= document.createElement('div')
homeContenedor.className='home-contenedor'

var userNameText = document.createElement('span')
userNameText.className='username'

var menuButton = document.createElement('button')
menuButton.className= 'material-symbols-outlined menu-button'
menuButton.innerText= 'Menu'

var menuStatus = 'closed'

menuButton.onclick= function(event){
    event.preventDefault()

    if( menuStatus==='closed'){
    homeNav.append(menuContenedor)
        menuStatus= 'open'
    } else {
        menuContenedor.remove()
        menuStatus= 'closed'
    }
}

var menuContenedor = document.createElement('div')
menuContenedor.className ='contenedor--menu'

var logOut = document.createElement('a')
logOut.className='menu--links'
logOut.innerText='Log Out'
logOut.href= ''
logOut.onclick = function(event){
    event.preventDefault()

    user= null

    settingsPanel.remove()
    userNameText.remove()
    homeContenedor.remove()
    homeLinkHome.remove()
    menuButton.remove()
    menuContenedor.remove()
    menuStatus= 'closed'
    document.body.append(loginDivContenedor, )
}

var settings = document.createElement('a');
settings.innerText= 'Settings'
settings.href=''
settings.className='menu--links'
settings.onclick = function(event){
    event.preventDefault()

    menuContenedor.remove()
    menuStatus= 'closed'
    homeContenedor.remove()
    settingsEmailInput.value= user.email
    settingsEmailInput.placeholder= 'Put a new E-Mail'
    document.body.append(settingsPanel)

}

var homeLinkHome = document.createElement('a');
homeLinkHome.href=''
homeLinkHome.innerText='Home'
homeLinkHome.className='home-link-home'
homeLinkHome.onclick = function (event) {
    event.preventDefault()

    settingsPanel.remove()
    document.body.append(homeContenedor)
}



var homeTitle = document.createElement('h1')
homeTitle.className= 'home-title'
homeTitle.innerText='GameOver'

var homeTasksTitle = document.createElement('h2')
homeTasksTitle.innerText='Tasks'
homeTasksTitle.className='tasks-title'

homeContenedor.append(homeTasksTitle)
menuContenedor.append(settings, logOut)
homeNav.append(homeTitle,userNameText)
homeHeader.append(homeNav)

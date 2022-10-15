var homeHeader = document.createElement('header')
homeHeader.className= 'home-header'

var homeNav = document.createElement('nav')
homeNav.className= 'home-nav'



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



var homeLinkHome = document.createElement('a');
homeLinkHome.href=''
homeLinkHome.innerText='Home'
homeLinkHome.className='home-link-home'
homeLinkHome.onclick = function (event) {
    event.preventDefault()

    tasksTodoForm.reset()
    menuContenedor.remove()
    menuStatus= 'closed'
    settingsPanel.remove()
    document.body.append(homeContenedor)
}



var homeTitle = document.createElement('h1')
homeTitle.className= 'home-title'
homeTitle.innerText='GameOver'
const homeHeader = document.createElement('header')
homeHeader.className= 'home-header'

const homeNav = document.createElement('nav')
homeNav.className= 'home-nav'



const userNameText = document.createElement('span')
userNameText.className='username'

const menuButton = document.createElement('button')
menuButton.className= 'material-symbols-outlined menu-button'
menuButton.innerText= 'Menu'

let menuStatus = 'closed'

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



const homeLinkHome = document.createElement('a');
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



const homeTitle = document.createElement('h1')
homeTitle.className= 'home-title'
homeTitle.innerText='GameOver'
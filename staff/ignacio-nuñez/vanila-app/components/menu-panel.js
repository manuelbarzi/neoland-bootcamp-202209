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
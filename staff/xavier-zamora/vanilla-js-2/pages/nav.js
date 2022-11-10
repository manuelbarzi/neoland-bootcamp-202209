//-------------THIS IS NAV----------------------
var header = document.createElement('header')
var userName = document.createElement('h3')
var imgDivHeader = document.createElement('img')
var nav = document.createElement('nav')
var imgNavHeader = document.createElement('img')
var divHeader = document.createElement('div')
var divBeforeHeader = document.createElement('div')

userName.innerHTML = "name@email.com"

//header
header.append(divHeader)
divHeader.append(imgDivHeader)
divHeader.append(userName)
divHeader.className = "flex"
header.append(nav)
nav.append(imgNavHeader)
imgNavHeader.src = "https://static.thenounproject.com/png/2254175-200.png"
imgNavHeader.height = "30"
imgNavHeader.width = "30"
imgNavHeader.style.marginRight = "1rem"
header.className = "apply-position-top flex nav-items"
imgDivHeader.src = "https://thumbs.dreamstime.com/b/icono-de-la-cuenta-de-usuario-ejemplo-s%C3%B3lido-del-logotipo-de-la-persona-pictog-90235639.jpg"
imgDivHeader.style.marginLeft = "1rem"
imgDivHeader.height = "40"
imgDivHeader.width = "40"

//divBeforeHeader
openHeaderPanel = false

imgNavHeader.onclick = function(){
if (openHeaderPanel === false){
    openHeaderPanel = true
    log('DEBUG', 'open headerPanel')
    header.className = "apply-position-open flex nav-items"
    header.style.height = "3rem"
    body.append(divBeforeHeader)
}
else{
    openHeaderPanel = false
    log('DEBUG', 'close headerPanel')
    header.className = "apply-position-top flex nav-items"
    divBeforeHeader.remove()
}
}

var logOutHeader = document.createElement('h3')
divBeforeHeader.className = "divBeforeHeader"
divBeforeHeader.append(logOutHeader)
logOutHeader.textContent = "LOGOUT"

//-------------FINISH NAV-----------------------
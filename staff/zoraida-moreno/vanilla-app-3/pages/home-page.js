log('DEBUG', 'mount home')

var homeHeader = document.createElement('header')

var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''

var homeHeaderImage = document.createElement('img')
homeHeaderImage.src = 'https://fakeimg.pl/50x25/282828/eae0d0/?retina=1&text=HOLA!'
homeHeaderLink.append(homeHeaderImage)

var homeUserNameText = document.createElement('span')
homeUserNameText.innerText = 'User Name'
homeUserNameText.className = 'container container--full-height container--padding-h-m'


homeHeader.append(homeHeaderLink, homeUserNameText)
homeHeader.className = 'container container--row container--full-width container--content-space-between'

var homePage = document.createElement ('main')
homePage.className = 'container container--full container--content-start'

homePage.append(homeHeader)
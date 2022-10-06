var homePage = document.createElement('main')

var homepageHeader = document.createElement('header')
homepageHeader.classList = ['homepage-header']



var userNameSpan = document.createElement('span')
userNameSpan.innerText = 'John Doe'
userNameSpan.id = 'username-header-span'

homepageHeader.append(userNameSpan)


homePage.append(homepageHeader)
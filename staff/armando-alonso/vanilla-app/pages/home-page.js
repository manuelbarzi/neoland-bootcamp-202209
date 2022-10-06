log("DEBUG", "mount home");

var homeNav = document.createElement("nav");
homeNav.classList.add("navbar");

var homeLogo = document.createElement("img")
homeLogo.classList.add('logo')
homeLogo.src = 'https://cdn-icons-png.flaticon.com/512/1200/1200328.png'

var homeUser = document.createElement('span')
homeUser.classList.add('profile');
homeUser.innerText = 'User'

var homeDiv = document.createElement('div')
homeDiv.classList.add("news");

var homeButton = document.createElement("button");
homeButton.classList.add("desplegable");
homeButton.innerText = "Home";

var homeContent = document.createElement("div");
homeContent.classList.add("news-content");

var homeFirst = document.createElement("a");
homeFirst.innerText = "Sports";
homeFirst.href = "#";

var homeSecond = document.createElement("a");
homeSecond.innerText = "Regional";
homeSecond.href = "#";

var homeThird = document.createElement("a");
homeThird.innerText = "Intermantional";
homeThird.href = "#";

var homeSection = document.createElement('section')
homeSection.classList.add('cuerpo', 'cuerpo--contenedor')

var homeFirstColumn = document.createElement('article')
homeFirstColumn.classList.add('columna')

var homeSecondColumn = document.createElement('article')
homeSecondColumn.classList.add('columna')

var homeThirdColumn = document.createElement('article')
homeThirdColumn.classList.add('columna')

var homeFourthColumn = document.createElement('article')
homeFourthColumn.classList.add('columna')

var homeFifthColumn = document.createElement('article')
homeFifthColumn.classList.add('columna')

var homeSixthColumn = document.createElement('article')
homeSixthColumn.classList.add('columna')

homeContent.append(homeFirst, homeSecond, homeThird);
homeDiv.append(homeButton, homeContent);
homeNav.append(homeLogo, homeDiv, homeUser);
homeSection.append(homeFirstColumn, homeSecondColumn, homeThirdColumn, homeFourthColumn, homeFifthColumn, homeSixthColumn)

var homePage = document.createElement("main");
homePage.classList.add("container--home");
homePage.append(homeNav, homeSection);

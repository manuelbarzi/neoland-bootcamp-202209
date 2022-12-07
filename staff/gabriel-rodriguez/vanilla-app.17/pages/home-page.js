log('DEBUG', 'mount home')

const homePage = document.createElement('main')
homePage.className = 'container container--full container--content-start' 

homePage.append(headerPanel, tasksPanel)
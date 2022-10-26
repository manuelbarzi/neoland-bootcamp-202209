log('DEBUG', 'mount home')

const homePage = document.createElement('main')
homePage.className = 'h-full w-full' 

homePage.append(headerPanel, tasksPanel)

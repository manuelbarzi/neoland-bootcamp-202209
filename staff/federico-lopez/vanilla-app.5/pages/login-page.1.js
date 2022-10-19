log('DEBUG', 'mount login')

var loginForm = document.createElement('form')
loginForm.className = 'container'

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginEmailInput.value
    var password = loginPasswordInput.value

    var result = authenticateUser(email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    user = result

    loginForm.reset()

    loginPage.remove()
    
    headerUserNameText.innerText = user.name

    var myTasksCards = tasksPanel.querySelectorAll('article')

    for (var i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }

    var myTasks = retrieveTasks(user.email)

    for (var i = 0; i < myTasks.length; i++) {
        var myTask = myTasks[i]

        var myTaskCard = createTaskCard(myTask.text)

        if (myTask.status === 'todo')
            tasksTodoColumn.append(myTaskCard)
        else if (myTask.status === 'doing')
            tasksDoingColumn.append(myTaskCard)
        else if (myTask.status === 'done')
            tasksDoneColumn.append(myTaskCard)
    }

    document.body.append(homePage)
}

var loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'login-email'
loginEmailLabel.className = 'container__item--left'
loginEmailLabel.innerText = 'E-mail'

var loginEmailInput = document.createElement('input')
loginEmailInput.type = 'email'
loginEmailInput.id = 'login-email'
loginEmailInput.placeholder = 'input your e-mail'

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'login-password'
loginPasswordLabel.className = 'container__item--left'
loginPasswordLabel.innerText = 'Password'

var loginPasswordInput = document.createElement('input')
loginPasswordInput.type = 'password'
loginPasswordInput.id = 'login-password'
loginPasswordInput.placeholder = 'input your password'

var loginSubmitButton = document.createElement('button')
loginSubmitButton.className = 'container__item--right'
loginSubmitButton.innerText = 'Login'

loginForm.append(loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, loginSubmitButton)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ""
loginRegisterLink.innerText = 'Register'

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

var loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(loginForm, loginRegisterLink)
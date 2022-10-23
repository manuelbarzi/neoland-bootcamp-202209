const tasksComponent = document.createElement('section')
tasksComponent.className = 'flex flex-col items-center'


const tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'text-4xl m-5'

const tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'flex-column sm:flex w-11/12 sm:w-3/4 justify-around'

const tasksTodoColumn = document.createElement('section')
tasksTodoColumn.className = 'flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md'

const taskTodoHeader = document.createElement('div')
taskTodoHeader.innerText = 'TODO'
taskTodoHeader.className = `task-column-header pt-5 pl-5 pb-5 bg-${cssPrimaryColor} rounded-t-md text-${cssPrimaryColorText}`
tasksTodoColumn.append(taskTodoHeader)

const tasksInProgressColumn = document.createElement('section')
tasksInProgressColumn.className = 'flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md'

const taskInProgressHeader = document.createElement('div')
taskInProgressHeader.innerText = 'IN PROGRESS'
taskInProgressHeader.className = `task-column-header pt-5 pl-5 pb-5 bg-${cssPrimaryColor} rounded-t-md text-${cssPrimaryColorText}`
tasksInProgressColumn.append(taskInProgressHeader)

const tasksCompletedColumn = document.createElement('section')
tasksCompletedColumn.className = 'flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md'

const taskCompletedHeader = document.createElement('div')
taskCompletedHeader.innerText = 'COMPLETED'
taskCompletedHeader.className = `task-column-header pt-5 pl-5 pb-5 bg-${cssPrimaryColor} rounded-t-md text-${cssPrimaryColorText}`
tasksCompletedColumn.append(taskCompletedHeader)

tasksContentPanel.append(tasksTodoColumn, tasksInProgressColumn, tasksCompletedColumn)

tasksComponent.append(tasksTitle, tasksContentPanel)




function createTaskCardElement(text, userEmail, id) {
    const taskCardContainer = document.createElement('div')
    taskCardContainer.className = 'task-component mx-3 my-2 flex justify-between'

    const taskCardArticle = document.createElement('article')
    taskCardArticle.innerText = text
    taskCardArticle.className = 'task-card'
    taskCardArticle.contentEditable = true

    const taskCardDeleteIcon = document.createElement('span')
    taskCardDeleteIcon.innerText = 'delete'
    taskCardDeleteIcon.className = 'material-symbols-outlined task-component delete-icon'

    taskCardContainer.append(taskCardArticle, taskCardDeleteIcon)

    taskCardArticle.onkeyup = function () {
        var error = updateTaskText(userEmail, id, taskCardArticle.innerText)

        if (error) {
            log('ERROR', error)
        }
    }

    taskCardDeleteIcon.onclick = function () {
        deleteTaskCard(id)
        clearTasksCards()
        renderTasks()

    }
    return taskCardContainer
}



function renderTasks() {
    const retrievedUserTasks = retrieveTasks(currentUser.email)

    for (let i = 0; i < retrievedUserTasks.length; i++) {
        const dbTask = retrievedUserTasks[i];

        const taskText = dbTask.text
        const taskStatus = dbTask.status
        const taskId = dbTask.id

        const task = createTaskCardElement(taskText, currentUser.email, taskId)

        if (taskStatus === 'TODO') {
            tasksTodoColumn.append(task)
        }
        if (taskStatus === 'IN PROGRESS') {
            tasksInProgressColumn.append(task)
        }
        if (taskStatus === 'COMPLETED') {
            tasksCompletedColumn.append(task)
        }
    }

}

function clearTasksCards() {
    const myTasksCards = tasksComponent.querySelectorAll('.task-component')

    for (let i = 0; i < myTasksCards.length; i++) {
        const myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }
}
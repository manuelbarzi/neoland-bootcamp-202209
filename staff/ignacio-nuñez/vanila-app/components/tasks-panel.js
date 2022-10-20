
const tasksPanel = document.createElement('section')
tasksPanel.className = 'container-flex full-width justify-content-start'

const tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'tasks-title align-self-center'


const tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container-flex flex-rows align-items-start color-bisque'

const tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'padding-s'

const todoContenedor = document.createElement('div')
todoContenedor.className = 'container-flex-tasks  border-and-radius padding-s container-color min-heigth-width'

const tasksTodoForm = document.createElement('form')
tasksTodoForm.className = 'container-flex-tasks-button container-color'
tasksTodoForm.onsubmit = function (event) {
    event.preventDefault()

    const text = ''

    try {
        createTask(user.email, text)

        clearTaskCard()
        renderTasksCards()
    }
    catch (error) {
        alert(error.message)
    }
}

function createTaskCard(taskId, taskText){

    const taskCard = document.createElement('article')
    taskCard.innerText = taskText
    taskCard.className = 'new-task-card'
    taskCard.contentEditable = true

    taskCard.onkeyup = function(){

        const updateMyTask = updateTask()
    }
    return taskCard
}


const insertNewTaskButton = document.createElement('button')
insertNewTaskButton.className = 'material-symbols-outlined'
insertNewTaskButton.innerText = 'add'

const doingContenedor = document.createElement('div')
doingContenedor.className = 'container-flex-tasks border-and-radius padding-s container-color min-heigth-width'

const tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'padding-s'


const doneContenedor = document.createElement('div')
doneContenedor.className = 'container-flex-tasks border-and-radius padding-s container-color min-heigth-width'

const tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'padding-s'


function clearTaskCard() {

    const taskCardSelections = tasksContentPanel.querySelectorAll('article')

    for (i = 0; i < taskCardSelections.length; i++) {

        const taskCardSelection = taskCardSelections[i]

        taskCardSelection.remove()
    }
}

function renderTasksCards() {
    try {
        const renderTasks = retrieveTasks(user.email)

        for (i = 0; i < renderTasks.length; i++) {
            const renderTask = renderTasks[i]

            const myTaskCard = createTaskCard(renderTask.id, renderTask.text)

            if (renderTask.status === 'todo')
                tasksTodoColumn.append(myTaskCard)

            else if (renderTask.status === 'doing')
                tasksDoingColumn.append(myTaskCard)

            else if (renderTask.status === 'done')
                tasksDoneColumn.append(myTaskCard)
        }
    }
    catch (error) {
        alert(error.message)
    }
}

tasksTodoForm.append(insertNewTaskButton)
todoContenedor.append(tasksTodoColumn, tasksTodoForm)
doingContenedor.append(tasksDoingColumn)
doneContenedor.append(tasksDoneColumn)
tasksContentPanel.append(todoContenedor, doingContenedor, doneContenedor)

tasksPanel.append(tasksTitle, tasksContentPanel)
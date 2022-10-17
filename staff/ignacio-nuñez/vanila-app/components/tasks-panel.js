
var tasksPanel = document.createElement('section')
tasksPanel.className = 'container-flex full-width justify-content-start'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'tasks-title align-self-center'


var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container-flex flex-rows align-items-start color-bisque'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'padding-s'

var todoContenedor = document.createElement('div')
todoContenedor.className = 'container-flex-tasks  border-and-radius padding-s container-color min-heigth-width'

var tasksTodoForm = document.createElement('form')
tasksTodoForm.className = 'container-flex-tasks-button container-color'
tasksTodoForm.onsubmit = function (event) {
    event.preventDefault()

    var text = ''

    var result = createTask(user.email, text)

}


var insertNewTaskButton = document.createElement('button')
insertNewTaskButton.className = 'material-symbols-outlined'
insertNewTaskButton.innerText = 'add'

var doingContenedor = document.createElement('div')
doingContenedor.className = 'container-flex-tasks border-and-radius padding-s container-color min-heigth-width'

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'padding-s'


var doneContenedor = document.createElement('div')
doneContenedor.className = 'container-flex-tasks border-and-radius padding-s container-color min-heigth-width'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'padding-s'


function clearTaskCard() {

    var taskCardSelections = tasksContentPanel.querySelectorAll('article')

    for (i = 0; i < taskCardSelections.length; i++) {

        var taskCardSelection = taskCardSelections[i]

        taskCardSelection.remove()
    }
}

function createTaskCard() {

    clearTaskCard()

    var email = user.email

    var renderTasks = retrieveTasks(email)


    for (i = 0; i < renderTasks.length; i++) {

        var renderTask = renderTasks[i]

        var taskCard = document.createElement('article')
        taskCard.innerText = renderTask.text
        taskCard.className = 'new-task-card'
        taskCard.contentEditable = true

        if (renderTask.status === 'todo')
            tasksTodoColumn.append(taskCard)

        else if (renderTask.status === 'doing')
            tasksDoingColumn.append(taskCard)

        else if (renderTask.status === 'done')
            tasksDoneColumn.append(taskCard)

    }


}


tasksTodoForm.append(insertNewTaskButton)
todoContenedor.append(tasksTodoColumn, tasksTodoForm)
doingContenedor.append(tasksDoingColumn)
doneContenedor.append(tasksDoneColumn)
tasksContentPanel.append(todoContenedor, doingContenedor, doneContenedor)

tasksPanel.append(tasksTitle, tasksContentPanel)
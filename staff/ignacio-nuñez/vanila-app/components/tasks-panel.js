
var tasksPanel = document.createElement('section')
tasksPanel.className = 'container-flex full-width justify-content-start'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'tasks-title align-self-center'


var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container-flex flex-rows align-items-start border-and-radius container-color'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'padding-s'

var todoContenedor = document.createElement('div')
todoContenedor.className = 'container-flex align-items-start border-and-radius padding-s'

var tasksTodoForm = document.createElement('form')
tasksTodoForm.className = 'container-flex align-items-start container-color'
tasksTodoForm.onsubmit = function (event) {
    event.preventDefault()

    var text = insertNewTaskText.value

    var result = createTask(user.email, text)

}



var insertNewTaskText = document.createElement('textarea')
insertNewTaskText.className = 'border-and-radius margin-top'
insertNewTaskText.placeholder = 'Put your new task'

var insertNewTaskButton = document.createElement('button')
insertNewTaskButton.className = 'material-symbols-outlined align-self-end'
insertNewTaskButton.innerText = 'add'


var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'padding-s'

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
        taskCard.className = ''

        if (renderTask.status === 'todo')
            tasksTodoColumn.append(taskCard)

        else if (renderTask.status === 'doing')
            tasksDoingColumn.append(taskCard)

        else if (renderTask.status === 'done')
            tasksDoneColumn.append(taskCard)

    }


}


tasksTodoForm.append(insertNewTaskText, insertNewTaskButton)
todoContenedor.append(tasksTodoColumn, tasksTodoForm)
tasksContentPanel.append(todoContenedor, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)





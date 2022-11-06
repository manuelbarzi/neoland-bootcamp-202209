var tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container container--border container--padding-s container--items-start'
//!nuevo */
var taskForm = document.createElement('form')
taskForm.className = 'container'

var taskFormInput = document.createElement('input')
taskFormInput.type = "text"
taskFormInput.name = "taskText"
taskFormInput.placeholder = "Nueva Tarea"

var taskFormButton = document.createElement('button')
taskFormButton.textContent = '+'
taskFormButton.type = 'submit'

taskForm.append(taskFormInput, taskFormButton)

const textFormTask = function (event) {
    event.preventDefault();
    if(!value){
        return
    }
    const task = document.createElement('div')
    task.classList.add('task', 'rounBorder')
    task.addEventListener('click', changeTaskState)
    task.textContent = value
    tasksTodoColumn.append(textFormTask)
    event.target.reset
}
const changeTaskState = funtion(event){
    event.target.classList.toggle()
}
const order = function(){
    var toDo = []
    tasksTodoColumn.childNodes.forEach(funtion(el){
        el
    })
}


var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container container--border container--padding-s'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'container container--border container--padding-s'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle,taskForm, tasksContentPanel)//!nuevo

function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'container container--border container--padding-s container--full-width'

    return taskCard
}
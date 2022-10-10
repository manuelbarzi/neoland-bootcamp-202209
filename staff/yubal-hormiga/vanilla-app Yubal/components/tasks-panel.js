var tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = ' container  container--border container--padding-s container--items-start'

//! CREATING FORM
var taskForm = document.createElement('form')
taskForm.className = 'container '

var taskFormInput = document.createElement('input')
taskFormInput.type = "text"
taskFormInput.name = "taskText"
taskFormInput.placeholder = "Nueva Tarea"

var taskFormButton = document.createElement('button')
taskFormButton.textContent = '+'
taskFormButton.type = 'submit'

taskForm.append(taskFormInput, taskFormButton)



//! FUNTION INCLUDING TASK

function addTask(event) {
    event.preventDefault()
    //* Created Div Task
    var task = document.createElement('div')
   
    //* Created Div Buttons and elements
    var buttons = document.createElement('div')
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList = 'deleteButton'

    var doingButton = document.createElement('button')
    doingButton.textContent = 'Doing'
    doingButton.classList = 'doingButton'
    buttons.append(deleteButton,doingButton )
    
    //*Included Buttons in Task
    task.append(buttons)

    //*Included class task
    task.classList = ( 'container', 'container--border', 'container--paddind-s', 'container--items-start')
    
    //* Value of Text Input
    var textContent = (taskFormInput.value)
    
    //* Included texContent and Buttons in task
    task.append(textContent, buttons)
    
    
    //*Value of textContent 
    var taskContend = taskFormInput.value
    if(taskContend === ''){
        taskFormInput.setAttribute('placeholder', 'Agrega una tarea válida') 
        return false
    }
    tasksTodoColumn.append(task)

    
   
    deleteButton.addEventListener('click', deletteTask)

    function deletteTask(event) {    
    event.preventDefault()
            
    alert('èstoy')
   }  

   

}

    



//*Event
taskFormButton.addEventListener('click', addTask)




var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container container--border container--padding-s'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'container container--border container--padding-s'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle,taskForm, tasksContentPanel)

function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'container container--border container--padding-s container--full-width'

    return taskCard
}
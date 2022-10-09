var tasksPanel = document.createElement('section')
tasksPanel.className = ' container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'container'


var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container--border container--padding-s container--items-start'

var taskCard = createTaskCard('buy milk')
tasksTodoColumn.append(taskCard)


var taskCard2 = createTaskCard('buy eggs')
tasksTodoColumn.append(taskCard2)


var taskCard3 = createTaskCard('buy tomatoes')
tasksTodoColumn.append(taskCard3)

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container--border container--padding-s'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = ' container--border container--padding-s'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)



function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    
    
    taskCard.className = 'container container--border-i container--padding-s container--full-width'

    return taskCard
}
 var buttonTasks = document.createElement ('button')
 buttonTasks.className ='button-tasks  container--padding-s container--full-width'
 buttonTasks.innerText = '+ Add task'
// ESTA BIEN?
 buttonTasks.onsubmit = function (createTaskCard) {
    createTaskCard.preventDefault();
    
    var result = buttonTasksInput.value
   
    
    if (result instanceof Error) {
        alert(result.message)
    
        return
      }
      taskCard = result
      buttonTasksInput.reset();
      document.body.append(tasksTodoColumn)
  }
 
var buttonTasksInput = document.createElement ('input')
buttonTasksInput.placeholder = 'Write a task'

var addTask = document.createElement('div')
addTask.className = 'container'

addTask.append(buttonTasksInput, buttonTasks)
tasksPanel.append(tasksTitle,tasksContentPanel, addTask)
/* buttonTasks.addEventListener('click') {
    var task = input.value
    if(task) {
        addTask(task)
    }
    input.value = ''
 }*/
 

//tasksTodoColumn.append(buttonTasks)
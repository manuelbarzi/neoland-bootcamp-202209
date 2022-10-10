var tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-with'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksColumnTodo = document.createElement('section')
tasksColumnTodo.className = 'container container--border container--padding-s container--items-start'
tasksColumnTodo.innerText = 'ToDo Column'

var tasktodoone = document.createElement('article')
tasktodoone.className = 'container container--border container--padding-s container--full-width'
tasktodoone.innerText = 'Prueba primera tarea'

var taskTodoOne = document.createElement('article')
taskTodoOne.className = 'container container--border container--padding-s container--full-width'
taskTodoOne.innerText = 'Prueba primera tarea'

var taskTodoTwo = document.createElement('article')
taskTodoTwo.className = 'container container--border container--padding-s container--full-width'
taskTodoTwo.innerText = 'Prueba segunda tarea'

var taskTodoThree = document.createElement('article')
taskTodoThree.className = 'container container--border container--padding-s container--full-width'
taskTodoThree.innerText = 'Prueba tercera tarea'

tasksColumnTodo.append(taskTodoOne, taskTodoTwo, taskTodoThree)

var tasksColumnDoing = document.createElement('section')
tasksColumnDoing.className = 'container container--border container--padding-s container--items-start'
tasksColumnDoing.innerText = 'Doing Column'

var taskDoingOne = document.createElement('article')
taskDoingOne.className = 'container container--border container--padding-s container--full-width'
taskDoingOne.innerText = 'Prueba primera tarea'

var taskDoingTwo = document.createElement('article')
taskDoingTwo.className = 'container container--border container--padding-s container--full-width'
taskDoingTwo.innerText = 'Prueba segunda tarea'

var taskDoingThree = document.createElement('article')
taskDoingThree.className = 'container container--border container--padding-s container--full-width'
taskDoingThree.innerText = 'Prueba tercera tarea'

tasksColumnDoing.append(taskDoingOne, taskDoingTwo, taskDoingThree)

var tasksColumnDone = document.createElement('section')
tasksColumnDone.className = 'container container--border container--padding-s container--items-start'
tasksColumnDone.innerText = 'Done Column'

var taskDoneOne = document.createElement('article')
taskDoneOne.className = 'container container--border container--padding-s container--full-width'
taskDoneOne.innerText = 'Prueba primera tarea'

var taskDoneTwo = document.createElement('article')
taskDoneTwo.className = 'container container--border container--padding-s container--full-width'
taskDoneTwo.innerText = 'Prueba segunda tarea'

var taskDoneThree = document.createElement('article')
taskDoneThree.className = 'container container--border container--padding-s container--full-width'
taskDoneThree.innerText = 'Prueba tercera tarea'

tasksColumnDone.append(taskDoneOne, taskDoneTwo, taskDoneThree)

tasksContentPanel.append(tasksColumnTodo, tasksColumnDoing, tasksColumnDone)
tasksPanel.append(tasksTitle, tasksContentPanel)

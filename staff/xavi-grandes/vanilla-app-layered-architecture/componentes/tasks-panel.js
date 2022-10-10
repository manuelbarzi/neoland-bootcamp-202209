var tasksPanel = document.createElement('main')
    tasksPanel.className='tasks-menu'

var tasksTitle = document.createElement('h1')
    tasksTitle.className='tasks-title'
    tasksTitle.innerText='Manage your tasks'

var tasksContentPanel = document.createElement('div')
    tasksContentPanel.className='tasks-panel'

var tasksTodoColumn = document.createElement('section')
    tasksTodoColumn.className='todo-column'
    tasksTodoColumn.innerText='TO DO'

var taskTodo = document.createElement('div')
    taskTodo.className='task-item'
    taskTodo.innerText = 'hacer la colada'

    tasksTodoColumn.append(taskTodo)

var tasksDoingColumn = document.createElement('section')
    tasksDoingColumn.className='doing-column'
    tasksDoingColumn.innerText='DOING'

var tasksDoneColumn = document.createElement('section')
    tasksDoneColumn.className='done-column'
    tasksDoneColumn.innerText='DONE'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)
    
tasksPanel.append(tasksTitle, tasksContentPanel)
var tasksPanel = document.createElement('main')
    tasksPanel.className='tasks-menu'

var tasksTitle = document.createElement('h1')
    tasksTitle.className='tasks-title'
    tasksTitle.innerText='Manage your tasks'

var tasksContentPanel = document.createElement('div')
    tasksContentPanel.className='tasks-panel'

var tasksTodoColumn = document.createElement('section')
    tasksTodoColumn.className='nombrar'
    tasksTodoColumn.innerText='TO DO'

var tasksDoingColumn = document.createElement('section')
    tasksDoingColumn.className='nombrar'
    tasksDoingColumn.innerText='DOING'

var tasksDoneColumn = document.createElement('section')
    tasksDoneColumn.className='nombrar'
    tasksDoneColumn.innerText='DONE'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)
    
tasksPanel.append(tasksTitle, tasksContentPanel)
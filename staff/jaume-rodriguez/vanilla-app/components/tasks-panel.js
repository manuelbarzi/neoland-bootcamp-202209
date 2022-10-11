/* TODO AL CAMBIAR EMAIL ACCOUNT EN SETTINGS CAMBIAR EL USUARIO EN TASK ARRAY */
/* TODO PONER EL ADD NEW TASK AL FINAL DE LA COLUMNA */

/* CREAMOS EL TASKS PANEL */
var tasksPanelSection = document.createElement("section");
tasksPanelSection.classList.add("home__main");

/* -- */
var tasksPanelHeader = document.createElement("div");
tasksPanelHeader.classList.add("home__settings__header")

tasksPanelSection.append(tasksPanelHeader);

/* -- */
var tasksPanelTitle = document.createElement("span");
tasksPanelTitle.innerText = "My Tasks";
tasksPanelTitle.classList.add("home__settings--title");

var tasksPanelSecondTitle = document.createElement("span");
tasksPanelSecondTitle.innerText = "User name";
tasksPanelSecondTitle.classList.add("home__settings--second-title");

tasksPanelHeader.append(tasksPanelTitle, tasksPanelSecondTitle);

/* -- */
var tasksPanelContent = document.createElement("div");
tasksPanelContent.classList.add("tasks__panel__content");

tasksPanelSection.append(tasksPanelContent);

/* -- */
var tasksPanelColumnTodo = document.createElement("section");
tasksPanelColumnTodo.classList.add("tasks__panel__content__column");
tasksPanelColumnTodo.innerText = "TO DO";

var tasksPanelAddTodoButton = document.createElement("button");
tasksPanelAddTodoButton.classList.add("fa");
tasksPanelAddTodoButton.classList.add("fa-plus");
tasksPanelAddTodoButton.classList.add("tasks__panel__add-button")
tasksPanelAddTodoButton.innerText = " Add new Task"

tasksPanelAddTodoButton.onclick = function() {
    var result = createTaskTodo(user.email)

    if (result instanceof Error) {
        alert(result.message)

        return
    }
    clearTasksCards()

    renderTasksCards()
}

tasksPanelColumnTodo.append(tasksPanelAddTodoButton);

/* -- */
var tasksPanelColumnDoing = document.createElement("section");
tasksPanelColumnDoing.classList.add("tasks__panel__content__column");
tasksPanelColumnDoing.innerText = "DOING";

var tasksPanelAddDoingButton = document.createElement("button");
tasksPanelAddDoingButton.classList.add("fa");
tasksPanelAddDoingButton.classList.add("fa-plus");
tasksPanelAddDoingButton.classList.add("tasks__panel__add-button")
tasksPanelAddDoingButton.innerText = " Add new Task"

tasksPanelAddDoingButton.onclick = function() {
    var result = createTaskDoing(user.email)

    if (result instanceof Error) {
        alert(result.message)

        return
    }
    clearTasksCards()

    renderTasksCards()
}

tasksPanelColumnDoing.append(tasksPanelAddDoingButton);

/* -- */
var tasksPanelColumnDone = document.createElement("section");
tasksPanelColumnDone.classList.add("tasks__panel__content__column");
tasksPanelColumnDone.innerText = "DONE";

var tasksPanelAddDoneButton = document.createElement("button");
tasksPanelAddDoneButton.classList.add("fa");
tasksPanelAddDoneButton.classList.add("fa-plus");
tasksPanelAddDoneButton.classList.add("tasks__panel__add-button")
tasksPanelAddDoneButton.innerText = " Add new Task"

tasksPanelAddDoneButton.onclick = function() {
    var result = createTaskDone(user.email)

    if (result instanceof Error) {
        alert(result.message)

        return
    }
    clearTasksCards()

    renderTasksCards()
}

tasksPanelColumnDone.append(tasksPanelAddDoneButton);

/* -- */
tasksPanelContent.append(tasksPanelColumnTodo, tasksPanelColumnDoing, tasksPanelColumnDone);



/* -- */
function createTaskCardTodo(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'tasks__panel__content__card'
    taskCard.contentEditable = true

    return taskCard
}

function clearTasksCards() {
    var myTasksCards = tasksPanelContent.querySelectorAll('article')

    for (var i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }
}

function renderTasksCards() {
    var myTasks = retrieveTasks(user.email)

    for (var i = 0; i < myTasks.length; i++) {
        var myTask = myTasks[i]

        var myTaskCardTodo = createTaskCardTodo(myTask.text)
        var myTaskCardDoing = createTaskCardTodo(myTask.text)
        var myTaskCardDone = createTaskCardTodo(myTask.text)

        if (myTask.status === 'todo')
        tasksPanelColumnTodo.append(myTaskCardTodo)
        else if (myTask.status === 'doing')
        tasksPanelColumnDoing.append(myTaskCardDoing)
        else if (myTask.status === 'done')
        tasksPanelColumnDone.append(myTaskCardDone)
    }
}
/* TODO PONER EL ADD NEW TASK AL FINAL DE LA COLUMNA */
/* TODO BUG ARRAY VACIO */
/* TODO BUG REMOVE LIMPIA EL TEXTO INTERIOR */

/* CREAMOS EL TASKS PANEL */
const tasksPanelSection = document.createElement("section");
tasksPanelSection.classList.add("home__main");

/* -- */
const tasksPanelHeader = document.createElement("div");
tasksPanelHeader.classList.add("home__settings__header")

tasksPanelSection.append(tasksPanelHeader);

/* -- */
const tasksPanelTitle = document.createElement("span");
tasksPanelTitle.innerText = "My Tasks";
tasksPanelTitle.classList.add("home__settings--title");

const tasksPanelSecondTitle = document.createElement("span");
tasksPanelSecondTitle.innerText = "User name";
tasksPanelSecondTitle.classList.add("home__settings--second-title");

tasksPanelHeader.append(tasksPanelTitle, tasksPanelSecondTitle);

/* -- */
const tasksPanelContent = document.createElement("div");
tasksPanelContent.classList.add("tasks__panel__content");

tasksPanelSection.append(tasksPanelContent);

/* -- */
const tasksPanelColumnTodo = document.createElement("section");
tasksPanelColumnTodo.classList.add("tasks__panel__content__column");
tasksPanelColumnTodo.innerText = "TO DO";

const tasksPanelAddTodoButton = document.createElement("button");
tasksPanelAddTodoButton.classList.add("fa");
tasksPanelAddTodoButton.classList.add("fa-plus");
tasksPanelAddTodoButton.classList.add("tasks__panel__add-button")
tasksPanelAddTodoButton.innerText = " Add new Task"

tasksPanelAddTodoButton.onclick = function () {
    try {
        createTaskTodo(user.id)
        clearTasksCards()
        renderTasksCards()

    } catch (error) {
        alert(error.message)

        return
    }
}

tasksPanelColumnTodo.append(tasksPanelAddTodoButton);

/* -- */
const tasksPanelColumnDoing = document.createElement("section");
tasksPanelColumnDoing.classList.add("tasks__panel__content__column");
tasksPanelColumnDoing.innerText = "DOING";

const tasksPanelAddDoingButton = document.createElement("button");
tasksPanelAddDoingButton.classList.add("fa");
tasksPanelAddDoingButton.classList.add("fa-plus");
tasksPanelAddDoingButton.classList.add("tasks__panel__add-button")
tasksPanelAddDoingButton.innerText = " Add new Task"

tasksPanelAddDoingButton.onclick = function () {
    try {
        createTaskDoing(user.id)
        log("DEBUG", "A new DOING card have been created")

        clearTasksCards()
        renderTasksCards()

    } catch (error) {
        alert(error.message)
        return
    }
}

tasksPanelColumnDoing.append(tasksPanelAddDoingButton);

/* -- */
const tasksPanelColumnDone = document.createElement("section");
tasksPanelColumnDone.classList.add("tasks__panel__content__column");
tasksPanelColumnDone.innerText = "DONE";

const tasksPanelAddDoneButton = document.createElement("button");
tasksPanelAddDoneButton.classList.add("fa");
tasksPanelAddDoneButton.classList.add("fa-plus");
tasksPanelAddDoneButton.classList.add("tasks__panel__add-button")
tasksPanelAddDoneButton.innerText = " Add new Task"

tasksPanelAddDoneButton.onclick = function () {
    try {
        createTaskDone(user.id)
        log("DEBUG", "A new DONE card have been created")

        clearTasksCards()
        renderTasksCards()

    } catch (error) {
        alert(error.message)
        return
    }
}

tasksPanelColumnDone.append(tasksPanelAddDoneButton);

/* -- */
tasksPanelContent.append(tasksPanelColumnTodo, tasksPanelColumnDoing, tasksPanelColumnDone);



/* -- */
function createTaskCard(taskId, text) {
    const taskCard = document.createElement("article");
    taskCard.classList.add("task__card");

    const taskText = document.createElement("p");
    taskText.placeholder = "Enter a text"
    taskText.className = "tasks__panel__content__card"
    taskText.innerText = text
    taskText.contentEditable = true

    taskText.onkeyup = function () {
        try {
            updateTaskText(user.id, taskId, taskText.innerText)

        } catch (error) {
            alert(error.message)

            return
        }
    }

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.classList.add("fa");
    taskDeleteButton.classList.add("fa-trash-o");
    taskDeleteButton.classList.add("task__card__button-delete")

    taskDeleteButton.onclick = function () {
        try {
            deleteTask(user.id, taskId)
            taskCard.remove();

        } catch (error) {
            alert(error.message)

            return
        }
    }

    taskCard.append(taskText, taskDeleteButton);

    return taskCard
}

function clearTasksCards() {
    const myTasksCards = tasksPanelContent.querySelectorAll("article")

    log("DEBUG", "All card have been removed")

    for (let i = 0; i < myTasksCards.length; i++) {
        const myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }
}

function renderTasksCards() {
    const myTasks = retrieveTasks(user.id)

    for (let i = 0; i < myTasks.length; i++) {
        const myTask = myTasks[i]

        const myTaskCard = createTaskCard(myTask.id, myTask.text)

        if (myTask.status === "todo")
            tasksPanelColumnTodo.append(myTaskCard)
        else if (myTask.status === "doing")
            tasksPanelColumnDoing.append(myTaskCard)
        else if (myTask.status === "done")
            tasksPanelColumnDone.append(myTaskCard)
    }
}
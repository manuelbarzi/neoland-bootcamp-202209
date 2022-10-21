/* TODO PONER EL ADD NEW TASK AL FINAL DE LA COLUMNA */
/* TODO BUG ARRAY VACIO */
/* TODO BUG REMOVE LIMPIA EL TEXTO INTERIOR */

/* CREAMOS EL TASKS PANEL */
const tasksPanelSection = document.createElement("section");
tasksPanelSection.classList.add(
    "flex",
    "z-1",
    "w-full",
    "justify-center",
    "flex-wrap"
);

const tasksPanelHeader = document.createElement("div");
tasksPanelHeader.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "content-center",
    "z-0",
    "p-8",
    "bg-sky-100",
    "border-sky-700",
    "border-b-2",
    "border-solid",
    "w-full",
    "h-32"
);

tasksPanelSection.append(tasksPanelHeader);

const tasksPanelTitle = document.createElement("span");
tasksPanelTitle.innerText = "My Tasks";
tasksPanelTitle.classList.add(
    "self-center",
    "font-light",
    "text-4xl",
    "text-black",
    "mt-1"
);

const tasksPanelSecondTitle = document.createElement("span");
tasksPanelSecondTitle.innerText = "User name";
tasksPanelSecondTitle.classList.add(
    "self-center",
    "font-light",
    "text-lg",
    "text-black",
    "mt-1"
);

tasksPanelHeader.append(tasksPanelTitle, tasksPanelSecondTitle);

const tasksPanelContent = document.createElement("div");
tasksPanelContent.classList.add(
    "flex",
    "flex-row",
    "flex-wrap",
    "justify-center",
    "m-4",
    "gap-x-4"
);

tasksPanelSection.append(tasksPanelContent);

const tasksPanelColumnTodo = document.createElement("section");
tasksPanelColumnTodo.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "bg-white",
    "p-4",
    "w-80"
);
tasksPanelColumnTodo.innerText = "TO DO";
tasksPanelColumnTodo.classList.add("font-semibold");

const tasksPanelAddTodoButton = document.createElement("button");
tasksPanelAddTodoButton.classList.add(
    "self-center",
    "p-2",
    "bg-sky-700",
    "border-round",
    "rounded",
    "text-white",
    "my-4",
    "p-4",
    "font-semibold",
    "scale-100",
    "bg-gradient-to-br",
    "from-cyan-500",
    "to-blue-500"
);
tasksPanelAddTodoButton.innerText = " Add new Task";

tasksPanelAddTodoButton.onclick = function () {
    try {
        createTaskTodo(user.id);
        clearTasksCards();
        renderTasksCards();
    } catch (error) {
        alert(error.message);

        return;
    }
};

tasksPanelColumnTodo.append(tasksPanelAddTodoButton);

const tasksPanelColumnDoing = document.createElement("section");
tasksPanelColumnDoing.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "bg-white",
    "p-4",
    "w-80"
);
tasksPanelColumnDoing.innerText = "DOING";
tasksPanelColumnDoing.classList.add("font-semibold");

const tasksPanelAddDoingButton = document.createElement("button");
tasksPanelAddDoingButton.classList.add(
    "self-center",
    "p-2",
    "bg-sky-700",
    "rounded",
    "border-round",
    "text-white",
    "my-4",
    "p-4",
    "font-semibold",
    "bg-gradient-to-br",
    "from-cyan-500",
    "to-blue-500",
    "scale-100"
);
tasksPanelAddDoingButton.innerText = " Add new Task";

tasksPanelAddDoingButton.onclick = function () {
    try {
        createTaskDoing(user.id);
        log("DEBUG", "A new DOING card have been created");

        clearTasksCards();
        renderTasksCards();
    } catch (error) {
        alert(error.message);
        return;
    }
};

tasksPanelColumnDoing.append(tasksPanelAddDoingButton);

const tasksPanelColumnDone = document.createElement("section");
tasksPanelColumnDone.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "bg-white",
    "p-4",
    "w-80"
);
tasksPanelColumnDone.innerText = "DONE";
tasksPanelColumnDone.classList.add("font-semibold");

const tasksPanelAddDoneButton = document.createElement("button");
tasksPanelAddDoneButton.classList.add(
    "self-center",
    "p-2",
    "bg-sky-700",
    "rounded",
    "text-white",
    "my-4",
    "p-4",
    "font-semibold",
    "bg-gradient-to-br",
    "from-cyan-500",
    "to-blue-500",
    "scale-100"
);
tasksPanelAddDoneButton.innerText = " Add new Task";

tasksPanelAddDoneButton.onclick = function () {
    try {
        createTaskDone(user.id);
        log("DEBUG", "A new DONE card have been created");

        clearTasksCards();
        renderTasksCards();
    } catch (error) {
        alert(error.message);
        return;
    }
};

tasksPanelColumnDone.append(tasksPanelAddDoneButton);

tasksPanelContent.append(
    tasksPanelColumnTodo,
    tasksPanelColumnDoing,
    tasksPanelColumnDone
);

function createTaskCard(taskId, text) {
    const taskCard = document.createElement("article");
    taskCard.classList.add(
        "w-full",
        "p-4",
        "flex",
        "justify-center",
        "flex-col",
        "mb-4",
        "rounded",
        "border-solid",
        "border-sky-600",
        "border-t",
        "border-b-4",
        "border-x",
        "bg-sky-100"
    );

    const taskText = document.createElement("p");
    taskText.placeholder = "Enter a text";
    taskText.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "bg-cyan-50",
        "p-4",
        "text-sm",
        "border-sky-600",
        "border"
    );
    taskText.innerText = text;
    taskText.contentEditable = true;

    taskText.onkeyup = function () {
        try {
            updateTaskText(user.id, taskId, taskText.innerText);
        } catch (error) {
            alert(error.message);

            return;
        }
    };

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.classList.add("fa");
    taskDeleteButton.classList.add("fa-trash-o");
    taskDeleteButton.classList.add(
        "self-center",
        "p-1",
        "rounded",
        "cursor-pointer",
        "border-none",
        "mt-4",
        "ml-56"
    );

    taskDeleteButton.onclick = function () {
        try {
            deleteTask(user.id, taskId);
            taskCard.remove();
        } catch (error) {
            alert(error.message);

            return;
        }
    };

    taskCard.append(taskText, taskDeleteButton);

    return taskCard;
}

function clearTasksCards() {
    const myTasksCards = tasksPanelContent.querySelectorAll("article");

    log("DEBUG", "All card have been removed");

    for (let i = 0; i < myTasksCards.length; i++) {
        const myTaskCard = myTasksCards[i];

        myTaskCard.remove();
    }
}

function renderTasksCards() {
    const myTasks = retrieveTasks(user.id);

    for (let i = 0; i < myTasks.length; i++) {
        const myTask = myTasks[i];

        const myTaskCard = createTaskCard(myTask.id, myTask.text);

        if (myTask.status === "todo") tasksPanelColumnTodo.append(myTaskCard);
        else if (myTask.status === "doing")
            tasksPanelColumnDoing.append(myTaskCard);
        else if (myTask.status === "done") tasksPanelColumnDone.append(myTaskCard);
    }
}

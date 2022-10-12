/**
 * Registers a user in DB
 * 
 * @param {string} email The user email.
 * @param {string} title task name.
 * @param {string} comment The task comment.
 * 
 * @returns null | Error
 */
//---------------SUBMIT FUNCTION------------------------

function addNewTaskData(email, title, comment) { //THIS COME FROM componets/add-task-menu.js
    //VALIDATE THE TASK
    if (!IS_EMAIL_REGEX.test(email)) return new Error('email is not valid')
    if (!IS_ALPHABETICAL_REGEX.test(title)) return new Error('add task title')
    if (comment.length > 300) return new Error('commnent length have more than 300 characters')
    if (title.length > 40) return new Error ('title length needs to be less than 40 characters')

    //VALIDATE IF TASK ALREADY EXIST
    for (var j = taskDb.length; j > 0; j--) {
        var comprovate = taskDb[j-1].title

        if (comprovate === title) {
            alert("task already exist")
            return new Error('task already exist')
        }
    }

    //PUSH DATA
    var taskPusher = {
        email: email,
        title: title,
        id: taskDb.length,
        comment: comment,
        status: addTaskMenuTitleDivTitleFormStatus.value,
    }
    taskDb.push(taskPusher)
}
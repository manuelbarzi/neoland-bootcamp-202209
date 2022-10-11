/**
 * Registers a user in DB
 * 
 * @param {string} email The user email.
 * @param {string} tittle task name.
 * @param {string} comment The task comment.
 * 
 * @returns null | Error
 */
//---------------SUBMIT FUNCTION------------------------

function addNewTaskData(email, tittle, comment) { //THIS COME FROM componets/add-task-menu.js
    //VALIDATE THE TASK
    if (!IS_EMAIL_REGEX.test(email)) return new Error('email is not valid')
    if (!IS_ALPHABETICAL_REGEX.test(tittle)) return new Error('add task tittle')
    if (comment.length > 300) return new Error('commnent length have more than 300 characters')
    if (tittle.length > 40) return new Error ('tittle length needs to be less than 40 characters')

    //VALIDATE IF TASK ALREADY EXIST
    var j = taskDb.length
    while (j > 0) {

        j--
        var comprovate = taskDb[j].title

        if (comprovate === tittle) {
            alert("task already exist")
            return new Error('task already exist')
        }
    }

    //PUSH DATA
    var taskPusher = {
        email: email,
        title: tittle,
        id: taskDb.length,
        comment: comment,
        status: addTaskMenuTittleDivTittleFormStatus.value,
    }
    taskDb.push(taskPusher)
}
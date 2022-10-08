function addNewTaskData(email, tittle, comment) {
    if (!IS_EMAIL_REGEX.test(email)) return new Error('email is not valid')
    if (!IS_ALPHABETICAL_REGEX.test(tittle)) return new Error('add task tittle')
    if (!IS_ALPHABETICAL_REGEX.test(comment)) return new Error('add comment')
    if (comment.length > 300) return new Error('commnent length have more than 300 characters')

    var i = 0
    var j = task.length
    while (j > 0) {
        i++
        j--
        var id = task.length
        var comprovate = task[j].bd_task_title
        if (comprovate === tittle) {
            alert("task already exist")
            log('DEBUG', 'task already exist')
        }
    }

    var taskPusher = {
        bd_task_email: email,
        bd_task_title: tittle,
        bd_task_id: id,
        bd_task_comment: comment,
        bd_task_status: addTaskMenuTittleDivTittleFormStatus.value,

    }

    task.push(taskPusher)
}
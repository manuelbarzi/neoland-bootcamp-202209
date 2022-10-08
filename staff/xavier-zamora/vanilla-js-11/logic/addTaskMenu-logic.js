function addNewTaskData(email, tittle, comment) { //THIS COME FROM componets/add-task-menu.js
    if (!IS_EMAIL_REGEX.test(email)) return new Error('email is not valid')
    if (!IS_ALPHABETICAL_REGEX.test(tittle)) return new Error('add task tittle')
    if (comment.length > 300) return new Error('commnent length have more than 300 characters')

    var selectorOfDB = task_TODO

    if(addTaskMenuTittleDivTittleFormStatus.value === "TODO") selectorOfDB = task_TODO
    if(addTaskMenuTittleDivTittleFormStatus.value === "DOING") selectorOfDB = task_DOING
    if(addTaskMenuTittleDivTittleFormStatus.value === "DONE") selectorOfDB = task_DONE

   
    var j = task_TODO.length
    while (j > 0) {

        j--
        var comprovate = task_TODO[j].bd_task_title

        if (comprovate === tittle) {
            alert("task already exist")
            return new Error('task already exist')
        }
    }

    j = task_DOING.length
    while (j > 0) {

        j--
        var comprovate1 = task_DOING[j].bd_task_title


        if (comprovate1 === tittle) {
            alert("task already exist")
            return new Error('task already exist')
        }
    }

    j = task_DONE.length
    while (j > 0) {

        j--
    
        var comprovate2 = task_DONE[j].bd_task_title

        if (comprovate2 === tittle) {
            alert("task already exist")
            return new Error('task already exist')
        }
    }

    var taskPusher = {
        bd_task_email: email,
        bd_task_title: tittle,
        bd_task_id: task_TODO.length + task_DOING.length + task_DONE.length,
        bd_task_comment: comment,
        bd_task_status: addTaskMenuTittleDivTittleFormStatus.value,
    }

    selectorOfDB.push(taskPusher)
}
//ADD NEW TASK
function AddNewTaskFunction() { // logic/addTaskMenulogic.js

    log('DEBUG', 'send new data task')
    var email = userNameLogin
    var title = addTaskMenuTitleDivTitleFormTitle.value
    var comment = addTaskMenuTitleDivTitleFormComment.value

    var titleUper = title.toUpperCase()

    var result = addNewTaskData(email, titleUper, comment)

    if (result instanceof Error) {
        alert(result.message)
        log('ERROR', 'task not added')

        return
    }

    alert('task added')
    log('DEBUG', 'task added')
    divHeader.click()
    addTaskMenuTitleForm.reset()
    addTaskMenu.remove()
    addTheNewItem()
}

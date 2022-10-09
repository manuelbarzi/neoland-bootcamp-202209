//ADD NEW TASK
function AddNewTaskFunction() { // logic/addTaskMenulogic.js

    log('DEBUG', 'send new data task')
    var email = userNameLogin
    var tittle = addTaskMenuTittleDivTittleFormTittle.value
    var comment = addTaskMenuTittleDivTittleFormComment.value

    var tittleUper = tittle.toUpperCase()

    var result = addNewTaskData(email, tittleUper, comment)

    if (result instanceof Error) {
        log('ERROR', 'task not added')

        return
    }

    alert('task added')
    log('DEBUG', 'task added')
    divHeader.click()
    addTaskMenuTittleForm.reset()
    addTaskMenu.remove()
    //deleteItems()
    addTheNewItem()
    divHeader.click()
}

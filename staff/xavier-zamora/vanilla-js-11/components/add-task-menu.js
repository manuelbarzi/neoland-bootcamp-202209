//THIS IS ADD-TASK-MENU
var addTaskMenu = document.createElement('section')
addTaskMenu.className = 'add-task-menu'
addTaskMenu.style.height = "70%"
addTaskMenu.style.width = "55%"
addTaskMenu.style.backgroundColor = "white"
addTaskMenu.style.display = "flex"
addTaskMenu.style.justifyContent = "center"
addTaskMenu.style.alignItems = "center"
addTaskMenu.style.flexDirection = "column"
addTaskMenu.style.textAlign = "center"

//ADD ADD-TASK-MENU HEADER DIV
var addTaskMenuHeaderDiv = document.createElement('header')
addTaskMenu.append(addTaskMenuHeaderDiv)
addTaskMenuHeaderDiv.className = "flex"
addTaskMenuHeaderDiv.style.justifyContent = "flex-end"
addTaskMenuHeaderDiv.style.width = "95%"


//ADD CLOSE x
var addTaskMenuCloseX = document.createElement('h3')
addTaskMenuHeaderDiv.append(addTaskMenuCloseX)
addTaskMenuCloseX.innerHTML = "X"

//ADD TITLE
var addTaskMenuTittle = document.createElement('h3')
addTaskMenuTittle.innerHTML = "ADD TASK"
addTaskMenu.append(addTaskMenuTittle)

//ADD FORM
var addTaskMenuTittleForm = document.createElement('form')
addTaskMenu.append(addTaskMenuTittleForm)

//ADD INPUT TITTLE TO FORM
var addTaskMenuTittleDivTittleFormTittleh4 = document.createElement('h4')
addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormTittleh4)
addTaskMenuTittleDivTittleFormTittleh4.innerHTML = "Tittle"
var addTaskMenuTittleDivTittleFormTittle = document.createElement('input')
addTaskMenuTittleDivTittleFormTittle.type = "Text"
addTaskMenuTittleDivTittleFormTittle.required = true
addTaskMenuTittleDivTittleFormTittle.placeholder = "Tittle"
addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormTittle)

//ADD INPUT STATUS TO FORM
var addTaskMenuTittleDivTittleFormStatush4 = document.createElement('h4')
addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormStatush4)
addTaskMenuTittleDivTittleFormStatush4.innerHTML = "Add Status"

var addTaskMenuTittleDivTittleFormStatus = document.createElement('select')
addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormStatus)

var addTaskMenuTittleDivTittleFormStatusOption1 = document.createElement('option')
addTaskMenuTittleDivTittleFormStatus.append(addTaskMenuTittleDivTittleFormStatusOption1)
addTaskMenuTittleDivTittleFormStatusOption1.value = "TODO"
addTaskMenuTittleDivTittleFormStatusOption1.innerHTML = "TODO"

var addTaskMenuTittleDivTittleFormStatusOption2 = document.createElement('option')
addTaskMenuTittleDivTittleFormStatus.append(addTaskMenuTittleDivTittleFormStatusOption2)
addTaskMenuTittleDivTittleFormStatusOption2.value = "DOING"
addTaskMenuTittleDivTittleFormStatusOption2.innerHTML = "DOING"

var addTaskMenuTittleDivTittleFormStatusOption3 = document.createElement('option')
addTaskMenuTittleDivTittleFormStatus.append(addTaskMenuTittleDivTittleFormStatusOption3)
addTaskMenuTittleDivTittleFormStatusOption3.value = "DONE"
addTaskMenuTittleDivTittleFormStatusOption3.innerHTML = "DONE"

addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormStatus)
addTaskMenuTittleDivTittleFormStatus.type = "Text"
addTaskMenuTittleDivTittleFormStatus.placeholder = "done, doing or done"

//ADD INPUT COMENT TO FORM
var addTaskMenuTittleDivTittleFormCommenth4 = document.createElement('h4')
addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormCommenth4)
addTaskMenuTittleDivTittleFormCommenth4.innerHTML = "Add Coment"
var addTaskMenuTittleDivTittleFormComment = document.createElement('input')
addTaskMenuTittleForm.append(addTaskMenuTittleDivTittleFormComment)
addTaskMenuTittleDivTittleFormComment.type = "Text"
addTaskMenuTittleDivTittleFormComment.required = true
addTaskMenuTittleDivTittleFormComment.placeholder = "write hear yout coment"
addTaskMenuTittleDivTittleFormComment.style.height = "10rem"

//MARGIN INPUTS
addTaskMenuTittleDivTittleFormTittleh4.style.marginTop = "7rem"
addTaskMenuTittleDivTittleFormTittleh4.style.marginTop = "3rem"

addTaskMenuTittleDivTittleFormTittle.style.marginBottom = "1rem"
addTaskMenuTittleDivTittleFormStatus.style.marginBottom = "1rem"
addTaskMenuTittleDivTittleFormComment.style.marginBottom = "1rem"

addTaskMenuTittleDivTittleFormCommenth4.style.marginBottom = "0.2rem"
addTaskMenuTittleDivTittleFormStatush4.style.marginBottom = "0.2rem"
addTaskMenuTittleDivTittleFormTittleh4.style.marginBottom = "0.2rem"

//ADD SEND BUTTON
var addTaskMenuTittleDivTittleFormButton = document.createElement('button')
addTaskMenu.append(addTaskMenuTittleDivTittleFormButton)
addTaskMenuTittleDivTittleFormButton.className = "material-symbols-outlined"
addTaskMenuTittleDivTittleFormButton.innerHTML = "<span>send</span>"

addTaskMenuCloseX.onclick = function (event) {
    event.preventDefault()
    log('DEBUG', 'close addTaskPanel')
    addTaskMenu.remove()
    addTaskMenuTittleForm.reset()
    document.body.append(taskPanel)
}
//ADD NEW TASK
addTaskMenuTittleDivTittleFormButton.onclick = function (event) { // logic/addTaskMenulogic.js
    event.preventDefault()
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
}



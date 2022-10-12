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
var addTaskMenuTitle = document.createElement('h3')
addTaskMenuTitle.innerHTML = "ADD TASK"
addTaskMenu.append(addTaskMenuTitle)

//ADD FORM
var addTaskMenuTitleForm = document.createElement('form')
addTaskMenu.append(addTaskMenuTitleForm)

//ADD INPUT TITLE TO FORM
var addTaskMenuTitleDivTitleFormTitleh4 = document.createElement('h4')
addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormTitleh4)
addTaskMenuTitleDivTitleFormTitleh4.innerHTML = "Title"
var addTaskMenuTitleDivTitleFormTitle = document.createElement('input')
addTaskMenuTitleDivTitleFormTitle.type = "Text"
addTaskMenuTitleDivTitleFormTitle.required = true
addTaskMenuTitleDivTitleFormTitle.placeholder = "Title"
addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormTitle)

//ADD INPUT STATUS TO FORM
var addTaskMenuTitleDivTitleFormStatush4 = document.createElement('h4')
addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormStatush4)
addTaskMenuTitleDivTitleFormStatush4.innerHTML = "Add Status"

var addTaskMenuTitleDivTitleFormStatus = document.createElement('select')
addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormStatus)

var addTaskMenuTitleDivTitleFormStatusOption1 = document.createElement('option')
addTaskMenuTitleDivTitleFormStatus.append(addTaskMenuTitleDivTitleFormStatusOption1)
addTaskMenuTitleDivTitleFormStatusOption1.value = "TODO"
addTaskMenuTitleDivTitleFormStatusOption1.innerHTML = "TODO"

var addTaskMenuTitleDivTitleFormStatusOption2 = document.createElement('option')
addTaskMenuTitleDivTitleFormStatus.append(addTaskMenuTitleDivTitleFormStatusOption2)
addTaskMenuTitleDivTitleFormStatusOption2.value = "DOING"
addTaskMenuTitleDivTitleFormStatusOption2.innerHTML = "DOING"

var addTaskMenuTitleDivTitleFormStatusOption3 = document.createElement('option')
addTaskMenuTitleDivTitleFormStatus.append(addTaskMenuTitleDivTitleFormStatusOption3)
addTaskMenuTitleDivTitleFormStatusOption3.value = "DONE"
addTaskMenuTitleDivTitleFormStatusOption3.innerHTML = "DONE"

addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormStatus)
addTaskMenuTitleDivTitleFormStatus.type = "Text"
addTaskMenuTitleDivTitleFormStatus.placeholder = "done, doing or done"

//ADD INPUT COMENT TO FORM
var addTaskMenuTitleDivTitleFormCommenth4 = document.createElement('h4')
addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormCommenth4)
addTaskMenuTitleDivTitleFormCommenth4.innerHTML = "Add Coment"
var addTaskMenuTitleDivTitleFormComment = document.createElement('input')
addTaskMenuTitleForm.append(addTaskMenuTitleDivTitleFormComment)
addTaskMenuTitleDivTitleFormComment.type = "Text"
addTaskMenuTitleDivTitleFormComment.required = true
addTaskMenuTitleDivTitleFormComment.placeholder = "write hear yout coment"
addTaskMenuTitleDivTitleFormComment.style.height = "10rem"

//MARGIN INPUTS
addTaskMenuTitleDivTitleFormTitleh4.style.marginTop = "7rem"
addTaskMenuTitleDivTitleFormTitleh4.style.marginTop = "3rem"

addTaskMenuTitleDivTitleFormTitle.style.marginBottom = "1rem"
addTaskMenuTitleDivTitleFormStatus.style.marginBottom = "1rem"
addTaskMenuTitleDivTitleFormComment.style.marginBottom = "1rem"

addTaskMenuTitleDivTitleFormCommenth4.style.marginBottom = "0.2rem"
addTaskMenuTitleDivTitleFormStatush4.style.marginBottom = "0.2rem"
addTaskMenuTitleDivTitleFormTitleh4.style.marginBottom = "0.2rem"

//ADD SEND BUTTON
var addTaskMenuTitleDivTitleFormButton = document.createElement('button')
addTaskMenu.append(addTaskMenuTitleDivTitleFormButton)
addTaskMenuTitleDivTitleFormButton.className = "material-symbols-outlined"
addTaskMenuTitleDivTitleFormButton.innerHTML = "<span>send</span>"

//THIS FUNCTION CLOSE THE PANEL
addTaskMenuCloseX.onclick = function (event) {
    event.preventDefault()
    log('DEBUG', 'close addTaskPanel')
    addTaskMenu.remove()
    addTaskMenuTitleForm.reset()
    document.body.append(taskPanel)
}

//SEND THE FORM TO logic/addNewTask-logic.js
addTaskMenuTitleDivTitleFormButton.onclick = function (event) {
    event.preventDefault()
    AddNewTaskFunction()
}

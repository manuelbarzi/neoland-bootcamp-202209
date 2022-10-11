//OPEN TASK-MENU OF TASK
var itemInfo

function clickOnTask(value) {
    debugger
    var email = taskDb[value].email
    var tittle = taskDb[value].title
    var id = taskDb[value].id
    var comment = taskDb[value].comment
    var status = taskDb[value].status
    log('DEBUG', 'clickOnTask')

    //ADD TASK PANEL
    itemInfo = document.createElement('form')
    itemInfo.className = "display-screen"

    var divClose = document.createElement('div')
    divClose.style.display = "flex"
    divClose.style.justifyContent = "flex-end"

    var close = document.createElement('h3')
    close.innerHTML = "X"
    close.style.paddingTop = "1rem"
    close.style.paddingRight = "1rem"
    divClose.append(close)
    itemInfo.append(divClose)

    //ADD PANEL TITTLE DIV FOR H3
    var itemInfoTittle = document.createElement('div')
    itemInfo.append(itemInfoTittle)
    itemInfoTittle.style.width = "100%"
    itemInfoTittle.style.height = "10%"
    itemInfoTittle.className = "justify-content-center"

    //ADD H3 TITTLE
    var itemInfoH = document.createElement('h3')
    itemInfoTittle.append(itemInfoH)
    itemInfoH.innerHTML = tittle 

    //FORM FOR EMAIL AND SELECT
    var itemInfoEmailAndSelect = document.createElement('div')
    itemInfo.append(itemInfoEmailAndSelect)
    itemInfoEmailAndSelect.style.width = "100%"
    itemInfoEmailAndSelect.style.height = "2%"
    itemInfoEmailAndSelect.className = "justify-content-center"
    itemInfoEmailAndSelect.style.flexDirection = "column"
    itemInfoEmailAndSelect.style.alignItems = "center"

    //ADD EMAIL
    var addEmail = document.createElement('h4')
    addEmail.innerHTML = email
    itemInfoEmailAndSelect.append(addEmail)
    addEmail.style.marginTop = "2rem"

    taskPanel.remove()
    document.body.append(itemInfo)

    //ADD FORM
    //ADD INPUT STATUS TO FORM
    var fromStatus = document.createElement('select')
    itemInfoEmailAndSelect.append(fromStatus)
    fromStatus.style.marginBottom = "1rem"

    var place1
    var place2
    var place3
    if(status === "TODO"){
        place1 = "TODO"
        place2 = "DOING"
        place3 = "DONE"
    }
    if(status === "DOING"){
        place1 = "DOING"
        place2 = "DONE"
        place3 = "TODO"
    }
    if(status === "DONE"){
        place1 = "DONE"
        place2 = "TODO"
        place3 = "DOING"
    }

    var fromStatusOption1 = document.createElement('option')
    fromStatus.append(fromStatusOption1)
    fromStatusOption1.value = place1
    fromStatusOption1.innerHTML = place1

    var fromStatusOption2 = document.createElement('option')
    fromStatus.append(fromStatusOption2)
    fromStatusOption2.value = place2
    fromStatusOption2.innerHTML = place2

    var fromStatusOption3 = document.createElement('option')
    fromStatus.append(fromStatusOption3)
    fromStatusOption3.value = place3
    fromStatusOption3.innerHTML = place3

    var inputComment = document.createElement('input')
    inputComment.placeholder = comment
    inputComment.style.border = "1px solid black"
    inputComment.style.width = "80%"
    itemInfoEmailAndSelect.append(inputComment)

    var divSend = document.createElement('div')
    itemInfoEmailAndSelect.append(divSend)

    var button = document.createElement('button')
    button.textContent = "SEND"
    divSend.append(button)

    var divDelete = document.createElement('div')
    itemInfoEmailAndSelect.append(divDelete)

    var button = document.createElement('button')
    button.textContent = "DELETE"
    divDelete.append(button)

    var divComents = document.createElement('div')
    itemInfoEmailAndSelect.append(divComents)
}
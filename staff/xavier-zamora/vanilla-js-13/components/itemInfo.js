//OPEN TASK-MENU OF TASK
var itemInfo

function clickOnTask(value) {
    var email = taskDb[value].email
    var title = taskDb[value].title
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

    //ADD PANEL TITLE DIV FOR H3
    var itemInfoTitle = document.createElement('div')
    itemInfo.append(itemInfoTitle)
    itemInfoTitle.style.width = "100%"
    itemInfoTitle.style.height = "5%"
    itemInfoTitle.className = "justify-content-center"

    //ADD H3 TITLE
    var itemInfoH = document.createElement('h3')
    itemInfoTitle.append(itemInfoH)
    itemInfoH.innerHTML = title

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
    addEmail.style.marginTop = "10rem"

    taskPanel.remove()
    document.body.append(itemInfo)

    var place1
    var place2
    var place3

    if (status === "TODO") {
        place1 = "TODO"
        place2 = "DOING"
        place3 = "DONE"
    } if (status === "DOING") {
        place1 = "DOING"
        place2 = "DONE"
        place3 = "TODO"
    } if (status === "DONE") {
        place1 = "DONE"
        place2 = "TODO"
        place3 = "DOING"
    }

    var inputComment = document.createElement('h4')
    inputComment.textContent = comment
    inputComment.style.border = "1px solid black"
    inputComment.style.width = "80%"
    itemInfoEmailAndSelect.append(inputComment)

    if (email === userNameLogin) {

        //ADD INPUT STATUS TO FORM
        var fromStatus = document.createElement('select')
        itemInfoEmailAndSelect.append(fromStatus)
        fromStatus.style.marginBottom = "1rem"

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


        itemInfoH.remove()
        var intemInfoHInput = document.createElement('input')
        intemInfoHInput.placeholder = title
        itemInfoTitle.append(intemInfoHInput)

        inputComment.remove()
        var inputCommentInput = document.createElement('input')
        inputCommentInput.placeholder = comment
        inputCommentInput.style.border = "1px solid black"
        inputCommentInput.style.width = "80%"
        itemInfoEmailAndSelect.append(inputCommentInput)

        var divDelete = document.createElement('div')
        itemInfoEmailAndSelect.append(divDelete)

        var buttonSend = document.createElement('button')
        buttonSend.textContent = "SEND"
        divDelete.append(buttonSend)
        buttonSend.style.marginRight = "3rem"

        var buttonDelete = document.createElement('button')
        buttonDelete.textContent = "DELETE"
        divDelete.append(buttonDelete)
        buttonDelete.style.marginLeft = "3rem"

        var divComents = document.createElement('div')
        itemInfoEmailAndSelect.append(divComents)
    }

    divClose.onclick = function (event) {
        event.preventDefault()
        itemInfo.remove()
        divHeader.click()
        log('DEBUG', 'close itemInfo')
    }

    buttonSend.onclick = function (event) {
        event.preventDefault()
        log('DEBUG', 'update task')
        var email = taskDb[value].email
        var title = intemInfoHInput.value
        var id = taskDb[value].id
        var comment = inputCommentInput.value
        var status = fromStatus.value
        
        UpdateTask(email, title, id, comment, status)
        divClose.click()
    }

    buttonDelete.onclick = function (event) {
        event.preventDefault()
        log('DEBUG', 'working')
    }
}


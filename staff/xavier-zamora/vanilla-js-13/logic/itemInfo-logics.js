
function UpdateTask(email, title, id, comment, status) { //THIS FUNCTION UPDATE THE TASKS IN THE PANEL
    debugger
    console.log(email, title, id, status, comment)
    if (title === "" || comment === "") {
        alert("please insert title and comment for update the task")
    }
    var user = {
        email: email,
        title: title,
        id: id,
        comment: comment,
        status: status
    }
    var j = taskDb.length - 1
    for (var i = j; i >= 0; i--){
        if(taskDb[i].id === id){
            taskDb.splice(i, 1) //DELETE TASK FOR UPDATE
            taskItemArrayDoing = []
            taskItemArrayDone = []
            taskItemArrayTodo = []
            taskDb.push(user) //PUSH THE NEW TASK
        }
    }
    body.append(taskPanel)
    deleteTasks()
    showItems()
}

function deleteTasks(){//DELETE TASKS FROM PANEL
    debugger
    var j = taskDb.length - 1 
    for(var i = j; i >= 0; i--){
        var del = document.getElementById(i)
        del.remove()
    }
}
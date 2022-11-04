
function createTaskCard(email) {

    var newTask = {
        id: null,
        user: email,
        text: '',
        status: 'TODO'
    }

    var lastTask = tasks[tasks.length - 1]
    var lastTaskId = lastTask.id

    newTask.id = lastTaskId + 1

    tasks.push(newTask)

}

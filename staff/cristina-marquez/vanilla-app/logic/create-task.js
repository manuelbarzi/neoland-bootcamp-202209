
function createTaskCard(email) {

    const newTask = {
        id: null,
        user: email,
        text: '',
        status: 'TODO'
    }

    const lastTask = tasks[tasks.length - 1]
    const lastTaskId = lastTask.id

    newTask.id = lastTaskId + 1

    tasks.push(newTask)

}

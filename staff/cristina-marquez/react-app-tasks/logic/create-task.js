function createTask(userEmail) {

    const newTask = {
        id: null,
        user: userEmail,
        text: '',
        status: 'TODO'
    }

    const lastTask = tasks[tasks.length - 1]
    const lastTaskId = lastTask.id

    newTask.id = lastTaskId + 1

    tasks.push(newTask)

}
function createTaskTodo(userId) {

    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    const lastIndex = tasks.length - 1
    const lastTask = tasks[lastIndex]
    const lastTaskId = lastTask.id

    const countString = lastTaskId.substring(5)
    const count = parseInt(countString)

    const nextCount = count + 1
    const nextTaskId = "task-" + nextCount

    const task = {
        id: nextTaskId,
        user: userId,
        text: "",
        status: "todo"
    }

    tasks.push(task)
}

function createTaskDoing(userId) {

    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + Id + " not found")

    const lastIndex = tasks.length - 1
    const lastTask = tasks[lastIndex]
    const lastTaskId = lastTask.id

    const countString = lastTaskId.substring(5)
    const count = parseInt(countString)

    const nextCount = count + 1
    const nextTaskId = "task-" + nextCount

    const task = {
        id: nextTaskId,
        user: userId,
        text: "",
        status: "doing"
    }

    tasks.push(task)
}

function createTaskDone(userId) {

    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    const lastIndex = tasks.length - 1
    const lastTask = tasks[lastIndex]
    const lastTaskId = lastTask.id

    const countString = lastTaskId.substring(5)
    const count = parseInt(countString)

    const nextCount = count + 1
    const nextTaskId = "task-" + nextCount

    const task = {
        id: nextTaskId,
        user: userId,
        text: "",
        status: "done"
    }

    tasks.push(task)
}
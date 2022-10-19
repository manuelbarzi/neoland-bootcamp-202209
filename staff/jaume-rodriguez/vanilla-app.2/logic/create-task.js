function createTaskTodo(userId) {

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    var lastIndex = tasks.length - 1
    var lastTask = tasks[lastIndex]
    var lastTaskId = lastTask.id

    var countString = lastTaskId.substring(5)
    var count = parseInt(countString)

    var nextCount = count + 1
    var nextTaskId = "task-" + nextCount

    var task = {
        id: nextTaskId,
        user: userId,
        text: "",
        status: "todo"
    }

    tasks.push(task)
}

/* -- */
function createTaskDoing(userId) {

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + Id + " not found")

    var lastIndex = tasks.length - 1
    var lastTask = tasks[lastIndex]
    var lastTaskId = lastTask.id

    var countString = lastTaskId.substring(5)
    var count = parseInt(countString)

    var nextCount = count + 1
    var nextTaskId = "task-" + nextCount

    var task = {
        id: nextTaskId,
        user: userId,
        text: "",
        status: "doing"
    }

    tasks.push(task)
}

/* -- */
function createTaskDone(userId) {

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    var lastIndex = tasks.length - 1
    var lastTask = tasks[lastIndex]
    var lastTaskId = lastTask.id

    var countString = lastTaskId.substring(5)
    var count = parseInt(countString)

    var nextCount = count + 1
    var nextTaskId = "task-" + nextCount

    var task = {
        id: nextTaskId,
        user: userId,
        text: "",
        status: "done"
    }

    tasks.push(task)
}
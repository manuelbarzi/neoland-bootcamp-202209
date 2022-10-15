function createTask(email, text) {

    if (typeof email !== 'string') return new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) return new Error('email is not valid')

    var found = false

    for (i = 0; i < users.length && !found; i++) {

        var user = users[i]

        if (email === user.email)
            found = true


    }
    if (!found) return new Error ('user email dont found')

    var lastIndex = tasks.length - 1
    var lastTask = tasks[lastIndex]
    var lastTaskId = lastTask.id
    var countString = lastTaskId.substring(5)
    var count = parseInt(countString)
    
    var nextCount = count + 1
    var nextTaskId = 'task-' + nextCount
    
    var task = {
        id: nextTaskId,
        user: email,
        text: text,
        status: 'todo'
    }

    tasks.push(task)
    tasksTodoForm.reset()

    createTaskCard()
    
    return null

}


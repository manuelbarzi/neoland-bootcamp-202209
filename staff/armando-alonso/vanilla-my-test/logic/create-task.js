function createTask(emailUser) {

    if (typeof emailUser !== 'string') return new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(emailUser)) return new Error('email is not valid')

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i];

        if (user.email === emailUser) 
            found = true
    }

    if (!found) return new Error('user with email ' + emailUser + ' mot found')

    var lastIndex = tasks.length -1
    var lastTask = tasks[lastIndex]
    var lastTaskId = lastTask.id

    var countString = lastTaskId.substring(5)
    var count = parseInt(countString)

    var nextCount = count +1
    var nextTaskId = 'task-' + nextCount



    var task = {
        id: nextTaskId,
        user: emailUser,
        text: '',
        status: 'todo'
    }

    tasks.push(task)

    return null
}
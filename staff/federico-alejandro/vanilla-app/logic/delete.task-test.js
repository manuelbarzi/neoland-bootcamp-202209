// CASE succeeds on existing user and task

var user = {
    name: 'Carlo Mango',
    email: 'carlo@mango.com',
    password: '123123123'
}
users.push(user)

var task = {
    id: 'task-3000',
    user: user.email,
    text: 'code code and code',
    status: 'doing'
}

//tasks.push(task)
tasks[3] = task

var res = deleteTask(user.email, task.id)

console.assert(res === undefined)

var found = false

for (var i = 0; i < tasks.length && !found; i++) {
    var _task = tasks[i]

    if (_task.id === task.id)
        found = true
}

console.assert(!found)


// TODO add more test cases (unhappies)
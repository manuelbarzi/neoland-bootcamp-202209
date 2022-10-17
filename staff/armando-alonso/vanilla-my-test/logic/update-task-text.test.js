// CASE succeeds when task already exist

var user = {
    name: 'arman',
    email: 'arman@neoland.com',
    password: '12345'
}

users.push(user)

var task = {
    id: 'task-1000',
    user: user.email,
    text: 'practice coding',
    status: 'doing'
}

tasks.push(task)

var res = updateTaskText(user.email, task.id, 'practice coding and drink vitamins')

console.assert(res === null)

var foundTask

for (var i = 0; i < tasks.length && !foundTask; i++) {
    var _task = tasks[i]

    if (_task.id === task.id) {
        foundTask = _task
    }
}

console.assert(!!foundTask)
console.assert(foundTask.text === 'practice coding and drink vitamins')


// CASE fails when user does not exist

var user = {
    name: 'armand',
    email: 'armand@neoland.com',
    password: '12345'
}


var task = {
    id: 'task-1001',
    user: user.email,
    text: 'practice coding',
    status: 'doing'
}

tasks.push(task)

var res = updateTaskText(user.email, task.id, 'practice coding and drink vitamins')

console.assert(res instanceof Error)
console.assert(res.message === 'user with email ' + user.email + ' not found')

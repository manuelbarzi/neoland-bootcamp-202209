// CASE succeeds when user and task already exist

var user = {
    name: 'Plu To',
    email: 'plu@to.com',
    password: '123123123'
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
    name: 'Caca Tua',
    email: 'caca@tua.com',
    password: '123123123'
}

// users.push(user)

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

// CASE fails when task does not exist

var user = {
    name: 'Ele Fante',
    email: 'ele@fante.com',
    password: '123123123'
}

users.push(user)

var task = {
    id: 'task-1002',
    user: user.email,
    text: 'practice coding',
    status: 'doing'
}

// tasks.push(task)

var res = updateTaskText(user.email, task.id, 'practice coding and drink vitamins')

console.assert(res instanceof Error)
console.assert(res.message === 'task with id ' + task.id + ' not found')

// CASE fails when task does not exist

var user = {
    name: 'Ele Fante',
    email: 'ele@fante.com',
    password: '123123123'
}

users.push(user)

var task = {
    id: 'task-1003',
    user: 'pepito@grillo.com',
    text: 'practice coding',
    status: 'doing'
}

tasks.push(task)

var res = updateTaskText(user.email, task.id, 'practice coding and drink vitamins')

console.assert(res instanceof Error)
console.assert(res.message === 'task with id ' + task.id + ' does not belong to user with email ' + user.email)

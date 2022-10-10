function createTask(userEmail) {
    if(typeof userEmail !== 'string') return new Error('email is not a string')
    if(!IS_EMAIL_REGEX.test(userEmail)) return new Error ('email is not valid')

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]
        
        if (user.email === userEmail)
            found = true
    }

    // if not found then ...
    if (!found) return new Error('user with email ' + userEmail + ' not found')

var nextTaskId

// if (!tasks.length) {
if (tasks.length === 0) {
    nextTaskId = "task-1"
} else {
    var lastIndex = tasks.length -1
    // var lastIndex = la longitus de la lista de tareas -1, si hay 10 tareas, es igual a 9
    
    var lastTask = tasks[lastIndex]
    // lastTask = [10-1] = 9
    
    var lastTaskId = lastTask.id
    
    var countString = lastTaskId.substring(5)
    // cuenta el string = del id task empieza a cambiar desde el caracter 5 
    var count = parseInt(countString)
    
    
    var nextCount = count + 1
    nextTaskId = 'task-' + nextCount
}   

var task = {id:nextTaskId, user:userEmail, text: '', status:'todo'}

tasks.push (task)

return null
}
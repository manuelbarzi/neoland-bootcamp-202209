function createTask(userEmail) {
  if (typeof userEmail !== 'string') throw new Error('email is not a string')
  if (!IS_EMAIL_REGEX.test(userEmail)) throw new Error('email is not valid')

  var found = false

  for (var i = 0; i < users.length && !found; i++) {
    var user = users[i]

    if (user.email === userEmail)
      found = true
  }

  if (!found) throw new Error('user with email ' + userEmail + ' not found')

  var lastIndex = tasks.length - 1
  var lastTask = tasks[lastIndex]
  var lastTaskId = lastTask.id

  var countString = lastTaskId.substring(5)
  var count = parseInt(countString)

  var nextCount = count + 1
  var nextTaskId = 'task-' + nextCount

  var task = {
    id: nextTaskId,
    user: userEmail,
    text: '',
    status: 'todo'
  }

  tasks.push(task)


}
// BORRAR?
/*function createTaskDoing(userEmail) {
  //if (typeof userEmail !== 'string') return new Error('email is not a string')
  //if (!IS_EMAIL_REGEX.test(userEmail)) return new Error('email is not valid')

  let found = false

  for (let i = 0; i < users.length && !found; i++) {
    const user = users[i]

    if (user.email === userEmail)
      found = true
  }

  if (!found) throw new Error('user with email ' + ' not found')

  const lastIndex = tasks.length - 1
  const lastTask = tasks[lastIndex]
  const lastTaskId = lastTask.id

  const countString = lastTaskId.substring(5)
  const count = parseInt(countString)

  const nextCount = count + 1
  const nextTaskId = 'task-' + nextCount

  const task = {
    id: nextTaskId,
    user: userEmail,
    text: '',
    status: 'doing'
  }

  tasks.push(task)
}
function createTaskDone(userEmail) {
  //if (typeof userEmail !== 'string') return new Error('email is not a string')
  //if (!IS_EMAIL_REGEX.test(userEmail)) return new Error('email is not valid')

  let found = false

  for (let i = 0; i < users.length && !found; i++) {
    const user = users[i]

    if (user.email === userEmail)
      found = true
  }

  if (!found) throw new Error('user with email ' + ' not found')

  const lastIndex = tasks.length - 1
  const lastTask = tasks[lastIndex]
  const lastTaskId = lastTask.id

  const countString = lastTaskId.substring(5)
  const count = parseInt(countString)

  const nextCount = count + 1
  const nextTaskId = 'task-' + nextCount

  const task = {
    id: nextTaskId,
    user: userEmail,
    text: '',
    status: 'done'
  }

  tasks.push(task)

  
}*/








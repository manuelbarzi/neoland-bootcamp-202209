// CASE succeeds on new user (happy)

var name = 'Ju Anjo'
var email = 'ju@anjo.com'
var password = '123123123'

var res = registerUser(name, email, password)

console.assert(res === null)

var found = false

for (var i = 0; i < users.length && !found; i++) {
    var user = users[i]

    if (user.email === email) found = true
}

console.assert(found)

// CASE fails on existing user (unhappy)

var user = {
    name: 'Coco Drilo',
    email: 'coco@drilo.com',
    password: '123123123'
}

users.push(user)

var res = registerUser(user.name, user.email, user.password)

console.assert(res instanceof Error)
console.assert(res.message === 'user already exists')

// CASE fails on empy name (unhappy)

var res = registerUser('', 'ti@gre.com', '123123123')

console.assert(res instanceof Error)
console.assert(res.message === 'name length is less than 1')

// TODO add more unhappies...
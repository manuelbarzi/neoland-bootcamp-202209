/**
 * 
 * @param {*} name The user name
 * @param {*} email The user email
 * @param {*} password The user password
 * @returns  null | error
 */


function registerUser(name, email, password){
    for (i=0; i < users.length; i++){
        var user = users[i]

        if(user.email === email)
            return new Error('user already exists')
    }

    var user = {
        name,
        email,
        password
    }
    users.push(user)

    return null
}

function authenticateUsers(email, password) {
    for (let i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            if (user.password === password) 
                return user
            else
                return new Error('Wrong credentials')
        }
    }
    return new Error('Wrong credentials')
}
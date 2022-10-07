function updateUserEmail(email, newEmail) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === newEmail) {
            return new Error('user with e-mail ' + newEmail + ' already exists')
        }
    }
    debugger
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            user.email = newEmail

            return null
        }
    }

    return new Error('user with e-mail ' + email + ' not found')
}
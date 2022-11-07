function updateUserEmail(email, newEmail) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === newEmail) {
            return new Error('user with e-mail ' + newEmail + ' already exist')
        }
    }

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            user.mail = newEmail
            return null
        }
    }
    return new Error('user with e-mail ' + email + ' not found')
}
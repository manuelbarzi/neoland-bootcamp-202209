function updateUserEmail(oldEmail, newEmail) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (newEmail === ""){
            return null
        }

        if (user.email === newEmail) {
            return new Error('user with e-mail ' + newEmail + ' already exists')
        }
    }
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === oldEmail) {
            user.email = newEmail

            return null
        }
    }

    return new Error('user with e-mail ' + oldEmail + ' not found')
}
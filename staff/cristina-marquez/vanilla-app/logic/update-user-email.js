function updateUserEmail(email, newEmail) {
    // TODO validate input args

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === newEmail) {
            return new Error('user with e-mail ' + newEmail + ' already exists')
        }
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            user.email = newEmail

            return null
        }
    }

    return new Error('user with e-mail ' + email + ' not found')
}
const updateEmail = function (newEmail, email) {
    if (newEmail === email)
        throw new Error('you must put a new email')

    if (typeof newEmail !== 'string') throw new Error('new email is not a string')
    if (!IS_EMAIL_REGEX.test(newEmail)) throw new Error('new email is not valid')

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (newEmail === user.email)
            throw new Error('email already exists')
    }
    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (email === user.email) {
            for (let j = 0; j < tasks.length; j++) {
                if (tasks[j].user === email) {
                    tasks[j].user = newEmail
                }
            }
            return newEmail
        }
    }

    throw new Error('you are not registred')
}


const updateName = function (newName, email, name) {
    if (newName === name)
        throw new Error('you must put a new name')
    if (typeof newName !== 'string') throw new Error('new name is not a string')
    if (!IS_ALPHABETICAL_REGEX.test(newName)) throw new Error('new name is not alphabetical')


    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (email === user.email)
            return newName
    }
    throw new Error('you are not registred')

}


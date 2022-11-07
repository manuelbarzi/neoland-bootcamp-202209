const updatePassword = function (newPassword, email, password) {
    if (newPassword === password)
        throw new Error('you must put a new password')

    if (typeof newPassword !== 'string') throw new Error('new password is not a string')
    if (newPassword.length < 7) throw new Error('new password length is less than 7')
    if (HAS_SPACES_REGEX.test(newPassword)) throw new Error('new password has spaces')


    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (email === user.email)
            return newPassword
    }
    throw new Error('you are not registred')

}


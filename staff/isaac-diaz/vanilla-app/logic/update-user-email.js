function updateUserEmail(email, newEmail) {
    if (typeof userEmail !== 'string') throw new TypeError('userEmail is not a string')
    if (!IS_EMAIL_REGEX.test(userEmail)) throw new Error('userEmail is not valid')

    if (typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
    if (!IS_EMAIL_REGEX.test(newEmail)) throw new Error('newEmail is not valid')

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === newEmail) {
                        
            throw new Error('user with email ' + newEmail + ' already exist')
        }
    }

    for (let i = 0; i < users.length; i++){
        const user = users[i]

        if (user.email === email) {
            user.email = email 

            return
        }
    }
    throw new Error('user with email ' + email + ' not found')
}
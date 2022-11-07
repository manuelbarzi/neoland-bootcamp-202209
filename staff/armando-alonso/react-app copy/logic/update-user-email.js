/**
 * Update user Email in BD
 * 
 * @param {string} oldEmail The old Email from user session
 * @param {string} newEmail The new Email from the input form
 * 
 * @returns null | Error
 */

 function updateUserEmail(oldEmail, newEmail) {
    if (typeof newEmail !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(newEmail)) throw new Error('email is not valid')

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.email === newEmail) {
            throw new Error('The email ' + newEmail + ' already exists')
        }
    }
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.email === oldEmail) {
            user.email = newEmail

            for (let j = 0; j < tasks.length; j++) {
                const task = tasks[j]

                if (task.user === oldEmail) {
                    task.user = newEmail
                }
            }

            return
        }
        
    }

    throw new Error('User with email ' + oldEmail + ' not found')
    
}

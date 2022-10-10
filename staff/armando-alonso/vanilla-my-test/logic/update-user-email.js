/**
 * Update user Email in BD
 * 
 * @param {string} oldEmail The old Email from user session
 * @param {string} newEmail The new Email from the input form
 * 
 * @returns null | Error
 */

function updateUserEmail(oldEmail, newEmail) {
    if (typeof newEmail !== 'string') return new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(newEmail)) return new Error('email is not valid')

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.email === newEmail) {
            return new Error('The email ' + newEmail + ' already exists')
        }
    }
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.email === oldEmail) {
            user.email = newEmail

            return null
        }
        
    }

    return new Error('User with email ' + oldEmail + ' not found')
    
}

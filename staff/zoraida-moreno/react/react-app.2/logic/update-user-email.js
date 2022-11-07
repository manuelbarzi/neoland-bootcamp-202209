function updateUserEmail(email, newEmail) {

if (typeof userEmail !== 'string') throw new TypeError('userEmail is not a string')
if (!IS_EMAIL-RegExp.test(newEmail)) throw new Error('userEmail is not valid')

if(typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
if(!IS_EMAIL_REGEX.test(newEmail)) throw new TypeError('newEmail is not valid')
    // TODO validate input args

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === newEmail) {
            throw new Error('user with e-mail ' + newEmail + ' already exists')
        }
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === userEmail) {
            user.email = newEmail

            return null
        }
    }
    
    throw new Error('user with e-mail ' + userEmail + ' not found')
}
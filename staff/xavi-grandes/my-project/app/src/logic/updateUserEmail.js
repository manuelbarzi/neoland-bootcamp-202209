import { regex } from 'com'

const { IS_EMAIL_REGEX } = regex

/**
 * Update user email
 * 
 * @param {string} userEmail Client current e-mail
 * @param {string} newEmail The new email that client wants.
 */
export default function (userEmail, newEmail) {
if (typeof userEmail !== 'string') throw new TypeError ('userEmail is not a string')
if (!IS_EMAIL_REGEX.test(userEmail)) throw new Error('userEmail is not valid')
// test has to be change to new DataBase project

if (typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
if (!IS_EMAIL_REGEX.test(newEmail)) throw new Error('newEmail is not valid')
// test has to be change to new DataBase project

for (let i = 0; i < users.length; i++) {
    const user = users[i]

    if (user.email === newEmail)
        throw new Error('user with e-mail ' + newEmail + ' already exists')
}

for (let i = 0; i < users.length; i++) {
    const user = users[i]

    if (user.email === userEmail) {
        user.email = newEmail

        return
    }
}

throw new Error('user with e-mail ' + userEmail + ' not found')

}
/* -- */
/**
 * Update a user in DB
 * @param {string} oldName The old user name
 * @param {string} newName The new user name
 * @returns 
 */
function updateUserName(oldName, newName) {
    if (typeof newName !== "string") throw new Error("name is not string");
    if (newName.length < 1) throw new Error("name length is less than 1");
    if (!IS_ALPHABETICAL_REGEX.test(newName)) throw new Error("name is not alphabetical")

    if (newName === oldName) {
        throw new Error('Your new name cannot be the same as your current name')

    };
    if (user.name = newName) {
        return null
    }

    throw new Error('user with name ' + oldName + ' not found')
}

/* -- */
/**
 * Update a user in DB
 * @param {string} oldEmail The old user email
 * @param {string} newEmail The new user email
 * @returns 
 */

function updateUserEmail(oldEmail, newEmail) {
    if (typeof newEmail !== "string") throw new Error("email is not string");
    if (!IS_EMAIL_REGEX.test(newEmail)) throw new Error("email is not valid");

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === newEmail) {
            throw new Error('user with e-mail ' + newEmail + ' already exists')
        }
    }
    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === oldEmail) {
            user.email = newEmail
            return null
        }
    }

    throw new Error('user with e-mail ' + oldEmail + ' not found')
}

/* -- */
/**
 * 
 * @param {string} oldPassword The old user password 
 * @param {string} newPassword The old user password
 * @returns 
 */
function updateUserPassword(oldPassword, newPassword) {
    if (typeof newPassword !== "string") throw new Error("password is not a string");
    if (newPassword.length < 8) throw new Error("password length is less than 8");
    if (HAS_SPACES_REGEX.test(newPassword)) throw new Error("password has spaces");

    if (newPassword === oldPassword) {
        throw new Error('Your new password cannot be the same as your current password')

    };
    if (user.password = newPassword) {
        return null
    }

    throw new Error('user not found')
}
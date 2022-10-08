/**
 * Update a user in DB
 * 
 * @param {string} oldEmail The old user email
 * @param {string} newEmail The new user email
 * @returns 
 */

function updateUserEmail(oldEmail, newEmail) {
    /* TODO VALIDATE INPUT ARGS */

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === newEmail) {
            return new Error('user with e-mail ' + newEmail + ' already exists')
        }
    }
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === oldEmail) {
            user.email = newEmail

            return null
        }
    }

    return new Error('user with e-mail ' + oldEmail + ' not found')
}

/* ----------------------- */
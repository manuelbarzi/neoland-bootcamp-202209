function updateUserEmail(email, newEmail) {

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (newEmail === user.email) {
            return new Error('Email exists')
            
        }
        if (email === newEmail) {
            return new Error('This Email is the same that you have')
        }
    }
    sessionUser.email = newEmail
}
function updateUserEmail(email, newEmail) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === newEmail) {
                        
            return new Error('user with email ' + newEmail + ' already exist')
        }
    }

    for (var i = 0; i < users.length; i++){
        var user = users[i]

        if (user.email === email) {
            user.email = email 

            return null
        }
    }
    return new Error('User with email ' + email + ' not found')
}
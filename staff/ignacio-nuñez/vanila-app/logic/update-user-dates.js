var updateEmail = function (newEmail, email) {
    for (i = 0; i < users.length; i++) {
        var user = users[i]

        if (newEmail === user.email)
            return new Error('email already exists')
    }
    for (i=0; i<users.length; i++){
        var user = users[i]

        if(email === user.email)
        return newEmail
    } 
    return new Error('you are not registred')

}


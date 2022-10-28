const updateEmail = function (newEmail, email) {
    if(newEmail === email)
        throw new Error ('you must put a new email')

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (newEmail === user.email)
            throw new Error('email already exists')
    }
    for (let i=0; i<users.length; i++){
        const user = users[i]

        if(email === user.email)
        return newEmail
    } 
    throw new Error('you are not registred')

}


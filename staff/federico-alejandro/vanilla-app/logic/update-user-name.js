function updateUserName(name, newName) {
    // TODO validate input args  
    if (typeof newName !== 'string') return new Error ('name is not a string')
    if (newName.length < 1) return new Error('name length is less than 1')
    if (!IS_ALPHABETICAL_REGEX.test(newName)) return new Error ('name is not alphabetical')

    for (var i= 0; i < users.length; i++) {
        var user = users[i]


        if (user.name === newName) {
            return new Error('user with name ' + newName + ' already exists')
            
        }
    }
    
    for (var i= 0; i < users.length; i++) {
        var user = users[i]

        if (user.name === name) {
            user.name = newName

            return null
        }
    }

    return new Error('user with name ' + name + ' not found')

}
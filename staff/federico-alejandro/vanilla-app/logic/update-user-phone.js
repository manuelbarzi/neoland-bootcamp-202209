function updateUserPhone(Phone, newPhone) {
    // TODO validate input args  
    // numero telefono es un string??
    if (typeof newPhone !== 'string') return new Error ('Phone is not a string')
    if (newPhone.length < 9) return new Error('Phone length is less than 9')
    if (IS_ALPHABETICAL_REGEX.test(newPhone)) return new Error ('Phone must be numerical')

    for (var i= 0; i < users.length; i++) {
        var user = users[i]


        if (user.Phone === newPhone) {
            return new Error('user with Phone ' + newPhone + ' already exists')
            
        }
    }
    
    for (var i= 0; i < users.length; i++) {
        var user = users[i]

        if (user.Phone === Phone) {
            user.Phone = newPhone

            return null
        }
    }

    return new Error('user with Phone ' + Phone + ' not found')

}
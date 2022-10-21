function createBox(password) {
    let __password__ = password
    let __secret__ = null

    return {
        saveSecret: function (password, secret) {
            if (password === __password__)
                __secret__ = secret
            else throw new Error('wrong password')
        },

        retrieveSecret: function (password) {
            if (password === __password__)
                return __secret__
            else throw new Error('wrong password')
        },

        updatePassword: function (password, newPassword) {
            if (password === __password__)
                __password__ = newPassword
            else throw new Error('wrong password')
        }
    }
}

var box1 = createBox('123123123')

box1.saveSecret('123123123', 'me duermo en clase y nadie lo ve, porque estoy en remoto')

var box2 = createBox('234234234')

box2.saveSecret('234234234', 'por las noches como chocolate, y mi mujer no lo sabe')
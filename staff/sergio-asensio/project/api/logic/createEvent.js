const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')

function createEvent(userId, month, title, body, requeriment, capacity, date, inscription, img) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof month !== 'string') throw new TypeError('month is not a string')
    if (!month.length) throw new LengthError('month is empty')
    if (month !== 'january' && month !== 'february' && month !== 'march' && month !== 'april' && month !== 'may' && month !== 'june' && month !== 'july' && month !== 'august' && month !== 'september' && month !== 'october' && month !== 'november' && month !== 'december') throw new Error('its not a month')

    if (typeof title !== 'string') throw new TypeError('text is not a string')
    if (!title.length) throw new LengthError('text is empty')

    if (typeof body !== 'string') throw new TypeError('visibility is not a string')
    if (!body.length) throw new LengthError('visibility is empty')

    if (typeof requeriment !== 'string') throw new TypeError('requeriment is not a string')
    if (!requeriment.length) throw new LengthError('requeriment is empty')

    if (typeof capacity !== 'number') throw new TypeError('capacity is not a number')
    if (!capacity) throw new LengthError('capacity is empty')


    // if (typeof date !== 'string') throw new TypeError('date is not a string')
    // if (!date.length) throw new LengthError('date is empty')

    if (typeof inscription !== 'string') throw new TypeError('inscription is not a string')
    if (inscription !== 'close' && inscription !== 'open') throw new Error('invalid inscription')
    if (!inscription.length) throw new LengthError('inscription is empty')

    let monthNumber

    if (month === 'january') {
         monthNumber = 0
    }
    else if (month === 'february'){
         monthNumber = 1
    }
    else if (month === 'march'){
         monthNumber = 2
    }
    else if (month === 'april'){
         monthNumber = 3
    }
    else if (month === 'may'){
         monthNumber = 4
    }
    else if (month === 'june'){
         monthNumber = 5
    }
    else if (month === 'july'){
         monthNumber = 6
    }
    else if (month === 'august'){
         monthNumber = 7
    }
    else if (month === 'september'){
         monthNumber = 8
    }
    else if (month === 'october'){
         monthNumber = 9
    }
    else if (month === 'november'){
         monthNumber = 10
    }
    else if (month === 'december'){
         monthNumber = 11
    }

        return User.findById(userId)
            .then(user => {
                if (!user)
                    throw new NotFoundError(`user with id ${userId} does not exist`)
                if (user.role !== 'admin') throw new Error('user is not able to create a event')

                return Event.create({ user: userId, month, monthNumber, title, body, requeriment, capacity, date, inscription, img })
            })
}

module.exports = createEvent
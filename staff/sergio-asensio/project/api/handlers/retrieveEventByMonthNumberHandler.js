const { NotFoundError } = require('com/errors')
const retrieveEventByMonthNumber = require('../logic/retrieveEventByMonthNumber')

module.exports = (req, res) => {
    try {
        const { userId, params: { month } } = req

        retrieveEventByMonthNumber(userId, Number(month))
            .then(events => res.json(events))
            .catch(error => {
                if (error instanceof NotFoundError) {
                    res.status(404).json({ error: error.message })
                } else {
                    res.status(500).json({ error: error.message })
                }
            })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
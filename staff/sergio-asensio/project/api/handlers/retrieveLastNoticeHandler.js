const retrieveLastNotice= require('../logic/retrieveLastNotice')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveLastNotice(userId)
            .then(notice => res.json(notice))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}